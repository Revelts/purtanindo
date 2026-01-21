# Purtanindo - Digital Solutions & IT Consultant

Website perusahaan Purtanindo yang dibangun dengan Next.js 15 (App Router) - Software house terpercaya untuk digitalisasi bisnis Anda.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Icons**: React Icons

## 📁 Project Structure

```
purtanindo/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (routes)/
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   ├── not-found.tsx       # 404 page
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots.txt
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Layout components (Navbar, Footer)
│   │   └── sections/           # Page sections (Hero, Services, etc)
│   │
│   ├── constants/              # App constants
│   │   ├── seo.ts             # SEO metadata
│   │   ├── navigation.ts      # Navigation links
│   │   └── content.ts         # Page content
│   │
│   ├── lib/                    # Utilities
│   │   └── utils.ts
│   │
│   └── hooks/                  # Custom React hooks
│
├── public/                     # Static assets
│   └── images/
│
└── Configuration files
```

## 🎯 Features

### ✅ Frontend Only
- No backend API
- No database dependencies
- Static and server-side rendering
- Optimized for Vercel deployment

### ✅ SEO Optimized
- Multiple pages for better SEO
- Proper metadata per page
- Semantic HTML structure
- OpenGraph & Twitter cards
- Dynamic sitemap & robots.txt
- Optimized images with next/image

### ✅ Modern Architecture
- Clean code structure (SOLID principles)
- TypeScript for type safety
- Reusable components
- Centralized content management
- Mobile-first responsive design

### ✅ Performance
- Server Components by default
- Client Components only when needed
- Optimized images with next/image
- Fast page loads with code splitting
- Lighthouse-friendly
- Automatic bundle chunking
- Dynamic imports for below-the-fold content
- Optimized font loading with next/font
- Standalone output for efficient deployment

### ✅ Business Features
- Landing page dengan Hero section
- Services showcase
- Portfolio display
- Team & management profiles
- Testimonials
- FAQ section
- WhatsApp integration
- Contact page with multiple methods

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
# Standard production build
npm run build

# Build with bundle analysis
npm run analyze

# Start production server locally
npm start
```

### 🎯 Build Optimizations

Website ini sudah dioptimasi untuk production dengan:

#### Code Splitting & Chunking
- **Vendor chunks**: Library node_modules dipisah ke chunk terpisah
- **Icon chunks**: React icons dalam chunk dedicated untuk lazy loading
- **Common chunks**: Shared code otomatis di-extract untuk reusability
- **Dynamic imports**: Section below-the-fold (FAQ, Testimonials, CTA) di-lazy load

#### Bundle Size Optimization
- `react-icons` dioptimasi dengan package imports
- Standalone output untuk deployment lebih ringan
- Tree-shaking otomatis untuk unused code
- SWC minification untuk bundle size minimal

#### Caching Strategy
- Static assets: `max-age=31536000` (1 tahun)
- Images: optimized dengan AVIF/WebP
- Font: preload dengan `display: swap`

## 🚀 Deployment

### Vercel (Recommended)

Project ini sudah production-ready untuk Vercel dengan konfigurasi optimal:

#### Via Vercel Dashboard
1. Push code ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Vercel otomatis detect Next.js dan deploy
4. Environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID` (jika pakai Google Analytics)

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### Configuration Files

- **`next.config.mjs`**: Next.js config dengan webpack optimization
- **`vercel.json`**: Vercel-specific settings (region: Singapore, caching headers)
- **`.vercelignore`**: Files to exclude from deployment

### Deployment Features

✅ **Automatic optimizations**:
- Edge caching untuk static assets
- Image optimization dengan Next.js Image API
- Automatic HTTPS
- Global CDN
- Zero-config deployment

✅ **Performance monitoring**:
- Web Vitals tracking
- Real-time analytics
- Deployment previews per PR

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test WhatsApp button integration
- [ ] Check images loading properly
- [ ] Validate sitemap at `/sitemap.xml`
- [ ] Test responsive design on mobile
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Setup custom domain (if applicable)
- [ ] Configure Analytics (optional)

## 📝 Content Management

Semua konten website dapat dikelola melalui file constants:

- **src/constants/content.ts** - Semua teks dan konten halaman
- **src/constants/seo.ts** - SEO metadata dan konfigurasi
- **src/constants/navigation.ts** - Menu navigasi dan links

## 🎨 Customization

### Colors
Edit theme colors di `tailwind.config.js`:

```js
colors: {
  brand: {
    start: '#ffac00',  // Brand color start
    end: '#fd5e79',    // Brand color end
  }
}
```

### Fonts
Font default menggunakan Inter. Untuk mengganti, edit di `src/app/layout.tsx`.

## 📞 Contact Integration

- **WhatsApp**: Konfigurasi nomor di `src/constants/seo.ts`
- **Email**: Update email address di `src/constants/seo.ts`

## 📄 License

© 2026 Purtanindo. All rights reserved.

---

**Purtanindo** - Memberdayakan Inovasi, Mengoptimalkan Solusi
