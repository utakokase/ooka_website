/**
 * 多言語対応の設定。
 *
 * 新しい言語を公開するときは:
 *   1. src/i18n/locales/<locale>.ts の翻訳を埋める（足りないキーは日本語にフォールバックします）
 *   2. 下の ENABLED_LOCALES にその言語を追加する
 * これだけで /zh/... や /en/... のURLが有効になり、ヘッダーに言語切り替えが表示されます。
 */

export const SUPPORTED_LOCALES = ['ja', 'zh', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** URLに言語プレフィックスが付かない言語（/ がこの言語になります） */
export const DEFAULT_LOCALE: Locale = 'ja';

/** 公開中の言語。翻訳が揃ったら 'zh' や 'en' を追加してください。 */
export const ENABLED_LOCALES: readonly Locale[] = ['ja', 'zh', 'en'];

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string; intl: string }> = {
  ja: { label: '日本語', htmlLang: 'ja', intl: 'ja-JP' },
  zh: { label: '中文', htmlLang: 'zh-CN', intl: 'zh-CN' },
  en: { label: 'English', htmlLang: 'en', intl: 'en-US' },
};

/** 言語ごとのURLの先頭部分。既定言語は '' 、それ以外は '/zh' のようになります。 */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}
