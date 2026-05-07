import type { Metadata } from 'next';

import { keywords } from '~/constants/keywords';

export function createMetadata({
  absoluteTitle,
  description,
  noIndex,
  path,
  title,
}: {
  absoluteTitle?: string;
  description: string;
  noIndex?: boolean;
  path: string;
  title: string;
}): Metadata {
  return {
    metadataBase: new URL('https://www.babaconstructioncorp.com'),

    authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
    creator: 'Zétény Nagy',

    keywords: keywords.join(', '),

    description,
    title: absoluteTitle ?? `${title} - BABA Construction Corp.`,

    applicationName: 'BABA Construction',

    robots: noIndex
      ? {
          follow: false,
          index: false,
          'max-image-preview': 'none',
          'max-snippet': -1,
          'max-video-preview': -1,
        }
      : {
          follow: true,
          googleBot: {
            follow: true,
            index: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
          index: true,
        },

    openGraph: {
      description,
      images: [
        {
          alt: 'BABA Construction Corp.',
          height: 1000,
          type: 'image/jpeg',
          url: '/logo.jpg',
          width: 1000,
        },
      ],
      locale: 'en-US',
      siteName: 'BABA Construction Corp.',
      title: absoluteTitle ?? `${title} - BABA Construction Corp.`,
      type: 'website',
      url: path,
    },

    twitter: {
      card: 'summary',
      description,
      images: ['/logo.jpg'],
      title: absoluteTitle ?? `${title} - BABA Construction Corp.`,
    },

    alternates: {
      canonical: `https://www.babaconstructioncorp.com${path}`,
    },

    icons: {
      icon: '/favicon.ico',
    },
  };
}
