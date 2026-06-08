const companyFacts = [
  { label: '商号', value: '應加合同会社 (Ooka Limited Liability Company)' },
  { label: '本社所在地', value: '〒165-0021 東京都中野区丸山一丁目3番2号' },
  { label: 'TEL', value: '03-6319-0573' },
  { label: '設立', value: '2016年4月15日' },
  { label: '加盟団体', value: '(社) 全日本不動産協会 / (社) 不動産保証協会 / (社) 全国不動産協会' },
  { label: '業務提携', value: 'ミサワホーム株式会社 / 株式会社オープンハウス' },
  { label: '取引銀行', value: '三井住友銀行 / 三菱UFJ銀行' },
];

const executives = [
  {
    name: '代表 加瀬麗芳',
    languages: '中国語 · 日本語 · 英語',
    profile: '中国浙江省の大学を卒業後、大学の被服学の専任講師として招かれる。1990年に日本へ留学し、東京学芸大学大学院で研究員を務め、文化学園大学院で博士前期課程を修了。競売不動産取扱主任者、宅地建物取引士資格を保持し、学術的背景と不動産実務を横断しながら高い専門性でご相談に対応します。',
  },
  {
    name: '役員',
    languages: '日本語 · 英語',
    profile: '法政大学を卒業後、国家公務員として勤務し、海上自衛隊の幹部を務める。その後は地方公務員としても経験を重ね、退職後に應加合同会社の役員として参画。公共性の高い職務で培った責任感と調整力を活かし、堅実な業務遂行を支えています。',
  },
  {
    name: '役員',
    languages: '英語 · 日本語 · 中国語',
    profile: 'アメリカ・ワシントン大学を卒業後、シアトルの外資系企業でエンジニアとして勤務。2023年に日本へ異動し、現在は應加合同会社の役員として参画。FP三級資格も取得し、技術的な視点と数字への理解を活かして、分かりやすく具体的な提案を支えています。',
  },
];

export function CompanyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <p className="eyebrow mb-4">Company</p>
      <h1 className="font-serif font-light text-ink leading-tight mb-10"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        会社概要
      </h1>

      {/* Mission statement */}
      <section className="border-t border-ink/10 pt-10 pb-14 md:grid md:grid-cols-2 md:gap-16">
        <h2 className="font-serif text-xl font-light text-ink leading-relaxed mb-6 md:mb-0">
          應加合同会社は、不動産仲介と資産形成支援を軸に、言語・実務・対話の質を大切にする小回りの利く不動産会社です。
        </h2>
        <p className="text-sm text-muted leading-8">
          投資用不動産の仲介、保有物件のご案内、不動産に関する各種ご相談を中心に、お客様ごとの状況に合わせた実務的なサポートを提供しています。派手さよりも、相談しやすさ、説明の明快さ、長くお付き合いできる信頼関係を重視しています。
        </p>
      </section>

      {/* Company facts */}
      <section className="border-t border-ink/10 pt-10 pb-14">
        <p className="eyebrow mb-6">基本情報</p>
        <dl className="divide-y divide-ink/8 max-w-2xl">
          {companyFacts.map((f) => (
            <div key={f.label} className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-4">
              <dt className="text-xs text-faint pt-0.5">{f.label}</dt>
              <dd className="text-sm text-ink leading-7">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Team */}
      <section className="border-t border-ink/10 pt-10">
        <p className="eyebrow mb-3">Team</p>
        <h2 className="font-serif text-xl font-light text-ink mb-10">エグゼクティブ / チーム</h2>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {executives.map((ex, i) => (
            <div key={i}>
              <div className="aspect-[3/4] bg-warm rounded-2xl mb-5 flex items-center justify-center">
                <span className="text-xs text-faint">Portrait Photo</span>
              </div>
              <h3 className="font-serif text-lg text-ink">{ex.name}</h3>
              <p className="text-xs text-accent mt-1 mb-3 tracking-wide">{ex.languages}</p>
              <p className="text-sm text-muted leading-7">{ex.profile}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
