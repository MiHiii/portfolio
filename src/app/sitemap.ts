import type { MetadataRoute } from 'next';

import { enabledLocales } from '@/i18n/config';
import { absoluteUrl, localePath, buildLanguageAlternates } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return enabledLocales.map((locale) => ({
    url: absoluteUrl(localePath(locale)),
    lastModified: new Date(),
    alternates: {
      languages: buildLanguageAlternates(),
    },
  }));
}
