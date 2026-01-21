import { Metadata } from 'next';

export const COMPANY_NAME = 'Purtanindo';
export const SITE_URL = 'https://purtanindo.com';
export const WHATSAPP_NUMBER = '+6281213331315';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
export const EMAIL = 'leynardoyosef@gmail.com';

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Purtanindo - Jasa Pembuatan Website, Aplikasi & Digitalisasi Bisnis',
    template: '%s | Purtanindo',
  },
  description:
    'Partner transformasi digital terpercaya untuk UMKM, startup & korporat. Jasa pembuatan website profesional, aplikasi mobile, digitalisasi bisnis, sistem ERP/CRM, dan konsultasi IT. Solusi custom sesuai kebutuhan & budget Anda.',
  keywords: [
    'jasa pembuatan website',
    'jasa pembuatan aplikasi',
    'jasa digitalisasi bisnis',
    'jasa pembuatan website profesional',
    'software house indonesia',
    'jasa pembuatan aplikasi mobile',
    'konsultasi IT',
    'digital transformation',
    'pembuatan website perusahaan',
    'jasa website murah',
    'jasa aplikasi android ios',
    'sistem ERP',
    'sistem CRM',
    'web development jakarta',
    'digitalisasi UMKM',
    'Purtanindo',
  ],
  authors: [{ name: 'Purtanindo Team' }],
  creator: 'Purtanindo',
  publisher: 'Purtanindo',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/images/favicon.ico',
    other: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon.ico',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: 'Purtanindo - Partner Transformasi Digital Bisnis Anda',
    description:
      'Jasa pembuatan website, aplikasi mobile, dan digitalisasi bisnis untuk UMKM, startup & korporat. Konsultasi gratis, solusi custom, harga transparan.',
    images: [
      {
        url: '/images/purtanindo-colored.webp',
        width: 1200,
        height: 630,
        alt: 'Purtanindo - Jasa Pembuatan Website & Aplikasi Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purtanindo - Jasa Pembuatan Website & Aplikasi Profesional',
    description:
      'Partner transformasi digital untuk UMKM & korporat. Jasa pembuatan website, aplikasi mobile, dan konsultasi IT profesional.',
    images: ['/images/purtanindo-colored.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const PAGE_METADATA = {
  home: {
    title: 'Purtanindo - Jasa Pembuatan Website, Aplikasi & Digitalisasi Bisnis',
    description:
      'Partner transformasi digital terpercaya untuk UMKM, startup & korporat. Jasa pembuatan website profesional, aplikasi mobile, digitalisasi bisnis & konsultasi IT. Konsultasi gratis, solusi custom, harga transparan.',
    keywords: [
      'jasa pembuatan website',
      'jasa pembuatan aplikasi',
      'jasa digitalisasi bisnis',
      'software house indonesia',
      'konsultasi IT',
      'digital transformation',
    ],
  },
  services: {
    title: 'Layanan Jasa Digitalisasi, Website & Aplikasi Profesional',
    description:
      'Layanan lengkap: Jasa pembuatan website company profile & e-commerce, aplikasi mobile Android/iOS, digitalisasi bisnis (ERP/CRM), dan konsultasi IT. Solusi yang disesuaikan dengan kebutuhan & budget bisnis Anda.',
    keywords: [
      'jasa pembuatan website profesional',
      'jasa pembuatan aplikasi mobile',
      'jasa digitalisasi bisnis',
      'pembuatan sistem ERP',
      'pembuatan sistem CRM',
      'konsultasi IT',
    ],
  },
  portfolio: {
    title: 'Portfolio Transformasi Digital - Solusi Nyata untuk Bisnis',
    description:
      'Lihat hasil kerja kami: Website profesional, aplikasi mobile, dan sistem digitalisasi yang telah membantu UMKM hingga korporat meningkatkan efisiensi dan revenue. Lebih dari sekadar teknologi, ini tentang hasil bisnis.',
    keywords: [
      'portfolio website',
      'portfolio aplikasi',
      'studi kasus digitalisasi',
      'contoh website profesional',
      'contoh aplikasi bisnis',
    ],
  },
  about: {
    title: 'Tentang Purtanindo - Partner Digital Transformation Anda',
    description:
      'Purtanindo adalah partner transformasi digital yang memahami tantangan bisnis. Bukan sekadar vendor teknologi—kami adalah konsultan yang fokus pada solusi dan hasil. Tim berpengalaman siap bantu bisnis Anda bertumbuh.',
    keywords: [
      'tentang purtanindo',
      'software house terpercaya',
      'partner digital transformation',
      'konsultan IT',
    ],
  },
  contact: {
    title: 'Hubungi Kami - Konsultasi Digitalisasi Gratis',
    description:
      'Mulai transformasi digital bisnis Anda sekarang. Konsultasi GRATIS tanpa komitmen. Ceritakan tantangan bisnis Anda, kami bantu carikan solusi terbaik. Hubungi via WhatsApp untuk respons cepat.',
    keywords: [
      'konsultasi IT gratis',
      'kontak purtanindo',
      'hubungi software house',
      'konsultasi digitalisasi',
    ],
  },
};
