import Link from 'next/link';

import { locales, localeNames, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export const LanguageSwitcher = ({ locale, label }: LanguageSwitcherProps) => {
  return (
    <nav aria-label={label} className='flex items-center gap-1 text-sm'>
      {locales.map((l, i) => {
        const isActive = l === locale;
        return (
          <span key={l} className='flex items-center'>
            <Link
              href={`/${l}`}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'rounded px-1.5 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {localeNames[l]}
            </Link>
            {i < locales.length - 1 && <span className='text-muted-foreground px-0.5'>|</span>}
          </span>
        );
      })}
    </nav>
  );
};
