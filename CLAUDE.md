@AGENTS.md

# MDC Careers — "Working at MDC" Prototype

## Project Overview

Static Next.js 16 prototype of Miami Dade College's "Working at MDC" careers section. Nike careers-inspired visual redesign with full-bleed imagery, editorial typography, and a dark manifesto section. No backend — static export only.

## Tech Stack

- Next.js 16 (App Router, static export via `output: 'export'`)
- TypeScript, React 19
- Tailwind CSS 4 (`@theme` tokens in `globals.css`)
- Framer Motion 12 (scroll reveal animations)
- Lucide React (icons)
- Instrument Sans (body/headlines) + Instrument Serif (italic flourishes) via `next/font/google`
- GeistMono (monospace) via `geist` npm package

## Project Structure

```
src/
├── app/                    # Routes (/, /why-mdc, /our-focus, /positions-available, /our-culture)
│   ├── layout.tsx          # Root layout + fonts
│   └── globals.css         # @theme design tokens (MDC palette)
├── components/
│   ├── layout/             # Nav, Footer
│   ├── ui/                 # ImageHero, ManifestoSection, ImageCardCarousel, ImageTextBlock,
│   │                       # Card, InfoCallout, TestimonialCard, CTAButton, SectionTitle,
│   │                       # NumberedCard, ScrollReveal
│   └── pages/              # Full page compositions (OverviewPage, WhyMDCPage, etc.)
└── lib/
    └── data.ts             # All page content as typed constants
```

## Design Tokens

MDC brand colors defined in `globals.css` @theme block:
- Primary blue: `mdc-blue` (#003B71)
- Dark blue: `mdc-blue-dark` (#002A54)
- Light blue: `mdc-blue-light` (#E8F0F8)
- Charcoal: `charcoal` (#111111) — text and dark surfaces
- Stone: `stone` (#F1F1EF) — light backgrounds
- Accent: `accent` (#003B71)

## Commands

- `npm run dev` — Local development
- `npm run build` — Static export to `/out/`

## Key Patterns

- All content lives in `lib/data.ts` — edit content there, not in components
- Layout: Sticky top nav with centered links + "Apply Now" CTA
- Full-bleed `ImageHero` with background image + gradient overlay on every page
- `ManifestoSection` for dramatic dark typography sections
- `ImageCardCarousel` for horizontal scroll image cards
- `ImageTextBlock` for alternating image+text editorial sections
- `ScrollReveal` wraps elements for fade-up-on-scroll animation
- `CTAButton` uses pill shape (rounded-full) with dark/white/outline variants
- YouTube thumbnails (`img.youtube.com/vi/{id}/maxresdefault.jpg`) used as imagery
- External links always use `target="_blank" rel="noopener noreferrer"` + `sr-only` text
