# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

Next.js 15 best practices and patterns for this repository. Read alongside `CLAUDE.md`.

## Server vs Client Components

**Default to Server Components.** Add `'use client'` only when the component needs browser APIs (`window`, `document`), React hooks (`useState`, `useEffect`, `usePathname`), or event handlers directly attached to the component.

| Component type | Directive needed? | Examples in this repo |
|---|---|---|
| Page files (`app/**/page.tsx`) | No — server by default | `services/page.tsx`, `about/page.tsx` |
| Sections that only render data | No | `ServicesSection`, `WhyChooseUsSection` |
| Sections with `window.*` or hooks | Yes | `HeroSection` (`window.open`), `Navbar` (`useState`, `useEffect`, `usePathname`) |

When a Server Component needs an interactive child, extract only the interactive part into a separate `'use client'` file rather than marking the whole section client-side.

## Adding a New Page

Follow the pattern from `src/app/services/page.tsx`:

1. Create `src/app/<route>/page.tsx` as a Server Component (no `'use client'`)
2. Export `metadata` at the top, pulling from `PAGE_METADATA` in `src/constants/seo.ts`
3. Add the page's metadata entry to `PAGE_METADATA` in `seo.ts` — title, description, keywords, openGraph
4. Pull all copy from `CONTENT` in `src/constants/content.ts`
5. Add the route to `NAV_LINKS` / `FOOTER_LINKS` in `src/constants/navigation.ts` if it belongs in navigation
6. Add the URL to `src/app/sitemap.ts`

```tsx
// Minimal page template
import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/constants/seo';
import { CONTENT } from '@/constants/content';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: PAGE_METADATA.myPage.title,
  description: PAGE_METADATA.myPage.description,
  openGraph: {
    title: PAGE_METADATA.myPage.title,
    description: PAGE_METADATA.myPage.description,
  },
};

export default function MyPage() {
  return (
    <>
      {/* Hero: pt-32 clears the fixed navbar */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        ...
      </Section>
      <CTASection />
    </>
  );
}
```

## Section Composition

Every page section follows the same three-layer nesting:

```tsx
<Section id="section-id" background="gray">   {/* py-16 md:py-24 + bg variant */}
  <Container>                                   {/* max-w-7xl + horizontal padding */}
    <SectionHeading
      heading="..."
      subheading="..."    {/* small uppercase label above heading */}
      description="..."   {/* optional paragraph below heading */}
    />
    {/* section content */}
  </Container>
</Section>
```

`background` accepts `'white'` | `'gray'` | `'gradient'`. Alternate between `white` and `gray` across adjacent sections to create visual separation.

## Images

Use `next/image` for all images — never `<img>`.

```tsx
// Known dimensions (e.g. logo, avatar)
<Image src="/images/logo.webp" alt="..." width={150} height={40} priority />

// Fill a positioned parent (e.g. hero backdrop, card thumbnail)
<div className="relative h-96 rounded-2xl overflow-hidden">
  <Image src="/images/photo.webp" alt="..." fill className="object-cover" />
</div>
```

- Add `priority` only to above-the-fold images (logo in Navbar, hero background)
- All images live in `public/images/` as `.webp`

## Metadata Pattern

Each page exports its own `metadata` object. Do not define page-specific metadata in `layout.tsx` — only the global `DEFAULT_METADATA` lives there.

```tsx
export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: PAGE_METADATA.contact.keywords,
  openGraph: {
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
  },
};
```

## UI Primitives

| Component | Props of note | When to use |
|---|---|---|
| `<Button>` | `variant`: `primary`\|`secondary`\|`outline`\|`ghost`; `size`: `sm`\|`md`\|`lg` | Internal actions (`onClick`) |
| `<ContactButton>` | Same API + `href` | External links (WhatsApp, email) — renders an `<a>` tag |
| `<Card>` | `hover?: boolean` | Content cards; `hover` adds lift on hover |
| `<Section>` | `id`, `background`, `className` | Top-level section wrapper |
| `<Container>` | `className` | Max-width content wrapper inside `<Section>` |
| `<SectionHeading>` | `heading`, `subheading`, `description`, `align` | Section titles |

Use `ContactButton` (not `Button`) for any link that opens an external URL so it renders a proper `<a>` element.

## Below-the-Fold Dynamic Imports

Sections that appear below the fold must be dynamically imported on the home page (`src/app/page.tsx`) to avoid blocking the initial render. Use this pattern:

```tsx
const NewSection = dynamic(
  () => import('@/components/sections/NewSection').then(mod => ({ default: mod.NewSection })),
  { loading: () => <div className="min-h-[400px]" /> },
);
```

Sections reused on inner pages (e.g. `CTASection`) can be statically imported there — the dynamic import rule applies only in `src/app/page.tsx`.

## Icons

Import from `react-icons` using specific sub-packages to keep bundle size in check:

```tsx
import { FaWhatsapp } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
```

Never import from the root `react-icons` index.

## Navigation and Links

- Use `next/link` (`<Link>`) for all internal navigation
- Use `<ContactButton href="...">` for external links (WhatsApp, email, social)
- Never use `<a>` directly for internal routes
- `WHATSAPP_URL` is pre-built and exported from `src/constants/seo.ts` — don't construct it manually

## TypeScript

Strict mode is enabled. Common patterns in this codebase:

- `as const` on all constant objects in `src/constants/` — respect the inferred readonly types
- Icon maps use `keyof typeof iconMap` for safe lookup:
  ```tsx
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  ```
- Prefer `interface` for component props that extend HTML element types, `type` for unions and aliases
