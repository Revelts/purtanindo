import { Metadata } from 'next';

export const COMPANY_NAME = 'Purtanindo';
export const SITE_URL = 'https://purtanindo.com';
export const WHATSAPP_NUMBER = '+6281213331315';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
export const EMAIL = 'leynardoyosef@gmail.com';

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Purtanindo - Jasa Pembuatan Website, Aplikasi & Digitalisasi Bisnis Jakarta',
    template: '%s | Purtanindo',
  },
  description:
    'Jasa pembuatan website profesional, aplikasi mobile, dan digitalisasi bisnis untuk UMKM, startup & korporat Indonesia. Konsultasi gratis, solusi custom, harga transparan, support berkelanjutan. Hubungi kami sekarang.',
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
    title: 'Purtanindo - Partner Digitalisasi Bisnis Anda',
    description:
      'Jasa website, aplikasi mobile, dan sistem digital custom untuk bisnis yang serius tumbuh. Konsultasi gratis, tanpa komitmen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purtanindo - Jasa Website, Aplikasi & Digitalisasi Bisnis',
    description:
      'Partner digitalisasi untuk UMKM, startup & korporat. Jasa pembuatan website profesional, aplikasi mobile, dan konsultasi IT. Konsultasi gratis.',
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
    google: 'google-site-verification=03JacJ3nukN95mePnMzpmEKUElF3XX8NFIiAFXEwhQE',
  },
};

export const PAGE_METADATA = {
  home: {
    title: 'Purtanindo - Jasa Website, Aplikasi & Digitalisasi Bisnis | Konsultasi Gratis',
    description:
      'Partner transformasi digital untuk UMKM, startup & korporat. Jasa pembuatan website profesional, aplikasi mobile, sistem ERP/CRM & konsultasi IT. Solusi custom, harga transparan. Konsultasi gratis sekarang.',
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
    title: 'Layanan Jasa Website, Aplikasi & Digitalisasi Bisnis - Purtanindo',
    description:
      'Jasa pembuatan website company profile & e-commerce, aplikasi mobile Android/iOS, sistem ERP/CRM, dan konsultasi IT. Semua custom sesuai kebutuhan bisnis Anda. Estimasi gratis & transparan.',
    keywords: [
      'jasa pembuatan website profesional',
      'jasa pembuatan aplikasi mobile',
      'jasa digitalisasi bisnis',
      'pembuatan sistem ERP',
      'pembuatan sistem CRM',
      'konsultasi IT',
    ],
  },
  about: {
    title: 'Tentang Purtanindo - Partner Digital Transformation, Bukan Sekadar Vendor',
    description:
      'Purtanindo adalah partner transformasi digital yang fokus pada hasil bisnis nyata. Tim berpengalaman, pendekatan konsultatif, support jangka panjang. Kenali kami lebih dekat.',
    keywords: [
      'tentang purtanindo',
      'software house terpercaya',
      'partner digital transformation',
      'konsultan IT',
    ],
  },
  contact: {
    title: 'Konsultasi Gratis - Hubungi Purtanindo Sekarang',
    description:
      'Konsultasi gratis tanpa komitmen. Ceritakan tantangan bisnis Anda, kami respond dalam 1 jam kerja dengan rekomendasi solusi terbaik. Chat WhatsApp atau kirim email.',
    keywords: [
      'konsultasi IT gratis',
      'kontak purtanindo',
      'hubungi software house',
      'konsultasi digitalisasi',
    ],
  },
};
