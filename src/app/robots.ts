import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://www.babaconstructioncorp.com',
    rules: [
      {
        allow: '/',
        userAgent: '*',
      },
    ],
    sitemap: 'https://www.babaconstructioncorp.com/sitemap.xml',
  };
}
