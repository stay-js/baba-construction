import type { MetadataRoute } from 'next';

const routes = ['/', '/privacy-policy'];

const sitemap = (): MetadataRoute.Sitemap => {
  return routes.map((route) => ({
    url: `https://www.babaconstructioncorp.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
};

export default sitemap;
