# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Serve production build locally
npm run lint         # ESLint via Next.js
npm run analyze      # Build with bundle size analysis (ANALYZE=true)
```

No test suite exists in this project.

## Architecture

**Purtanindo** is a company profile / marketing site — **frontend only**, no backend or database.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS · React Icons · Deployed on Vercel (Singapore region).

### Content is centralized in `src/constants/`

All page copy lives in `src/constants/content.ts` as the `CONTENT` constant. SEO metadata (including WhatsApp number, site URL, email, Google verification tag) lives in `src/constants/seo.ts`. Navigation and footer links are in `src/constants/navigation.ts`. **When changing any text, contact info, or SEO data, edit these files — not the components.**

### Component layers

```
src/components/
  ui/        — Primitives: Button, Card, Container, Section, SectionHeading, ContactButton
  layout/    — Navbar, Footer, FloatingButtons (barrel-exported via index.ts)
  sections/  — Page sections: HeroSection, ServicesSection, WhyChooseUsSection,
               CTASection, TestimonialsSection, FAQSection
```

The root layout (`src/app/layout.tsx`) wraps all pages with `<Navbar>`, `<Footer>`, and `<FloatingButtons>`.

### Performance pattern: above vs. below the fold

In `src/app/page.tsx`, the three above-the-fold sections (`HeroSection`, `ServicesSection`, `WhyChooseUsSection`) are statically imported. The three below-the-fold sections (`CTASection`, `TestimonialsSection`, `FAQSection`) are loaded via `next/dynamic` with skeleton placeholders — keep this pattern when adding new sections.

### Styling conventions

- Brand gradient: `#ffac00` → `#fd5e79` (defined in `tailwind.config.js` as `brand.start`/`brand.end`)
- Two custom CSS utilities defined in `globals.css`: `.text-gradient` (gradient text) and `.gradient-border` (gradient border wrapper)
- `cn()` from `src/lib/utils.ts` is the class-merge helper (thin wrapper around `Array.filter(Boolean).join(' ')`)
- Path alias `@/` maps to `./src/`

### Pages

Five routes under `src/app/`: `/` (home), `/services`, `/portfolio`, `/about`, `/contact`. Each page that needs its own SEO imports from `PAGE_METADATA` in `src/constants/seo.ts`.

### Contact / WhatsApp integration

The WhatsApp number and email are defined once in `src/constants/seo.ts` (`WHATSAPP_NUMBER`, `EMAIL`). Helper utilities `getWhatsAppUrl()` and `formatWhatsAppNumber()` are in `src/lib/utils.ts`.

### Coding Rules 
@AGENTS.md

### Design Rules
@DESIGN.md
