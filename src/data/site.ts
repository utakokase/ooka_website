/**
 * 会社の基本情報のうち、言語によって変わらないもの。
 * 住所や会社名などの「表記」は各言語ファイル（src/i18n/locales/*.ts）にあります。
 */
export const site = {
  /** 本番のURL（末尾スラッシュなし） */
  url: 'https://www.ookagoudou.com',
  phone: '03-6319-0573',
  phoneHref: 'tel:0363190573',
  /** 海外からかける場合の表記 */
  phoneInternational: '+81-3-6319-0573',
  email: 'ookagoudou@gmail.com',
  /** Googleマップの検索に使う住所 */
  mapQuery: '東京都中野区丸山1-3-2',
  /**
   * 宅地建物取引業の免許番号（例: 東京都知事(2)第○○○○○号）。
   * 不動産広告には表示が必要なので、分かりしだい入れてください。null の間は表示されません。
   */
  licenseNumber: null as string | null,
  /** 受付時間・定休日（各言語ファイルの文言で表示）。分かるまでは false で非表示。 */
  showBusinessHours: false,
} as const;
