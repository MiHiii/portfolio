import { locales, type Locale } from '@/i18n/config';

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://mihi.id.vn'
).replace(/\/$/, '');

export function localePath(locale: Locale, path = ''): string {
  return `/${locale}${path}`;
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

export function buildLanguageAlternates(path = ''): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = absoluteUrl(localePath(locale, path));
  }
  alternates['x-default'] = absoluteUrl(localePath('en', path));
  return alternates;
}
