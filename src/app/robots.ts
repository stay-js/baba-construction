import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://www.babaconstructioncorp.com',
  sitemap: 'https://www.babaconstructioncorp.com/sitemap.xml',
});

export default robots;
