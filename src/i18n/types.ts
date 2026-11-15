import type { ja } from './locales/ja';
import type { SpecKey } from '../data/properties';

/** 日本語ファイルを「正」として、全言語共通のメッセージの形を決めます。 */
export type Messages = typeof ja;

/** 物件ごとの、言語によって変わるテキスト */
export interface PropertyText {
  /** 物件名 */
  title: string;
  /** エリアの短い表記（例: 品川区東品川） */
  area: string;
  /** キャッチコピー（詳細ページのタイトル下に表示） */
  catchCopy?: string;
  /** 一覧カード用の短い説明 */
  summary: string;
  /** 一覧カードに出す要点（3行程度） */
  cardLines: string[];
  /** 詳細ページの説明文（段落ごと） */
  overview: string[];
  /** 物件の特徴（箇条書き） */
  highlights?: string[];
  /** 担当者からのコメント */
  agentComment?: { name: string; body: string };
  /** 写真の説明。画像と同じ順番（ファイル名順）で並べる */
  photoCaptions?: string[];
  /** 交通・周辺環境 */
  access: string[];
  /** スペック表。表示順は SPEC_ORDER で決まります */
  specs: Partial<Record<SpecKey, string>>;
  /** 価格の代わりに表示する文言（賃料未定など）。価格がある場合は不要 */
  priceText?: string;
  /** 価格欄の補足 */
  priceNote?: string;
  /** 外部リンクのボタン文言 */
  externalLinkLabel?: string;
}

type DeepPartialObject<T> = { [K in keyof T]?: DeepPartial<T[K]> };

/** 翻訳途中の言語ファイル用。配列は丸ごと置き換え、オブジェクトは一部だけ書けます。 */
export type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? DeepPartialObject<T>
    : T;
