import type { Metadata } from 'next';
import { keywords } from '~/constants/keywords';

export function createMetadata({
  path,
  title,
  absoluteTitle,
  description,
  noIndex,
}: {
  path: string;
  title: string;
  absoluteTitle?: string;
  description: string;
  noIndex?: boolean;
}): Metadata {
  return {
    metadataBase: new URL('https://www.babaconstructioncorp.com'),

    authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
    creator: 'Zétény Nagy',

    keywords: keywords.join(', '),

    title: absoluteTitle ?? `${title} - BABA Construction Corp.`,
    description,

    applicationName: 'BABA Construction',

    robots: noIndex
      ? {
          index: false,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'none',
          'max-snippet': -1,
        }
      : {
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

    openGraph: {
      type: 'website',
      url: path,
      title: absoluteTitle ?? `${title} - BABA Construction Corp.`,
      description,
      siteName: 'BABA Construction Corp.',
      locale: 'en-US',
      images: [
        {
          url: '/logo.jpg',
          width: 1000,
          height: 1000,
          alt: 'BABA Construction Corp.',
          type: 'image/jpeg',
        },
      ],
    },

    twitter: {
      card: 'summary',
      title: absoluteTitle ?? `${title} - BABA Construction Corp.`,
      description,
      images: ['/logo.jpg'],
    },

    icons: {
      icon: '/favicon.ico',
    },
  };
}
