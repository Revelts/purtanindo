export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Beranda',
    href: '/',
    description: 'Partner transformasi digital Anda',
  },
  {
    label: 'Layanan',
    href: '/services',
    description: 'Jasa digitalisasi, website & aplikasi',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    description: 'Solusi digital yang telah kami wujudkan',
  },
  {
    label: 'Tentang Kami',
    href: '/about',
    description: 'Partner bisnis, bukan sekadar vendor',
  },
  {
    label: 'Kontak',
    href: '/contact',
    description: 'Konsultasi gratis untuk bisnis Anda',
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Tim Kami', href: '/about#team' },
  ],
  services: [
    { label: 'Jasa Pembuatan Website', href: '/services#web' },
    { label: 'Jasa Pembuatan Aplikasi', href: '/services#mobile' },
    { label: 'Digitalisasi Bisnis', href: '/services#enterprise' },
    { label: 'Konsultasi IT & Digital', href: '/services#marketing' },
  ],
  resources: [
    { label: 'FAQ', href: '/#faq' },
    { label: 'Kontak', href: '/contact' },
    { label: 'WhatsApp', href: 'https://wa.me/6281213331315', external: true },
  ],
} as const;

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/6281213331315',
  instagram: 'https://instagram.com/purtanindo',
  linkedin: 'https://linkedin.com/company/purtanindo',
  email: 'mailto:leynardoyosef@gmail.com',
} as const;
