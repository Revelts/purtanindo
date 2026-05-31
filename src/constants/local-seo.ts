import { COMPANY_NAME, SITE_URL } from '@/constants/seo';

export const CITY_KEYS = ['cibubur', 'jakarta', 'bekasi'] as const;
export const SERVICE_KEYS = [
  'jasa-pembuatan-website',
  'jasa-pembuatan-aplikasi',
  'jasa-integrasi-aplikasi',
  'digitalisasi-umkm',
] as const;

export type CityKey = (typeof CITY_KEYS)[number];
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export interface CityData {
  name: string;
  region: string;
  nearby: string[];
  metaRegion: string;
}

export interface ServiceSeoData {
  name: string;
  shortName: string;
  heroSubheading: string;
  metaDescTemplate: string; // {city} and {region} are replaced at runtime
  keywords: string[];       // city-specific keywords are appended dynamically
}

export const CITIES: Record<CityKey, CityData> = {
  cibubur: {
    name: 'Cibubur',
    region: 'Jakarta Timur',
    nearby: ['Jakarta Timur', 'Bekasi', 'Depok'],
    metaRegion: 'Cibubur, Jakarta Timur',
  },
  jakarta: {
    name: 'Jakarta',
    region: 'DKI Jakarta',
    nearby: ['Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara'],
    metaRegion: 'Jakarta',
  },
  bekasi: {
    name: 'Bekasi',
    region: 'Jawa Barat',
    nearby: ['Bekasi Timur', 'Bekasi Barat', 'Tambun', 'Cikarang'],
    metaRegion: 'Bekasi, Jawa Barat',
  },
};

export const SERVICES_SEO: Record<ServiceKey, ServiceSeoData> = {
  'jasa-pembuatan-website': {
    name: 'Jasa Pembuatan Website',
    shortName: 'Website',
    heroSubheading:
      'Kami bangun website yang benar-benar kerja untuk bisnis Anda: dari company profile yang bikin calon klien langsung percaya, hingga toko online dengan sistem pembayaran otomatis.',
    metaDescTemplate:
      'Vendor jasa pembuatan website profesional di {city}, {region} untuk UMKM, startup, dan bisnis yang ingin meningkatkan kehadiran digital. Solusi custom, harga transparan, konsultasi gratis.',
    keywords: [
      'jasa pembuatan website',
      'web developer',
      'pembuatan website profesional',
      'jasa website perusahaan',
      'web development',
    ],
  },
  'jasa-pembuatan-aplikasi': {
    name: 'Jasa Pembuatan Aplikasi',
    shortName: 'Aplikasi',
    heroSubheading:
      'Kami bangun aplikasi mobile dan web yang enak dipakai, bukan yang kelihatan bagus di presentasi tapi bikin pengguna bingung. Android, iOS, dan web app dalam satu tim.',
    metaDescTemplate:
      'Jasa pembuatan aplikasi mobile dan web profesional di {city}, {region}. Spesialis Android, iOS, dan web app untuk UMKM, startup, dan korporat. Konsultasi gratis, harga transparan.',
    keywords: [
      'jasa pembuatan aplikasi',
      'jasa pembuatan aplikasi mobile',
      'developer aplikasi android ios',
      'web app developer',
      'jasa aplikasi bisnis',
    ],
  },
  'jasa-integrasi-aplikasi': {
    name: 'Jasa Integrasi Aplikasi',
    shortName: 'Integrasi Aplikasi',
    heroSubheading:
      'Punya beberapa sistem yang tidak saling terhubung? Kami integrasikan aplikasi, API, dan platform yang Anda gunakan menjadi satu ekosistem digital yang efisien dan otomatis.',
    metaDescTemplate:
      'Jasa integrasi aplikasi dan API profesional di {city}, {region}. Hubungkan sistem ERP, CRM, payment gateway, dan platform e-commerce dalam satu alur kerja yang efisien. Konsultasi gratis.',
    keywords: [
      'jasa integrasi aplikasi',
      'integrasi api',
      'integrasi sistem bisnis',
      'api integration',
      'koneksi sistem erp crm',
    ],
  },
  'digitalisasi-umkm': {
    name: 'Digitalisasi UMKM',
    shortName: 'Digitalisasi UMKM',
    heroSubheading:
      'Masih kelola bisnis pakai Excel dan WhatsApp grup? Kami bantu UMKM di {city} bertransisi ke sistem digital yang rapi, otomatis, dan benar-benar membantu operasional sehari-hari.',
    metaDescTemplate:
      'Jasa digitalisasi UMKM di {city}, {region}. Kami bantu bisnis kecil dan menengah punya sistem digital: website, aplikasi kasir, manajemen stok, dan otomasi operasional. Konsultasi gratis.',
    keywords: [
      'digitalisasi umkm',
      'transformasi digital umkm',
      'sistem digital bisnis kecil',
      'aplikasi kasir umkm',
      'digitalisasi bisnis',
    ],
  },
};

export function buildPageTitle(city: CityData, service: ServiceSeoData): string {
  return `${service.name} ${city.name} | ${COMPANY_NAME}`;
}

export function buildMetaDescription(city: CityData, service: ServiceSeoData): string {
  return service.metaDescTemplate
    .replace(/{city}/g, city.name)
    .replace(/{region}/g, city.region);
}

export function buildKeywords(city: CityData, service: ServiceSeoData): string[] {
  const cityName = city.name.toLowerCase();
  const region = city.region.toLowerCase();
  return [
    ...service.keywords.map((k) => `${k} ${cityName}`),
    ...service.keywords.map((k) => `${k} ${region}`),
    ...service.keywords,
    cityName,
    `jasa it ${cityName}`,
    `software house ${cityName}`,
    COMPANY_NAME.toLowerCase(),
  ];
}

export function buildCanonical(cityKey: string, serviceKey: string): string {
  return `${SITE_URL}/${cityKey}/${serviceKey}`;
}

export function buildHeroSubheading(city: CityData, service: ServiceSeoData): string {
  return service.heroSubheading.replace(/{city}/g, city.name);
}

export function buildJsonLd(
  cityKey: string,
  city: CityData,
  service: ServiceSeoData,
  serviceKey: string,
) {
  const pageUrl = buildCanonical(cityKey, serviceKey);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      url: pageUrl,
      telephone: '+6281213331315',
      email: 'leynardoyosef@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: city.region,
        addressCountry: 'ID',
      },
      areaServed: [city.name, ...city.nearby],
      description: buildMetaDescription(city, service),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${service.name} ${city.name} — ${COMPANY_NAME}`,
      serviceType: service.name,
      areaServed: city.name,
      url: pageUrl,
      provider: {
        '@type': 'Organization',
        name: COMPANY_NAME,
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: city.name,
          item: `${SITE_URL}/${cityKey}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.name,
          item: pageUrl,
        },
      ],
    },
  ];
}
