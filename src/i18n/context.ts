import { createContext, useContext } from 'react';
import type { Locale } from './config';
import type { Messages } from './types';

export interface I18nValue {
  locale: Locale;
  /** 現在の言語の文言（例: t.nav.properties） */
  t: Messages;
  /** '/properties' → 言語に合わせたURL（例: '/zh/properties'） */
  path: (to: string) => string;
}

export const I18nContext = createContext<I18nValue | null>(null);

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n は LocaleProvider の中で使ってください');
  return value;
}
