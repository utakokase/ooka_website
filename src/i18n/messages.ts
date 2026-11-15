import type { Locale } from './config';
import type { DeepPartial, Messages } from './types';
import { ja } from './locales/ja';
import { zh } from './locales/zh';
import { en } from './locales/en';

const partials: Record<Locale, DeepPartial<Messages>> = { ja, zh, en };

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** 翻訳を日本語の上に重ねます。配列は丸ごと置き換え、未翻訳のキーは日本語のまま残ります。 */
function mergeDeep<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override === undefined ? base : override) as T;
  }
  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    result[key] = mergeDeep(result[key], value);
  }
  return result as T;
}

const cache = new Map<Locale, Messages>();

export function getMessages(locale: Locale): Messages {
  let messages = cache.get(locale);
  if (!messages) {
    messages = locale === 'ja' ? ja : mergeDeep(ja, partials[locale]);
    cache.set(locale, messages);
  }
  return messages;
}
