export interface PropertySpec {
  label: string;
  value: string;
}

const primeParkImages = Object.entries(
  import.meta.glob('../assets/prime-parks-shinagawa/*.{jpg,jpeg,JPG,JPEG}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, value]) => value as string);

const primeParkMainImage =
  primeParkImages.find((path) => path.includes('IMG_2653')) ?? primeParkImages[0];

const primeParkGallery = [
  primeParkMainImage,
  ...primeParkImages.filter((path) => path !== primeParkMainImage),
];

export interface PropertyData {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  tagline: string;
  heroImage: string;
  gallery: string[];
  overview: string[];
  access: string[];
  specs: PropertySpec[];
  priceInfo: {
    label: string;
    value: string;
    note: string;
  };
  badges: string[];
  externalLink?: {
    label: string;
    url: string;
  };
}

export const properties: PropertyData[] = [
  {
    slug: 'prime-parks-shinagawa',
    title: 'プライムパークス品川ザ・タワー',
    shortTitle: 'プライムパークス品川',
    category: '売買物件',
    summary:
      '共用施設充実の大規模タワー。駅徒歩3分＆商業施設直結で生活利便性良好。28階東向きの開放的な眺望と整形リビングで快適な住空間。',
    tagline: '都心居住と投資価値を両立する、旗艦クラスのご紹介物件',
    heroImage: primeParkMainImage,
    gallery: primeParkGallery,
    overview: [
      '品川シーサイド駅徒歩3分、ペデストリアンデッキ直結の利便性が魅力の大規模タワーレジデンス。1階にはコンビニや保育施設があり、日々の暮らしをスムーズにサポートします。ラウンジやゲストルーム、スカイパークなど共用施設も充実しており、タワーマンションならではの豊かな生活が実現できます。',
      '本住戸は28階・東向きにつき、開放感ある眺望と朝の心地よい陽光を楽しめるお部屋。リビングは使いやすい整形タイプで家具配置がしやすく、暮らしのイメージがしやすい間取りです。',
      '床暖房や食洗機、ディスポーザーなど設備も充実。収納も豊富で、日常を快適に過ごせる住まいです。',
    ],
    access: [
      'りんかい線「品川シーサイド」駅 徒歩4分',
      '京急本線「青物横丁」駅 徒歩9分',
      '渋谷12分、新宿18分の都心直結',
      'イオン隣接 / 敷地内コンビニ・保育園',
    ],
    specs: [
      { label: '面積', value: '61.80㎡（壁芯）' },
      { label: '方角', value: '東向き' },
      { label: '所在階', value: '28階' },
      { label: '間取り', value: '2LDK + WIC' },
      { label: '所在地', value: '東京都品川区東品川4丁目11-36' },
      { label: '構造・規模', value: 'RC造地上29階建地下1階' },
      { label: '築年月', value: '平成31年（2019年）1月' },
      { label: '総戸数', value: '817戸' },
      { label: '管理費', value: '16,090円 / 月' },
      { label: '修繕積立金', value: '10,510円 / 月' },
      { label: '駐車場', value: '有（28,000〜32,000円 / 月）' },
      { label: 'ペット飼育', value: '可（使用規則有）' },
      { label: '管理会社', value: '（株）東急リブコ' },
      { label: '室内状況', value: '令和8年2月クリーニング済み' },
      { label: '引渡', value: '即時' },
    ],
    priceInfo: {
      label: '価格（税込）',
      value: '15,380万円',
      note: '管理費・修繕積立金・駐車場等の詳細条件はお問い合わせください。',
    },
    badges: ['品川エリア', 'タワーレジデンス', '投資向け相談可'],
    externalLink: {
      label: 'アットホームで詳細を見る',
      url: 'https://www.athome.co.jp/mansion/6989951153/',
    },
  },
  {
    slug: 'adachi-house',
    title: '足立区一軒家',
    shortTitle: '足立区一軒家',
    category: '賃貸戸建',
    summary:
      '足立区・青井駅徒歩3分。和室中心の落ち着いた空気感と、暮らしやすい生活導線を備えた実用性の高い戸建てです。',
    tagline: '地域に寄り添う、温かく実直な住まい',
    heroImage:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: [
      '下町らしい穏やかな住環境の中で、和の趣を感じられる戸建物件です。畳の部屋を中心に構成され、落ち着いた住まいを求める方に適しています。',
      'スーパーまで徒歩2分、大きな公園も徒歩圏にあり、日々の暮らしのしやすさにも配慮されたロケーションです。直接のお問い合わせにより、仲介手数料のご負担を抑えられる場合があります。',
    ],
    access: [
      'つくばエクスプレス「青井」駅 徒歩3分',
      'スーパー 徒歩2分',
      '近隣に大型公園あり',
    ],
    specs: [
      { label: '物件種別', value: '戸建て' },
      { label: '所在地', value: '東京都足立区' },
      { label: '最寄駅', value: '青井駅 徒歩3分' },
      { label: '特徴', value: '和室中心 / レトロな佇まい' },
      { label: '備考', value: '仲介手数料軽減の可能性あり' },
    ],
    priceInfo: {
      label: '賃料',
      value: 'お問い合わせください',
      note: '賃料・条件は調整中です。最新情報は個別にご案内いたします。',
    },
    badges: ['駅近3分', '戸建て', '和の雰囲気'],
  },
  {
    slug: 'iruma-apartment',
    title: '入間黒須団地',
    shortTitle: '入間黒須団地',
    category: '賃貸マンション',
    summary:
      '入間駅徒歩8分、2LDKの1階住戸。和室2室と新装バスルームを備えた、家族にも使いやすい住まいです。',
    tagline: '手の届きやすさと暮らしやすさを両立する一室',
    heroImage:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    ],
    overview: [
      '西武池袋線「入間市」駅から徒歩8分。駅前商業施設も利用しやすく、生活コストとアクセスのバランスが良い賃貸マンションです。',
      '2LDKのうち2室が和室仕様となっており、小さなお子さまのいるご家庭や、落ち着いた和室空間を好まれる方にもなじみやすい住戸です。',
    ],
    access: [
      '西武池袋線「入間市」駅 徒歩8分',
      '西武入間ペペ 徒歩9分',
      '1階住戸のため出入りがしやすい',
    ],
    specs: [
      { label: '所在地', value: '埼玉県入間市' },
      { label: '間取り', value: '2LDK' },
      { label: '所在階', value: '1階' },
      { label: '和室', value: '2室' },
      { label: '設備', value: '浴室リフォーム済み' },
      { label: '備考', value: '直接問い合わせ歓迎' },
    ],
    priceInfo: {
      label: '賃料',
      value: 'お問い合わせください',
      note: '最新の募集条件はお問い合わせ時点でご案内いたします。',
    },
    badges: ['ファミリー向け', '駅徒歩圏', 'リフォーム済み'],
  },
];

export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);
