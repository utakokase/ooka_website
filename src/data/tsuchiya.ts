/**
 * TSUCHIYAビル（自社ビル）の、言語によって変わらないデータ。
 * 文言は src/i18n/locales/*.ts の `tsuchiya` にあります。
 * 写真は src/assets/properties/tsuchiya-building/ に入れると表示されます（先頭がメイン写真）。
 */
export const tsuchiyaBuilding = {
  /** 物件一覧（src/data/properties.ts）と共通の slug */
  slug: 'tsuchiya-building',
  mapQuery: '東京都中野区中野5-60-14',
  /** テナント募集中なら true */
  hasVacancy: false,
  /** 募集状況を最後に確認した年月（YYYY-MM） */
  vacancyUpdated: '2025-07',
} as const;
