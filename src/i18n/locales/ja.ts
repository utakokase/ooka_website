import type { PropertySlug } from '../../data/properties';
import type { PropertyText } from '../types';

/**
 * 日本語の文言。サイトに表示する文字はすべてここにまとめています。
 * このファイルの形が「正」になり、中国語・英語ファイルはこれと同じ形で書きます。
 * {name} のような部分は表示時に値が差し込まれます。
 */

const properties: Record<PropertySlug, PropertyText> = {
  'prime-parks-shinagawa': {
    title: 'プライムパークス品川シーサイド ザ・タワー',
    area: '品川区東品川',
    summary:
      '共用施設が充実した総戸数817戸の大規模タワー。駅から徒歩4分、商業施設に直結。28階・東向きの開放的な眺望と、家具を置きやすい整形リビングの住戸です。',
    cardLines: [
      '2LDK＋WIC／61.80㎡／28階 東向き',
      'りんかい線「品川シーサイド」徒歩4分',
      '2019年1月築・総戸数817戸',
    ],
    overview: [
      '品川シーサイド駅から徒歩4分、ペデストリアンデッキ直結の大規模タワーレジデンスです。1階にはコンビニや保育施設があり、毎日の暮らしを支えます。ラウンジやゲストルーム、スカイパークなど共用施設も充実しています。',
      '本住戸は28階・東向きで、開放感のある眺望と朝の光を楽しめます。リビングは家具を配置しやすい整形タイプで、暮らし方をイメージしやすい間取りです。',
      '床暖房・食器洗い乾燥機・ディスポーザーなど設備も充実。収納も多く、日常を快適に過ごせる住まいです。',
    ],
    access: [
      'りんかい線「品川シーサイド」駅 徒歩4分',
      '京急本線「青物横丁」駅 徒歩9分',
      '渋谷まで12分、新宿まで18分',
      'イオン隣接／敷地内にコンビニ・保育園',
    ],
    specs: {
      propertyType: '中古マンション',
      layout: '2LDK＋WIC',
      area: '61.80㎡（壁芯）',
      floor: '28階',
      direction: '東向き',
      address: '東京都品川区東品川4丁目11-36',
      nearestStation: 'りんかい線「品川シーサイド」駅 徒歩4分',
      structure: 'RC造 地上29階・地下1階建',
      built: '2019年（平成31年）1月',
      totalUnits: '817戸',
      managementFee: '16,090円／月',
      repairReserve: '10,510円／月',
      parking: 'あり（28,000〜32,000円／月）',
      pets: '可（使用規則あり）',
      managementCompany: '株式会社東急リブコ',
      condition: '2026年2月 クリーニング済み',
      handover: '即時',
    },
    priceNote: '管理費・修繕積立金・駐車場などの詳しい条件はお問い合わせください。',
    externalLinkLabel: 'アットホームで詳細を見る',
  },
  'tsuchiya-building': {
    title: 'TSUCHIYAビル',
    area: '中野区中野',
    summary:
      '中野駅北口から徒歩2分、5階建ての商業ビルです。1階から5階まで、バーや飲食店などさまざまなお店にご入居いただいています。',
    cardLines: [
      '5階建て 商業ビル（自社保有）',
      'JR・東京メトロ「中野」駅 北口 徒歩2分',
      'バー・飲食店などが入居',
    ],
    overview: [
      '中野駅北口から徒歩2分の、5階建ての商業ビルです。現在は1階から5階までをリースしており、カクテルバー、プラモバー、ダーツバーなど、多種多様なお店が入っています。',
      '周辺にはキリンビール本社、帝京平成大学、明治大学、早稲田大学、中野区役所などがあります。中野駅の1日平均乗降人員は16万人以上で、人通りの多いエリアです。',
    ],
    access: [
      'JR中央線・総武線、東京メトロ東西線「中野」駅 北口 徒歩2分',
      '周辺: キリンビール本社、明治大学、帝京平成大学、中野区役所',
    ],
    specs: {
      propertyType: '商業ビル（自社保有）',
      address: '〒164-0001 東京都中野区中野5-60-14',
      nearestStation: '「中野」駅 北口 徒歩2分',
      structure: '地上5階建',
      tenants: '1階〜5階 リース中（バー・飲食店など）',
    },
    priceText: 'テナント募集状況はお問い合わせください',
  },
  'adachi-house': {
    title: '足立区 一戸建て',
    area: '足立区',
    summary:
      'つくばエクスプレス「青井」駅から徒歩3分。和室を中心にした落ち着いた雰囲気と、暮らしやすい動線を備えた一戸建てです。',
    cardLines: [
      '和室中心の一戸建て',
      'つくばエクスプレス「青井」駅 徒歩3分',
      'スーパー徒歩2分・近くに大きな公園',
    ],
    overview: [
      '下町らしい穏やかな住環境の中にある、和の趣を感じられる一戸建てです。畳の部屋を中心とした間取りで、落ち着いた住まいを求める方に向いています。',
      'スーパーまで徒歩2分、大きな公園も徒歩圏にあり、毎日の暮らしやすさにも配慮されたロケーションです。当社へ直接お問い合わせいただくことで、仲介手数料のご負担を抑えられる場合があります。',
    ],
    access: ['つくばエクスプレス「青井」駅 徒歩3分', 'スーパー 徒歩2分', '近隣に大型公園あり'],
    specs: {
      propertyType: '一戸建て',
      address: '東京都足立区',
      nearestStation: 'つくばエクスプレス「青井」駅 徒歩3分',
      features: '和室中心／レトロな佇まい',
      notes: '直接のお問い合わせで仲介手数料を抑えられる場合があります',
    },
    priceText: '賃料はお問い合わせください',
    priceNote: '賃料・条件は調整中です。最新の情報は個別にご案内します。',
  },
  'iruma-apartment': {
    title: '入間黒須団地',
    area: '埼玉県入間市',
    summary:
      '西武池袋線「入間市」駅から徒歩8分、2LDKの1階住戸。和室2室とリフォーム済みの浴室を備えた、ご家族にも使いやすい住まいです。',
    cardLines: ['2LDK（和室2室）／1階', '西武池袋線「入間市」駅 徒歩8分', '浴室リフォーム済み'],
    overview: [
      '西武池袋線「入間市」駅から徒歩8分。駅前の商業施設も使いやすく、生活費とアクセスのバランスが良いマンションです。',
      '2LDKのうち2室が和室で、小さなお子さまのいるご家庭や、落ち着いた和室を好む方にもなじみやすい住戸です。',
    ],
    access: ['西武池袋線「入間市」駅 徒歩8分', '西武入間ペペ 徒歩9分', '1階住戸のため出入りがしやすい'],
    specs: {
      propertyType: 'マンション',
      layout: '2LDK（和室2室）',
      floor: '1階',
      address: '埼玉県入間市',
      nearestStation: '西武池袋線「入間市」駅 徒歩8分',
      features: '浴室リフォーム済み',
      notes: '直接のお問い合わせ歓迎',
    },
    priceText: '賃料はお問い合わせください',
    priceNote: '最新の募集条件はお問い合わせ時にご案内します。',
  },
};

