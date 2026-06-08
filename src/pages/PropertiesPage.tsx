import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

export function PropertiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <p className="eyebrow mb-4">Properties</p>
      <h1 className="font-serif font-light text-ink leading-tight mb-2"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        物件情報
      </h1>
      <p className="text-muted text-sm mb-12">
        仲介物件・保有物件を含む、現在ご案内できる物件の一覧です。
      </p>

      <div className="divide-y divide-ink/10">
        {properties.map((p, i) => (
          <Link
            key={p.slug}
            to={`/properties/${p.slug}`}
            className="group flex flex-col sm:flex-row gap-8 py-10 hover:opacity-80 transition-opacity"
          >
            <div className="sm:w-64 md:w-80 aspect-[3/2] overflow-hidden rounded-2xl bg-warm flex-shrink-0">
              <img
                src={p.heroImage}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-widest text-faint uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-accent border border-accent/30 rounded-full px-2.5 py-0.5">
                  {p.category}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-accent-light mb-4">{p.tagline}</p>
              <p className="text-sm text-muted leading-8 mb-5 max-w-xl">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.badges.map((b) => (
                  <span key={b} className="text-[11px] text-muted border border-ink/15 rounded-full px-3 py-1">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex items-baseline gap-4 border-t border-ink/10 pt-5">
                <span className="font-serif text-xl text-ink">{p.priceInfo.value}</span>
                <span className="text-sm text-accent group-hover:underline ml-auto">詳細を見る →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
