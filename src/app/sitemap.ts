import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/portfolio', '/about', '/contact'].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}