export const ja = {
  meta: {
    siteName: '應加合同会社',
    defaultTitle: '應加合同会社｜中野区の不動産会社（売買・賃貸・投資相談）',
    titleTemplate: '{page}｜應加合同会社',
  },

  common: {
    companyName: '應加合同会社',
    companyNameLatin: 'Ooka LLC',
    logoMark: '應',
    phoneLabel: 'お電話でのお問い合わせ',
    callShort: '電話',
    emailUs: 'メールで問い合わせる',
    viewDetails: '詳細を見る',
    priceOnRequest: '価格はお問い合わせください',
    photoComingSoon: '写真準備中',
    opensInNewTab: '（新しいタブで開きます）',
    menuOpen: 'メニューを開く',
    menuClose: 'メニューを閉じる',
    skipToContent: '本文へスキップ',
    languageSwitcher: '表示言語',
    // 営業時間が決まったら書き換えて、src/data/site.ts の showBusinessHours を true に
    businessHours: '受付 [営業時間]',
    closedDays: '定休 [定休日]',
    supportedLanguages: '日本語・中文・English 対応',
    association: '全日本不動産協会 会員',
    license: '宅地建物取引業 {license}',
  },

  nav: {
    home: 'ホーム',
    properties: '物件情報',
    company: '会社概要',
    contact: 'お問い合わせ',
    tsuchiya: 'TSUCHIYAビル',
    mainLabel: 'メインメニュー',
    footerLabel: 'フッターメニュー',
  },

  header: {
    tagline: '不動産売買・賃貸仲介／投資相談　中野区丸山',
    homeLinkLabel: '應加合同会社 トップページへ',
  },

  propertyKinds: {
    sale: '売買',
    rent: '賃貸',
    owned: '自社保有',
  },

  priceLabels: {
    sale: '価格（税込）',
    rent: '賃料',
    owned: 'テナント募集',
  },

  specLabels: {
    propertyType: '種別',
    price: '価格',
    layout: '間取り',
    area: '専有面積',
    floor: '所在階',
    direction: '向き',
    address: '所在地',
    nearestStation: '交通',
    structure: '構造・規模',
    built: '築年月',
    totalUnits: '総戸数',
    managementFee: '管理費',
    repairReserve: '修繕積立金',
    parking: '駐車場',
    pets: 'ペット',
    managementCompany: '管理会社',
    condition: '室内の状況',
    handover: '引渡し',
    tenants: '入居状況',
    features: '特徴',
    notes: '備考',
  },

  home: {
    heroTitle: ['中野の不動産会社です。', '売る・買う・貸すのご相談を、', '日本語・中国語・英語で。'],
    heroLead:
      '2016年設立。仲介に加えて自社保有物件のご案内も行っています。外国籍のお客様の購入・賃貸、相続や売却のご相談も、担当者が直接お話を伺います。',
    heroCtaProperties: '掲載物件を見る',
    heroCtaEmail: 'メールで問い合わせる',
    listingsTitle: '掲載中の物件',
    listingsCount: '全{count}件',
    viewAllProperties: '物件一覧へ',
    servicesTitle: 'ご相談いただける内容',
    services: [
      { title: '購入したい', body: '居住用・投資用の物件探し。ローンや諸費用の目安もご説明します。' },
      { title: '売却したい', body: '査定から販売活動、お引渡しまで。相続した不動産のご相談も承ります。' },
      {
        title: '借りたい・貸したい',
        body: '自社保有物件を中心に、直接のご契約で仲介手数料を抑えられる場合があります。',
      },
      {
        title: '外国籍のお客様',
        body: '中国語・英語で、契約の内容や日本の商習慣から丁寧にご案内します。',
      },
    ],
    companyTitle: '会社概要',
    companyMore: '会社概要をもっと見る',
    accessTitle: 'アクセス',
  },

  propertiesPage: {
    title: '物件情報',
    lead: '仲介物件・自社保有物件を含め、現在ご案内できる物件の一覧です。',
    filterLabel: '種別で絞り込む',
    filterAll: 'すべて',
    empty: '該当する物件はありません。',
  },

  propertyDetail: {
    breadcrumbLabel: 'パンくずリスト',
    overviewTitle: '物件の特徴',
    accessTitle: '交通・周辺環境',
    specsTitle: '物件概要',
    galleryLabel: '物件写真',
    photoAlt: '{title} 写真{n}',
    showPhoto: '写真{n}を表示',
    inquire: 'この物件について問い合わせる',
    inquireSubject: '【物件のお問い合わせ】{title}',
    callUs: 'お電話でもお気軽にどうぞ',
    backToList: '物件一覧に戻る',
  },

  company: {
    title: '会社概要',
    lead: '應加合同会社は、不動産仲介と資産形成のサポートを軸に、言葉・実務・対話の質を大切にする小回りの利く不動産会社です。',
    body: '投資用不動産の仲介、自社保有物件のご案内、不動産に関するさまざまなご相談を中心に、お客様一人ひとりの状況に合わせた実務的なサポートをしています。派手さよりも、相談しやすさ、説明の分かりやすさ、長くお付き合いできる信頼関係を大切にしています。',
    factsTitle: '基本情報',
    factLabels: {
      tradeName: '商号',
      representative: '代表',
      established: '設立',
      license: '免許番号',
      address: '所在地',
      phone: '電話番号',
      email: 'メール',
      associations: '加盟団体',
      partners: '業務提携',
      banks: '取引銀行',
    },
    facts: {
      tradeName: '應加合同会社（Ooka Limited Liability Company）',
      representative: '加瀬 麗芳（宅地建物取引士）',
      established: '2016年4月15日',
      address: '〒165-0021 東京都中野区丸山一丁目3番2号',
      associations: '（社）全日本不動産協会／（社）不動産保証協会／（社）全国不動産協会',
      partners: 'ミサワホーム株式会社／株式会社オープンハウス',
      banks: '三井住友銀行／三菱UFJ銀行',
    },
    teamTitle: '役員紹介',
    languagesLabel: '対応言語',
    team: [
      {
        role: '代表',
        name: '加瀬 麗芳',
        languages: '中国語・日本語・英語',
        profile:
          '中国浙江省の大学を卒業後、同大学の被服学の専任講師を務める。1990年に来日し、東京学芸大学大学院の研究員を経て、文化学園大学大学院で博士前期課程を修了。宅地建物取引士・競売不動産取扱主任者の資格を持ち、学術的な背景と不動産の実務の両面からご相談に対応します。',
      },
      {
        role: '役員',
        name: '',
        languages: '日本語・英語',
        profile:
          '法政大学を卒業後、国家公務員として海上自衛隊の幹部を務める。その後、地方公務員としての経験を重ね、退職後に應加合同会社の役員に就任。公共性の高い職務で培った責任感と調整力を生かし、堅実な業務を支えています。',
      },
      {
        role: '役員',
        name: '',
        languages: '英語・日本語・中国語',
        profile:
          '米国ワシントン大学を卒業後、シアトルの外資系企業でエンジニアとして勤務。2023年に日本へ異動し、應加合同会社の役員に就任。FP3級を取得し、技術的な視点と数字への理解を生かして、分かりやすく具体的なご提案を支えています。',
      },
    ],
    accessTitle: 'アクセス',
    mapTitle: '應加合同会社の所在地（Googleマップ）',
  },

  contact: {
    title: 'お問い合わせ',
    lead: '物件のご相談、売却のご相談、資産形成についてのご質問など、お気軽にご連絡ください。日本語・中国語・英語で対応いたします。',
    phoneTitle: 'お電話',
    emailTitle: 'メール',
    addressTitle: '所在地',
    languagesTitle: '対応言語',
    languages: '日本語・中国語（普通話）・英語',
    hoursTitle: '受付時間',
    quickTitle: 'ご用件を選んでメールする',
    quickNote: 'お使いのメールソフトが、件名が入った状態で開きます。',
    subjects: [
      '物件の購入について相談したい',
      '賃貸物件について問い合わせたい',
      '不動産投資について相談したい',
      '不動産の売却を検討している',
      'その他のお問い合わせ',
    ],
    generalSubject: 'Webサイトからのお問い合わせ',
  },

  /** TSUCHIYAビル（自社ビル）の専用ページ */
  tsuchiya: {
    pageTitle: 'TSUCHIYAビル（中野）',
    title: 'TSUCHIYAビル',
    subtitle: '中野駅北口 徒歩2分の商業ビル',
    lead: '中野駅から徒歩2分、中野5丁目に位置する5階建ての商業ビルです。應加合同会社が所有・管理しています。',
    photoAlt: 'TSUCHIYAビルの外観',
    factLabels: {
      address: '所在地',
      station: '交通',
      scale: '規模',
      owner: '所有・管理',
    },
    facts: {
      address: '〒164-0001 東京都中野区中野5-60-14',
      station: 'JR中央線・総武線／東京メトロ東西線「中野」駅 北口 徒歩2分',
      scale: '地上5階建（1階〜5階 店舗）',
      owner: '應加合同会社',
    },
    ctaVacancy: 'テナント募集状況を見る',
    ctaContact: '管理人に問い合わせる',
    sectionNavLabel: 'このページの目次',
    overviewTitle: 'ビルについて',
    overview: [
      '1階から5階までを店舗として貸し出しており、カクテルバーやダーツバーなど、多種多様なお店にご入居いただいています。',
      '中野駅の1日平均乗降人員は16万人以上。駅前の中野サンモールからすぐの、人通りの多いエリアです。',
    ],
    stationStatLabel: '中野駅の1日平均乗降人員',
    stationStatValue: '16万人以上',
    nearbyTitle: '周辺の主な施設',
    nearby: ['キリンビール本社', '帝京平成大学', '明治大学', '早稲田大学', '中野区役所'],
    vacancyTitle: 'テナント募集',
    vacancyNone: '現在募集中のテナントはありません。',
    vacancyOpen: '現在、テナントを募集しています。詳しくはお問い合わせください。',
    vacancyNote: '空き区画の予定や出店のご相談は、お気軽にお問い合わせください。',
    vacancyUpdated: '{date}更新',
    accessTitle: 'アクセス',
    directionsTitle: '中野駅からの道順',
    directions: [
      '中野駅北口を出てまっすぐ進み、中野サンモールに入ります。',
      '約100m進み、右手に見えるコージーコーナーの手前の道を右に曲がります。',
      'さらに約50m進むと、飲料の自動販売機が2台置いてあるビルがTSUCHIYAビルです。',
    ],
    parkingTitle: '駐車場',
    parking: '駐車場はありません。近隣のコインパーキングをご利用ください。',
    mapTitle: 'TSUCHIYAビルの所在地（Googleマップ）',
    contactTitle: 'お問い合わせ',
    contactLead: 'ご質問やテナント募集への応募など、TSUCHIYAビルの管理人に直接お問い合わせいただけます。',
    /** label: ボタンの文言 / subject: メールの件名 */
    inquiries: [
      { label: 'テナント募集について', subject: '【TSUCHIYAビル】テナント募集について' },
      { label: 'ビルについての質問', subject: '【TSUCHIYAビル】ビルについての質問' },
      { label: 'その他のお問い合わせ', subject: '【TSUCHIYAビル】その他のお問い合わせ' },
    ],
  },

  notFound: {
    title: 'ページが見つかりません',
    body: 'お探しのページは移動または削除された可能性があります。',
    back: 'トップページへ戻る',
  },

  footer: {
    copyright: '© {year} 應加合同会社 Ooka LLC',
  },

  properties,
};
