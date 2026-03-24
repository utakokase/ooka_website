import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';

const companyFacts = [
  {
    label: '商号',
    value: '應加合同会社 (Ooka Limited Liability Company)',
  },
  { label: '本社所在地', value: '〒165-0021 東京都中野区丸山一丁目3番2号' },
  { label: 'TEL', value: '03-6319-0573' },
  { label: '設立年月日', value: '2016年4月15日' },
  {
    label: '加盟団体',
    value: '(社) 全日本不動産協会 / (社) 不動産保証協会 / (社) 全国不動産協会',
  },
  { label: '業務提携', value: 'ミサワホーム株式会社 / 株式会社オープンハウス' },
  { label: '取引銀行', value: '三井住友銀行 / 三菱UFJ銀行' },
];

const executives = [
  {
    name: '代表 加瀬麗芳',
    languages: '中国語 / 日本語 / 英語',
    profile:
      '中国浙江省の大学を卒業後、大学の被服学の専任講師として招かれる。1990年に日本へ留学し、東京学芸大学大学院で研究員を務め、文化学園大学院で博士前期課程を修了。競売不動産取扱主任者、宅地建物取引士資格を保持し、学術的背景と不動産実務を横断しながら高い専門性でご相談に対応します。',
  },
  {
    name: '役員',
    languages: '日本語 / 英語',
    profile:
      '法政大学を卒業後、国家公務員として勤務し、海上自衛隊の幹部を務める。その後は地方公務員としても経験を重ね、退職後に應加合同会社の役員として参画。公共性の高い職務で培った責任感と調整力を活かし、堅実な業務遂行を支えています。',
  },
  {
    name: '役員',
    languages: '英語 / 日本語 / 中国語',
    profile:
      'アメリカ・ワシントン大学を卒業後、シアトルの外資系企業でエンジニアとして勤務。2023年に日本へ異動し、現在は應加合同会社の役員として参画。FP三級資格も取得し、技術的な視点と数字への理解を活かして、分かりやすく具体的な提案を支えています。',
  },
];

export function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="会社概要"
        description="應加合同会社は、不動産仲介と資産形成支援を軸に、言語・実務・対話の質を大切にする小回りの利く不動産会社です。"
      />

      <Section className="pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="surface-card p-6 sm:p-8">
            <p className="text-2xl font-bold text-ink">
              應加合同会社
              <span className="mt-2 block text-base font-medium text-muted">
                Ooka Limited Liability Company
              </span>
            </p>
            <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
              投資用不動産の仲介、保有物件のご案内、不動産に関する各種ご相談を中心に、
              お客様ごとの状況に合わせた実務的なサポートを提供しています。派手さよりも、
              相談しやすさ、説明の明快さ、長くお付き合いできる信頼関係を重視しています。
            </p>
          </div>
          <div className="surface-card overflow-hidden">
            <dl className="divide-y divide-stone">
              {companyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:px-8"
                >
                  <dt className="text-sm font-semibold text-ink">{fact.label}</dt>
                  <dd className="text-sm leading-7 text-muted">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Team"
        title="エグゼクティブ / チーム"
        description="多言語対応、公共性の高い実務経験、技術的な理解力など、異なる背景を持つメンバーが協力しながら、お客様の判断を支えます。"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {executives.map((executive) => (
            <article key={executive.profile} className="surface-card p-6 sm:p-8">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[24px] border border-stone bg-canvas text-center text-sm font-medium text-muted">
                Portrait Photo
                <br />
                Placeholder
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{executive.name}</h3>
              <p className="mt-2 text-sm font-semibold text-navy">{executive.languages}</p>
              <p className="mt-4 text-sm leading-8 text-muted">{executive.profile}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
