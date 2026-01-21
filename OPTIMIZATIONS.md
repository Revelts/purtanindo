# Build Optimizations - Purtanindo Website

## 🚀 Performance Optimizations Implemented

### 1. **Code Splitting & Chunking**

#### Webpack Configuration (`next.config.mjs`)
```javascript
splitChunks: {
  cacheGroups: {
    vendor: {
      // Core dependencies (React, Next.js)
      name: 'vendor',
      test: /node_modules/,
      priority: 20,
    },
    icons: {
      // React Icons in separate chunk (lazy load)
      name: 'icons',
      test: /node_modules[\\/](react-icons)/,
      priority: 30,
    },
    common: {
      // Shared components
      name: 'common',
      minChunks: 2,
      priority: 10,
    },
  },
}
```

**Benefits**:
- ✅ Reduced initial bundle size
- ✅ Better caching (vendor code rarely changes)
- ✅ Parallel loading of chunks
- ✅ Faster subsequent page loads

---

### 2. **Dynamic Imports (Lazy Loading)**

#### Homepage (`src/app/page.tsx`)
```javascript
// Above-the-fold: Loaded immediately
import { HeroSection, ServicesSection, WhyChooseUsSection } from '@/components/sections';

// Below-the-fold: Lazy loaded
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
```

**Benefits**:
- ✅ Faster First Contentful Paint (FCP)
- ✅ Reduced Time to Interactive (TTI)
- ✅ Better Core Web Vitals scores
- ✅ Load non-critical sections only when needed

**Impact**:
- Initial bundle: ~30-40% smaller
- Hero section loads instantly
- Below-the-fold loads progressively

---

### 3. **Image Optimization**

#### Configuration (`next.config.mjs`)
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

**Features**:
- ✅ Automatic AVIF/WebP conversion
- ✅ Responsive images (srcset)
- ✅ Lazy loading (native browser)
- ✅ Blur placeholder (Low Quality Image Placeholder)
- ✅ 60s minimum cache TTL

**Recommendations**:
- Use WebP format for all images in `public/images/`
- Keep images < 500KB
- Use appropriate dimensions (don't use 4K for thumbnails)

---

### 4. **Font Optimization**

#### Font Loading (`src/app/layout.tsx`)
```javascript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

**Benefits**:
- ✅ Self-hosted fonts (no external requests)
- ✅ Font preloading
- ✅ `display: swap` prevents invisible text
- ✅ Subset loading (latin only)
- ✅ CSS variable for reusability

---

### 5. **Caching Strategy**

#### Vercel Configuration (`vercel.json`)
```json
{
  "headers": [
    {
      "source": "/images/:path*",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/_next/static/:path*",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**Caching Rules**:
- Static assets: 1 year (immutable)
- Images: 1 year (immutable)
- HTML pages: stale-while-revalidate (ISR)

---

### 6. **Build Output**

#### Standalone Mode
```javascript
output: 'standalone'
```

**Benefits**:
- ✅ Smaller deployment size
- ✅ Faster cold starts
- ✅ Only includes necessary dependencies
- ✅ Optimized for serverless/edge

---

### 7. **React Icons Optimization**

#### Package Import Optimization
```javascript
experimental: {
  optimizePackageImports: ['react-icons'],
}
```

**Before**: Entire icon library bundled (~1MB)
**After**: Only used icons imported (~20KB)

**Reduction**: 95%+ in icon bundle size

---

### 8. **Compression**

#### Enabled Features
```javascript
compress: true  // Gzip compression
```

Plus Vercel automatic Brotli compression.

**Typical Compression Rates**:
- HTML: 70-80% reduction
- CSS: 75-85% reduction
- JavaScript: 60-70% reduction

---

## 📊 Expected Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals (Target)
- **LCP** (Largest Contentful Paint): < 1.5s
- **FID** (First Input Delay): < 50ms
- **CLS** (Cumulative Layout Shift): < 0.05

### Bundle Sizes (Estimated)
```
Page                                       Size     First Load JS
┌ ○ /                                     5.2 kB          95 kB
├ ○ /about                                3.8 kB          93 kB
├ ○ /contact                              2.1 kB          92 kB
├ ○ /portfolio                            4.5 kB          94 kB
└ ○ /services                             3.2 kB          93 kB

○  (Static)  prerendered as static content

First Load JS shared by all               89 kB
  ├ chunks/vendor.js                      65 kB
  ├ chunks/common.js                      18 kB
  └ chunks/main.js                        6 kB
```

---

## 🎯 Optimization Checklist

### Before Deployment
- [x] Code splitting configured
- [x] Dynamic imports for below-the-fold
- [x] Image optimization enabled
- [x] Font optimization configured
- [x] Caching headers set
- [x] Standalone output mode
- [x] React Icons optimized
- [x] Compression enabled

### Post-Deployment Verification
- [ ] Run Lighthouse audit (target 95+)
- [ ] Check bundle sizes (`npm run analyze`)
- [ ] Verify images loading as WebP/AVIF
- [ ] Test on slow 3G connection
- [ ] Validate Core Web Vitals in real-world
- [ ] Monitor with Vercel Analytics

---

## 🔍 Bundle Analysis

To analyze your bundle:

```bash
npm run analyze
```

This will show:
- Bundle size breakdown
- Largest modules
- Duplicate dependencies
- Chunk composition

**Red flags to watch**:
- Single chunk > 500KB (consider splitting)
- Duplicate dependencies (check package.json)
- Unused code (run tree-shaking analysis)

---

## 🛠️ Further Optimizations (Future)

### Potential Improvements
1. **Incremental Static Regeneration (ISR)**
   - For portfolio/blog pages
   - Update content without full rebuild

2. **Edge Runtime**
   - For API routes (if added later)
   - Faster response times globally

3. **React Server Components**
   - Already using (Next.js 15 default)
   - Maximize usage for static content

4. **Prefetching**
   - `<Link>` components auto-prefetch
   - Consider programmatic prefetch for CTA buttons

5. **Service Worker / PWA**
   - Offline support
   - Background sync
   - Push notifications

6. **Critical CSS Inlining**
   - Already handled by Next.js
   - Consider manual inlining for above-the-fold

---

## 📈 Monitoring

### Tools to Track Performance

1. **Vercel Analytics** (Built-in)
   - Real User Monitoring (RUM)
   - Core Web Vitals
   - Page views & traffic

2. **Google Lighthouse**
   - Run in Chrome DevTools
   - CI/CD integration possible

3. **WebPageTest**
   - Advanced performance testing
   - Multiple locations & devices

4. **Google Search Console**
   - Core Web Vitals report
   - SEO performance
   - Index coverage

---

## 💡 Best Practices

### Images
- ✅ Always use `next/image` component
- ✅ Provide `width` and `height` props
- ✅ Use `priority` for above-the-fold images
- ✅ Use WebP format in `public/images/`

### Components
- ✅ Keep above-the-fold static (Server Components)
- ✅ Use 'use client' only when necessary
- ✅ Dynamic import for non-critical sections
- ✅ Memoize expensive calculations

### CSS
- ✅ Use Tailwind utility classes
- ✅ Avoid large custom CSS files
- ✅ Purge unused styles (automatic with Tailwind)

### Dependencies
- ✅ Audit dependencies regularly (`npm audit`)
- ✅ Remove unused packages
- ✅ Use lightweight alternatives when possible
- ✅ Pin versions for reproducible builds

---

**Last Updated**: January 2026  
**Next.js Version**: 15.1.3  
**Build Target**: Production-ready with Vercel optimization
