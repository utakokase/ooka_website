/**
 * 会社の基本情報のうち、言語によって変わらないもの。
 * 住所や会社名などの「表記」は各言語ファイル（src/i18n/locales/*.ts）にあります。
 */
export const site = {
  /** 本番のURL（末尾スラッシュなし） */
  url: 'https://www.ookagoudou.com',
  /** メインの電話番号（携帯）。ヘッダーやボタンにはこちらを表示 */
  phone: '070-9173-9929',
  phoneHref: 'tel:07091739929',
  /** 海外からかける場合の表記 */
  phoneInternational: '+81-70-9173-9929',
  /** 会社の固定電話（会社概要などに併記） */
  landline: '03-6319-0573',
  landlineHref: 'tel:0363190573',
  email: 'info@ookagoudou.com',
  /** Googleマップの検索に使う住所 */
  mapQuery: '東京都中野区丸山1-3-2',
  /**
   * 宅地建物取引業の免許番号を表示するかどうか。
   * 番号の表記は言語ごとに各言語ファイルの common.licenseNumber にあります（更新時は全言語を直す）。
   */
  showLicense: true,
  /** 受付時間・定休日（各言語ファイルの文言で表示）。分かるまでは false で非表示。 */
  showBusinessHours: false,
} as const;
