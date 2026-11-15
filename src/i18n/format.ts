import { LOCALE_META, type Locale } from './config';

/** '全{count}件' のような文言に値を差し込みます */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export interface PriceParts {
  prefix: string;
  amount: string;
  suffix: string;
}

/**
 * 価格を言語ごとの書き方に分解します（数字だけ大きく表示するため）。
 * 例: ja → 15,380 / 万円、zh → 15,380 / 万日元、en → ¥ / 153,800,000
 */
export function formatPrice(locale: Locale, yen: number): PriceParts {
  const intl = LOCALE_META[locale].intl;
  switch (locale) {
    case 'ja':
      return { prefix: '', amount: (yen / 10_000).toLocaleString(intl), suffix: '万円' };
    case 'zh':
      return { prefix: '', amount: (yen / 10_000).toLocaleString(intl), suffix: '万日元' };
    case 'en':
      return { prefix: '¥', amount: yen.toLocaleString(intl), suffix: '' };
  }
}

export function priceToString(parts: PriceParts): string {
  return `${parts.prefix}${parts.amount}${parts.suffix}`;
}
