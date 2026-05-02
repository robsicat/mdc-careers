# MDC Careers — Style Guide & Design System Handoff

**Audience:** the developers who will take this prototype to production.
**Status:** v1.0 — handoff draft.

---

## 1. What you're receiving

1. **A live, interactive style guide** at the route `/style-guide`. It is the
   primary deliverable. It renders directly from production code, so it
   cannot drift from the implementation.
2. **This document.** A written companion that explains the system, the
   conventions, and how to extend it.
3. **The source repository.** A working Next.js 16 application that
   demonstrates every component in real page contexts.

> **Why a live page?** A traditional static style guide (PDF, Figma export,
> hand-written Markdown) drifts the moment a designer changes a color or a
> developer tweaks a margin. This one cannot drift: every swatch and example
> is read from the same CSS variables and React components that ship to
> users.

---

## 2. Tech stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (App Router, **`output: 'export'`** static build) | 16 |
| Language | TypeScript | 5 |
| UI runtime | React | 19 |
| Styling | Tailwind CSS (token-driven via `@theme`) | 4 |
| Animation | Framer Motion | 12 |
| Icons | Lucide React | latest |
| Fonts | Instrument Sans, Instrument Serif (Google), Geist Mono (npm) | — |

There is **no backend.** The build outputs static HTML/JS into `/out/` and
can be hosted on any static host (Vercel, Netlify, Cloudflare Pages, S3 +
CloudFront, etc.).

---

## 3. How the design system flows

```
src/app/globals.css      ──▶  Tailwind utilities    ──▶  React components
  (@theme tokens —              (auto-generated            (in src/components/ui)
   single source of truth)       from token names)
```

There are three layers, each with one responsibility:

- **Tokens** (`globals.css`) define every brand value: colors, radii,
  shadows, typography, motion. **This is the only file you edit when a
  design value changes.**
- **Utilities** are emitted by Tailwind 4 from the `@theme` block. Anything
  declared as `--color-mdc-blue` is automatically available as
  `bg-mdc-blue`, `text-mdc-blue`, etc.
- **Components** consume the utilities. Every visual primitive lives under
  `src/components/ui/` with typed props.

A separate registry (`src/lib/styleGuide.ts`) declares which tokens and
components appear on the live style guide. Editing a value never touches
this file — only the addition or removal of tokens does.

---

## 4. Repository layout

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, nav, footer
│   ├── globals.css         # ← Design tokens live here
│   ├── page.tsx            # Overview (homepage)
│   ├── why-mdc/
│   ├── our-focus/
│   ├── our-culture/
│   ├── positions-available/
│   └── style-guide/        # ← The live style guide
├── components/
│   ├── layout/             # Nav, Footer
│   ├── pages/              # Full page compositions
│   ├── ui/                 # Reusable primitives
│   └── style-guide/        # Helpers used only on /style-guide
└── lib/
    ├── data.ts             # All page copy & content
    └── styleGuide.ts       # Token + component registry
docs/
└── STYLE_GUIDE.md          # This document
```

**Convention worth highlighting:** all marketing copy lives in
`src/lib/data.ts`. Components are content-agnostic. To change page text,
edit `data.ts` — never the components.

---

## 5. Design tokens

Defined in `src/app/globals.css` under `@theme`. The live page renders the
canonical list with resolved values.

### Color
- **Brand:** `mdc-blue`, `mdc-blue-dark`, `mdc-blue-light`, `accent`
  (alias of `mdc-blue`), `accent-hover`
- **Neutrals:** `charcoal`, `charcoal-light`, `navy`, `navy-light`, `stone`,
  `stone-dark`, `gray-50`, `white`
- **Alpha:** `warm-gray`, `warm-muted`, `navy-border`, `border`,
  `border-hover`

### Typography
- **`--font-sans`** — Instrument Sans. Body, UI, and display headlines.
- **`--font-heading`** — Instrument Serif. Italic flourishes only (subtitles,
  card titles, quote bodies). Never used for body copy.
- **`--font-mono`** — Geist Mono. Code and numeric labels.

### Spacing & shape
- **Radii:** `--radius-sm` (6px), `-md` (12px), `-lg` (14px), `-xl` (20px).
  Exposed as `rounded-radius-sm`, etc.
- **Shadows:** `--shadow-xs` through `-xl`. Stacked, blue-hued.

### Motion
- **Durations:** `--duration-fast` (150ms), `-normal` (250ms), `-slow`
  (350ms).
- **Easings:** `--ease-spring`, `-out-smooth`, `-snappy`.

A global `prefers-reduced-motion` rule disables animations for users who
opt out. Don't undo it.

---

## 6. Component inventory

| Component | Purpose |
|---|---|
| `CTAButton` | The pill-shaped call-to-action. Five variants. |
| `SectionTitle` | Standard h2 block with optional eyebrow + subtitle. |
| `Card` | Generic content card. Light/dark themes, optional icon and link. |
| `InfoCallout` | Three variants: highlight, stat, quote. |
| `NumberedCard` | Step or sequence card with large faded numeral. |
| `TestimonialCard` | Photo-led testimonial with overlapping quote. |
| `ImageHero` | Full-bleed page hero. One per page, always at the top. |
| `ManifestoSection` | Dark, oversized statement section. Once per page max. |
| `ImageTextBlock` | Editorial 50/50 image-and-text. Alternate `reverse`. |
| `ImageCardCarousel` | Horizontally scrolling row of image cards. |
| `ScrollReveal` | Wrap any element to fade-and-rise on scroll. |

Full prop tables and live examples are on `/style-guide`.

---

## 7. Conventions

### Content
- All copy lives in `src/lib/data.ts`. Components consume it via typed
  interfaces.
- Headings are sentence-case unless explicitly uppercase (Manifesto,
  ImageTextBlock, ImageCardCarousel headlines).

### Accessibility
- One `<h1>` per page (the hero). `SectionTitle` renders `<h2>`. Cards use
  `<h3>`.
- Skip-to-content anchor in `layout.tsx` is required and must remain at the
  top of `<body>`.
- External links: `target="_blank"`, `rel="noopener noreferrer"`, and a
  `sr-only` "(opens in new tab)" span. `CTAButton` does this for you when
  `external` is set.
- Focus rings are visible (2px accent ring). Do not suppress.
- Decorative images use `alt=""`. Content images need descriptive alt text.
- Animations respect `prefers-reduced-motion` globally.

### Imagery
- Production photography is **not** included. Current placeholders are
  YouTube thumbnails (`img.youtube.com/vi/{id}/maxresdefault.jpg`). Replace
  before launch.
- Hero images render at up to ~900px tall, full-bleed. Use editorial,
  high-density photography. 4:3 works for `ImageTextBlock` and the carousel.

### Animation
- Use `ScrollReveal` for any content that should enter on scroll. Stagger
  groups by passing `delay={i * 0.05}` to `0.15` increments.
- For interactive micro-motion, prefer the `--duration-fast` token + a
  Tailwind transition class.

---

## 8. Extending the system

### Change a token value
Edit `src/app/globals.css`. Done. Every consumer — including the live
style guide — updates.

### Add a new token
1. Declare it in `globals.css` (`@theme` block).
2. Add an entry to the appropriate group in `src/lib/styleGuide.ts` so it
   shows up on the live guide.

### Add a new component
1. Create the file under `src/components/ui/`. Follow the existing pattern:
   typed props, theme-aware where it makes sense, optional `className`
   escape hatch, no business logic.
2. Add an entry to `componentSpecs` in `src/lib/styleGuide.ts`.
3. Add a `<Showcase>` block in `src/app/style-guide/page.tsx`.

### Replace a font
1. Update the import in `src/app/layout.tsx`.
2. Update the matching `--font-*` variable in `globals.css` to point at the
   new font's CSS variable.

### Tweak global spacing or radii
Same flow — edit `globals.css`. Components reference tokens, never raw
pixel values, so the change propagates.

---

## 9. Build, run, deploy

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Static export to /out/
```

