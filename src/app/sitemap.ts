import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/seo';
import { CITY_KEYS, SERVICE_KEYS } from '@/constants/local-seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about', '/contact'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const localSeoRoutes = CITY_KEYS.flatMap((city) =>
    SERVICE_KEYS.map((service) => ({
      url: `${SITE_URL}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  );

  return [...routes, ...localSeoRoutes];
}
