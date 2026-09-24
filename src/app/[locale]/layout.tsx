import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { geistSans, geistMono } from '@/app/fonts/fonts';
import { Analytics } from '@/lib/analytics';
import { locales, isLocale, ogLocales, type Locale } from '@/i18n/config';
import { getPortfolioContent } from '@/content';
import { siteUrl, localePath, absoluteUrl, buildLanguageAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getPortfolioContent(locale);
  const url = absoluteUrl(localePath(locale));

  return {
    metadataBase: new URL(siteUrl),
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url,
      siteName: content.profile.name,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      images: ['/thumbnail.png'],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.seo.title,
      description: content.seo.description,
      images: ['/thumbnail.png'],
      creator: '@mihi',
    },
    icons: '/logo.png',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={cn('antialiased', geistSans.variable, geistMono.variable)}>
        <PersonJsonLd locale={locale} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

function PersonJsonLd({ locale }: { locale: Locale }) {
  const content = getPortfolioContent(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.profile.name,
    jobTitle: content.profile.title,
    url: absoluteUrl(localePath(locale)),
    sameAs: content.profile.socials.map((s) => s.href),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
