import { notFound } from 'next/navigation';

import { isEnabledLocale } from '@/i18n/config';
import { getPortfolioContent } from '@/content';
import { Portfolio } from '@/components/portfolio/Portfolio';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isEnabledLocale(locale)) {
    notFound();
  }

  const content = getPortfolioContent(locale);

  return <Portfolio content={content} locale={locale} />;
}
