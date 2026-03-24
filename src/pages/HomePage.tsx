import { InquiryCTA } from '../components/InquiryCTA';
import { PropertyCard } from '../components/PropertyCard';
import { Section } from '../components/Section';
import { ButtonLink } from '../components/ui/ButtonLink';
import { properties } from '../data/properties';

const strengths = [
  {
    title: '長期視点のご提案',
    text: '実需と投資の両面から、資産形成を見据えた判断材料を整理します。',
  },
  {
    title: '多言語コミュニケーション',
    text: '日本語・中国語・英語で自然にご相談いただけます。',
  },
  {
    title: '直接相談しやすい体制',
    text: '条件整理から売却相談まで、落ち着いて伴走します。',
  },
  {
    title: '仲介と保有物件の両方を案内',
    text: '仲介物件に加え、会社保有物件もご案内しています。',
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone/70 pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(35,50,70,0.14),_transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.78),rgba(235,231,223,0.78))]" />
        <div className="container-shell relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <h1 className="font-bold leading-tight text-ink">
              <span className="block text-base font-semibold uppercase tracking-[0.16em] text-muted sm:text-lg">
                Build your asset with real estate
              </span>
              <span className="mt-3 block text-2xl font-medium text-muted sm:text-3xl lg:text-4xl">
                想財富積累，從房產開始
              </span>
              <span className="mt-5 block text-[3.2rem] leading-[0.98] tracking-[-0.03em] sm:text-[4.15rem] lg:text-[5.4rem]">
                <span className="block font-semibold tracking-[0.02em] text-ink/88">資産形成は</span>
                <span className="mt-1 block">不動産から</span>
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              應加合同会社は、日本語・中国語・英語に対応し、不動産仲介、投資相談、保有物件を含む選定物件のご紹介を通じて、長期的な資産形成を支えます。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <ButtonLink to="/contact">
                ご相談・お問い合わせ
              </ButtonLink>
              <ButtonLink to="/properties" variant="secondary">
                物件一覧を見る
              </ButtonLink>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="grid gap-0 sm:grid-cols-[1.05fr_0.95fr]">
              <div className="aspect-[5/6] sm:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
                  alt="品川エリアの高層レジデンス"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between bg-white p-6 sm:p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold tracking-wideish text-navy">
                      注目物件
                    </span>
                    <span className="text-xs text-muted">売買</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-snug text-ink">
                    プライムパークス品川ザ・タワー
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    駅徒歩3分＆商業施設直結で生活利便性良好。28階東向きの開放的な眺望と整形リビングで家具配置もしやすく快適な住空間です。
                  </p>
                </div>
                <div className="mt-7 border-t border-stone/80 pt-5">
                  <p className="text-sm leading-7 text-muted">28階 / 61.80㎡ / 2LDK + WIC</p>
                  <ButtonLink className="mt-4" to="/properties/prime-parks-shinagawa">
                    詳細を見る
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Philosophy"
        title="不動産を、長期的な資産として捉える"
        description="住まいとしての価値と、将来に向けた資産性の両方を大切にしています。"
      >
        <div className="surface-card grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="max-w-xl">
            <p className="eyebrow">Philosophy</p>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              土地の価値、住まいとしての安心、将来の売却や運用まで。
              不動産を長い視点で捉えるご提案を大切にしています。
            </p>
            <p className="mt-5 text-base font-semibold leading-8 text-ink sm:text-lg">
              将来を見据えた資産形成を、不動産から考えてみませんか。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => (
              <article key={strength.title} className="rounded-[24px] border border-stone bg-canvas p-5 sm:p-6">
                <h4 className="text-sm font-semibold text-ink">{strength.title}</h4>
                <p className="mt-2 text-sm leading-7 text-muted">{strength.text}</p>
              </article>
            ))}
            <article className="rounded-[24px] border border-stone bg-canvas p-5 sm:col-span-2 sm:p-6">
              <p className="text-sm font-semibold text-ink">不動産の捉え方</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                マイホームの検討から投資用不動産まで、居住価値と資産性の両方を見据えてご案内します。
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Properties"
        title="注目物件"
      >
        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </Section>

      <InquiryCTA
        title="物件のご相談・売却相談を承ります"
        description="投資用不動産の検討から保有不動産のご相談まで、落ち着いて対応いたします。"
      />
    </>
  );
}
