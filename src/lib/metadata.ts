import { Metadata } from 'next';

// TODO: Update metadata

export function constructMetadata({
  title = 'Pham Minh Hieu', // TODO: Add a custom title
  description = 'Bridge Software Engineer with a background in web development and five years of study in Japan.', // TODO: Add a custom description
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/logo.png', // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@mihi',
    },
    icons,
    metadataBase: new URL('https://mihi.id.vn'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
