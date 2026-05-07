import type { MetadataRoute } from 'next';

const routes = ['/', '/privacy-policy'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `https://www.babaconstructioncorp.com${route}`,
  }));
}
