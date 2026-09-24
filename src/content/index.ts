import type { Locale } from '@/i18n/config';
import type { PortfolioContent } from './types';
import { en } from './en';
import { vi } from './vi';
import { ja } from './ja';

const content: Record<Locale, PortfolioContent> = { en, vi, ja };

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return content[locale];
}

export type { PortfolioContent } from './types';
