# Deployment Guide - Purtanindo Website

## 📋 Pre-Deployment Checklist

### Content Verification
- [ ] Semua konten di `src/constants/content.ts` sudah update dan akurat
- [ ] Contact info (WhatsApp, Email) di `src/constants/seo.ts` sudah benar
- [ ] Images semua tersedia di folder `public/images/`
- [ ] Team photos sudah diupload dengan format WebP

### Technical Verification
- [ ] Build berhasil tanpa error: `npm run build`
- [ ] Tidak ada TypeScript errors: `npm run lint`
- [ ] Test locally: `npm start` setelah build
- [ ] Check semua pages:
  - `/` (Homepage)
  - `/services`
  - `/portfolio`
  - `/about`
  - `/contact`

### SEO & Performance
- [ ] Sitemap accessible di `/sitemap.xml`
- [ ] Robots.txt accessible di `/robots.txt`
- [ ] Favicon visible di browser tab
- [ ] Meta descriptions unique per page
- [ ] Images menggunakan WebP/AVIF format
- [ ] Open Graph images configured

---

## 🚀 Deployment to Vercel

### First Time Deployment

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "chore: production-ready build with optimizations"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import Git Repository
   - Select the `purtanindo` repository
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `next build` (auto)
   - Output Directory: `.next` (auto)
   - Click **Deploy**

3. **Configure Project Settings**
   - Go to Project Settings
   - **General**:
     - Project Name: `purtanindo`
     - Framework: Next.js
   - **Domains**:
     - Add custom domain (optional): `purtanindo.com`
   - **Environment Variables** (optional):
     ```
     NEXT_PUBLIC_SITE_URL=https://purtanindo.com
     ```

4. **Verify Deployment**
   - Visit the generated URL (e.g., `purtanindo.vercel.app`)
   - Test all pages and features
   - Verify WhatsApp links working
   - Check images loading properly

### Subsequent Deployments

Every push to `main` branch will automatically deploy to production.

For preview deployments:
```bash
git checkout -b feature/new-feature
git push origin feature/new-feature
```
Vercel will create a preview URL automatically.

---

## 🔄 Deployment via CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```

### Deploy to Preview
```bash
vercel
```

### Deploy to Production
```bash
vercel --prod
```

---

## ⚙️ Build Configuration

### Webpack Bundle Analysis

To analyze bundle size and chunks:

```bash
npm run analyze
```

This will generate:
- Bundle size report
- Chunk composition
- Duplicate packages detection

### Optimization Features Active

✅ **Code Splitting**
- Vendor chunks: Core React/Next.js libraries
- Icon chunks: React Icons isolated
- Common chunks: Shared components
- Dynamic imports: Below-the-fold sections

✅ **Image Optimization**
- Format: AVIF → WebP → JPEG fallback
- Responsive sizes: 640, 750, 828, 1080, 1200, 1920
- Lazy loading: Native browser lazy loading
- Cache: 60 seconds minimum TTL

✅ **Compression**
- Gzip compression enabled
- Brotli compression (Vercel automatic)
- Minified JS/CSS via SWC

✅ **Caching Strategy**
```
Static assets:  max-age=31536000 (1 year)
Images:         max-age=31536000 (1 year)
HTML pages:     s-maxage=31536000, stale-while-revalidate
```

---

## 📊 Performance Monitoring

### After Deployment

1. **Run Lighthouse Audit**
   - Open DevTools → Lighthouse
   - Run audit for:
     - Performance
     - Accessibility
     - Best Practices
     - SEO
   - Target: 90+ scores across all metrics

2. **Check Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

3. **Vercel Analytics** (Optional)
   - Enable in Vercel Dashboard
   - Monitor real user metrics
   - Track page views and performance

### Performance Optimization Tips

If performance scores are low:

- **Images**: Ensure all using `next/image` component
- **Fonts**: Already optimized with `next/font`
- **Third-party scripts**: Use `next/script` with proper strategy
- **Bundle size**: Run `npm run analyze` to identify large dependencies

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: `Module not found` error
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue**: TypeScript errors
```bash
npm run lint
# Fix all errors before deploying
```

### Images Not Loading

- Verify images exist in `public/images/`
- Check image paths are correct (case-sensitive)
- For external images (Unsplash), verify `remotePatterns` in `next.config.mjs`

### 404 on Dynamic Routes

- Verify `vercel.json` has correct rewrites
- Check `next.config.mjs` for proper routing config
- App Router routes should be in `src/app/` directory

### Performance Issues

```bash
# Analyze bundle
npm run analyze

# Check for large dependencies
npm ls --depth=0

# Verify dynamic imports are working
# Check Network tab in DevTools for chunk loading
```

---

## 📞 Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Project maintainer: leynardoyosef@gmail.com

---

**Last updated**: January 2026
**Version**: 3.0.0
