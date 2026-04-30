# MDC Careers — Session Log

## 2026-03-19 — Initial Build

### Completed
- Scaffolded Next.js 16 project with TypeScript, Tailwind CSS 4, Framer Motion 12, Lucide React
- Configured static export (`output: 'export'`) in next.config.ts
- Set up DM Sans + Montserrat fonts via next/font/google
- Built design token system in globals.css @theme (MDC brand palette)
- Created layout shell: Sidebar (desktop + mobile drawer), Header (breadcrumb), Footer (dark navy)
- Built 7 reusable UI components: ScrollReveal, SectionTitle, CTAButton, Card, HeroSection, InfoCallout, TestimonialCard
- Created comprehensive content data in lib/data.ts
- Built all 5 page compositions: Overview, Why MDC, Our Focus, Positions Available, Our Culture
- All routes build and export successfully

### Verified
- `npm run build` passes — all 5 routes generate as static HTML
- Static export produces HTML files for all routes

### Next Steps
- Add placeholder hero images (currently gradient-only heroes)
- Responsive QA at mobile/tablet breakpoints
- Lighthouse accessibility audit
- Deploy to Vercel
