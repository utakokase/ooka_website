/**
 * 物件の「言語によって変わらない」データ。
 * 物件名・説明文・スペックの文言は src/i18n/locales/*.ts の `properties` にあります。
 *
 * 物件を追加するときは:
 *   1. 下の PROPERTY_SLUGS と properties に1件追加
 *   2. 写真を src/assets/properties/<slug>/ に入れる（ファイル名順に並びます）
 *   3. src/i18n/locales/ja.ts の properties に文言を追加（型エラーで漏れが分かります）
 */

export const PROPERTY_SLUGS = [
  'prime-parks-shinagawa',
  'tsuchiya-building',
  'adachi-house',
  'iruma-apartment',
] as const;

export type PropertySlug = (typeof PROPERTY_SLUGS)[number];

/** sale: 売買 / rent: 賃貸 / owned: 自社保有（テナント募集など） */
export type PropertyKind = 'sale' | 'rent' | 'owned';

/** スペック表の項目。表示順もこの順番です。 */
export const SPEC_ORDER = [
  'propertyType',
  'price',
  'layout',
  'area',
  'balcony',
  'floor',
  'direction',
  'address',
  'nearestStation',
  'structure',
  'built',
  'totalUnits',
  'managementFee',
  'repairReserve',
  'otherFees',
  'parking',
  'pets',
  'managementCompany',
  'landRights',
  'zoning',
  'builder',
  'condition',
  'handover',
  'transactionType',
  'tenants',
  'features',
  'notes',
] as const;

export type SpecKey = (typeof SPEC_ORDER)[number];

export interface Property {
  slug: PropertySlug;
  kind: PropertyKind;
  /** false にするとサイトに表示されません（準備中の物件など） */
  published: boolean;
  /** トップページの大きな写真に使う物件 */
  featured?: boolean;
  /** 税込価格（円）。賃料未定などで表示しない場合は null */
  priceYen: number | null;
  /** 写真のURL（先頭がメイン写真） */
  images: string[];
  /** 外部サイト（ポータルサイトなど）へのリンク */
  externalUrl?: string;
  /** 専用ページがある物件（自社ビルなど）。一覧のカードはこのページに飛びます */
  pagePath?: string;
}

/** src/assets/properties/<slug>/ の写真をファイル名順で読み込みます */
const allImages = import.meta.glob<string>('../assets/properties/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

function imagesFor(slug: PropertySlug, mainFileName?: string): string[] {
  const entries = Object.entries(allImages)
    .filter(([path]) => path.includes(`/properties/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b));
  if (mainFileName) {
    const mainIndex = entries.findIndex(([path]) => path.endsWith(`/${mainFileName}`));
    if (mainIndex > 0) entries.unshift(...entries.splice(mainIndex, 1));
  }
  return entries.map(([, url]) => url);
}

export const properties: Property[] = [
  {
    slug: 'prime-parks-shinagawa',
    kind: 'sale',
    published: true,
    featured: true,
    priceYen: 136_800_000,
    images: imagesFor('prime-parks-shinagawa'),
    externalUrl: 'https://suumo.jp/ms/chuko/tokyo/sc_shinagawa/nc_22154994/',
  },
  {
    slug: 'tsuchiya-building',
    kind: 'owned',
    published: true,
    priceYen: null,
    images: imagesFor('tsuchiya-building'),
    pagePath: '/tsuchiya-building',
  },
  {
    slug: 'adachi-house',
    kind: 'rent',
    published: true,
    priceYen: null,
    images: imagesFor('adachi-house'),
  },
  {
    slug: 'iruma-apartment',
    kind: 'rent',
    published: true,
    priceYen: null,
    images: imagesFor('iruma-apartment'),
  },
];

export const publishedProperties = properties.filter((p) => p.published);

export const featuredProperty =
  publishedProperties.find((p) => p.featured) ?? publishedProperties[0];

export function getPropertyBySlug(slug: string): Property | undefined {
  return publishedProperties.find((p) => p.slug === slug);
}
