import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { createMailtoHref } from '../data/contact';

const strengths = [
  { en: 'Long-term', ja: '長期視点のご提案', body: '実需と投資の両面から、資産形成を見据えた判断材料を整理します。' },
  { en: 'Multilingual', ja: '多言語コミュニケーション', body: '日本語・中国語・英語で自然にご相談いただけます。' },
  { en: 'Direct', ja: '直接相談しやすい体制', body: '条件整理から売却相談まで、落ち着いて伴走します。' },
  { en: 'Own Portfolio', ja: '保有物件もご案内', body: '仲介物件に加え、会社保有物件もご案内しています。' },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="eyebrow mb-6">應加合同会社 / Ooka LLC</p>
        <h1 className="font-serif font-light text-ink leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 8rem)' }}>
          資産形成は<br />不動産から
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 text-base font-light text-muted">
          <span>Build your asset with real estate</span>
          <span className="hidden sm:inline text-faint">—</span>
          <span>想財富積累，從房產開始</span>
        </div>
        <p className="mt-8 max-w-xl text-base leading-8 text-muted">
          應加合同会社は、日本語・中国語・英語に対応し、不動産仲介・投資相談・保有物件のご紹介を通じて、長期的な資産形成を支えます。
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            to="/contact"
            className="inline-block bg-ink text-paper text-sm px-7 py-3 rounded-full hover:bg-accent transition-colors"
          >
            ご相談・お問い合わせ
          </Link>
          <Link
            to="/properties"
            className="inline-block text-ink text-sm px-7 py-3 rounded-full border border-ink/20 hover:border-ink/50 transition-colors"
          >
            物件一覧
          </Link>
        </div>
      </section>

      {/* Featured property */}
      <section className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-warm">
            <img
              src={properties[0].heroImage}
              alt={properties[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">注目物件 — {properties[0].category}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink leading-tight">
              {properties[0].title}
            </h2>
            <p className="mt-2 text-accent-light font-light">{properties[0].tagline}</p>
            <p className="mt-5 text-muted text-sm leading-8">{properties[0].summary}</p>
            <div className="mt-6 border-t border-ink/10 pt-5 flex items-baseline justify-between">
              <span className="text-2xl font-serif text-ink">{properties[0].priceInfo.value}</span>
              <Link
                to={`/properties/${properties[0].slug}`}
                className="text-sm text-accent hover:underline"
              >
                詳細を見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-ink/10 bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="eyebrow text-accent-light mb-6">Philosophy</p>
          <h2 className="font-serif font-light leading-tight mb-12"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}>
            不動産を、長期的な<br />資産として捉える
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10">
            {strengths.map((s) => (
              <div key={s.en} className="bg-ink p-8">
                <p className="text-[10px] tracking-[0.2em] uppercase text-faint mb-3">{s.en}</p>
                <p className="text-base font-medium text-paper mb-3">{s.ja}</p>
                <p className="text-sm leading-7 text-paper/60">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All properties */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-10">
          <p className="font-serif text-2xl md:text-3xl font-light text-ink">物件一覧</p>
          <Link to="/properties" className="text-sm text-muted hover:text-ink transition-colors">すべて見る →</Link>
        </div>
        <div className="divide-y divide-ink/10">
          {properties.map((p, i) => (
            <Link
              key={p.slug}
              to={`/properties/${p.slug}`}
              className="group flex flex-col sm:flex-row gap-6 py-8 hover:opacity-80 transition-opacity"
            >
              <div className="sm:w-48 aspect-[4/3] sm:aspect-[4/3] overflow-hidden rounded-xl bg-warm flex-shrink-0">
                <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tracking-widest uppercase text-faint">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xs text-accent border border-accent/30 rounded-full px-2.5 py-0.5">{p.category}</span>
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-7 line-clamp-2">{p.summary}</p>
                <p className="mt-3 text-base font-medium text-ink">{p.priceInfo.value}</p>
              </div>
              <div className="hidden sm:flex items-center text-faint group-hover:text-ink transition-colors">
                <span className="text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-ink">
              物件のご相談・売却相談を<br className="hidden md:block" />承ります
            </h2>
            <p className="mt-3 text-muted text-sm leading-7">
              投資用不動産の検討から保有不動産のご相談まで、落ち着いて対応いたします。
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href={createMailtoHref('Webサイトからのお問い合わせ')}
              className="inline-block bg-ink text-paper text-sm px-8 py-4 rounded-full hover:bg-accent transition-colors whitespace-nowrap"
            >
              メールで相談する
            </a>
            <Link
              to="/contact"
              className="inline-block text-ink text-sm px-8 py-4 rounded-full border border-ink/20 hover:border-ink/50 transition-colors whitespace-nowrap"
            >
              お問い合わせページへ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