`output: 'export'` constraints to be aware of:
- No `getServerSideProps`, no API routes. All data must be available at
  build time.
- `next/image` is configured with `unoptimized: true`. Use `<img>` directly
  if you don't need the loader.
- All routes are pre-rendered as static HTML.

### Recommended hosting
- **Vercel.** Connect the GitHub repo; it auto-detects Next.js and deploys
  on every push. Preview URLs per-PR are useful for design review.
- **Netlify** or **Cloudflare Pages.** Same flow, equally simple.
- **S3 + CloudFront.** Upload `/out/` after `npm run build`.

---

## 10. Production readiness checklist

Items that need to be addressed before this prototype goes live:

- [ ] **Photography.** Replace every YouTube thumbnail and any other
  placeholder image with licensed MDC photography.
- [ ] **Logo.** The header currently uses a wordmark ("MDC / Careers"). If a
  brand-approved logomark is required, swap it in `src/components/layout/Nav.tsx`.
- [ ] **Apply Now URL.** Currently `https://recruitment.mdc.edu`. Confirm
  with the recruiting team and update in `data.ts` and `Nav.tsx`.
- [ ] **Real positions data.** `positions-available` is currently static.
  Decide on integration: ATS feed (Workday, iCIMS, Greenhouse) at build
  time, or a small JSON file maintained by HR.
- [ ] **Metadata.** Each route should have a unique `metadata` export with
  Open Graph image, description, and title.
- [ ] **Analytics.** Add the MDC analytics property (GA4 / GTM / Plausible)
  in `layout.tsx`.
- [ ] **Cookie/consent banner** if required by MDC's compliance standards.
- [ ] **Lighthouse + axe.** Run before launch. Target 90+ across the board.
- [ ] **Domain & redirects.** Confirm the production URL and any redirects
  from the existing careers page.

---

## 11. Open questions

These are not blockers, but should be answered during kickoff:

- Is there an existing **MDC brand asset library** we should pull from
  (logo lockups, approved photography, brand guidelines PDF)?
- Who owns the **font licenses**? Instrument Sans/Serif and Geist Mono are
  open-source, but if MDC uses an enterprise web-fonts service, we may need
  to swap them out.
- What **CMS or content workflow**, if any, is needed? Currently all copy
  is editable only by developers via `data.ts`. If marketing wants to edit
  copy themselves, plug in a headless CMS (Sanity, Contentful, Payload).
- What is the desired **review and deploy workflow**? PR previews via
  Vercel, manual deploys, or something else?

---

## 12. Where to start

1. Read this document.
2. Clone the repo, `npm install`, `npm run dev`.
3. Open **`/style-guide`** in your browser. That page is your reference for
   every visual decision.
4. Open `src/app/globals.css` to see the token definitions.
5. Browse `src/components/ui/` to see how components consume the tokens.
6. Look at `src/components/pages/OverviewPage.tsx` to see how pages compose
   the primitives.

If anything in the live style guide doesn't match what's in the repo, the
repo is wrong — not the guide. File a bug.
