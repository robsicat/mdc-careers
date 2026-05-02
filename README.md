# MDC Careers — "Working at MDC"

Static Next.js 16 prototype of Miami Dade College's "Working at MDC" careers
section. Editorial visual language inspired by Nike Careers — full-bleed
imagery, oversized typography, dark manifesto moments.

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export to /out/
```

## Style guide & design system

This repo ships with a **live, interactive style guide** at `/style-guide`.
It documents every design token, typography rule, and component, and
auto-updates whenever the underlying CSS variables or components change.

For the written handoff document — tech stack, conventions, extension
guide, production checklist — see [`docs/STYLE_GUIDE.md`](./docs/STYLE_GUIDE.md).

**Single source of truth for design values:** `src/app/globals.css`
(`@theme` block).

## Project structure

```
src/
├── app/                # Routes (incl. /style-guide)
├── components/
│   ├── layout/         # Nav, Footer
│   ├── ui/             # Reusable primitives
│   ├── style-guide/    # Helpers used only on /style-guide
│   └── pages/          # Full page compositions
└── lib/
    ├── data.ts         # All page copy
    └── styleGuide.ts   # Token + component registry
docs/
└── STYLE_GUIDE.md      # Written handoff doc for the dev team
```

## Deploy

The project uses `output: 'export'` so the build produces static HTML in
`/out/`. Drop it on any static host (Vercel, Netlify, Cloudflare Pages,
S3 + CloudFront).
