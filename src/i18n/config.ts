export const locales = ['en', 'vi', 'ja'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Vietnamese is temporarily disabled site-wide (route + language switcher).
// Content/logic in content/vi.ts is kept as-is — to re-enable, add 'vi' back
// here and set showLanguageSwitcher to true.
export const enabledLocales: readonly Locale[] = ['en', 'ja'];

export function isEnabledLocale(value: string): value is Locale {
  return (enabledLocales as readonly string[]).includes(value);
}

export const showLanguageSwitcher = false;

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
  ja: '日本語',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  vi: 'vi_VN',
  ja: 'ja_JP',
};
