import { useEffect, useMemo, type ReactNode } from 'react';
import { LOCALE_META, localePrefix, type Locale } from './config';
import { I18nContext, type I18nValue } from './context';
import { getMessages } from './messages';

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<I18nValue>(() => {
    const prefix = localePrefix(locale);
    return {
      locale,
      t: getMessages(locale),
      path: (to: string) => (to === '/' ? prefix || '/' : `${prefix}${to}`),
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
