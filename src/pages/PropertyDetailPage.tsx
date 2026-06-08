import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getPropertyBySlug } from '../data/properties';
import { createMailtoHref } from '../data/contact';

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug ?? '');
  const [activeImg, setActiveImg] = useState(0);

  if (!property) return <Navigate to="/properties" replace />;

  return (
    <div>
      {/* Hero image */}
      <div className="w-full aspect-[16/7] overflow-hidden bg-warm">
        <img
          src={property.gallery[activeImg]}
          alt={property.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail strip */}
      {property.gallery.length > 1 && (
        <div className="max-w-6xl mx-auto px-6 mt-3 flex gap-2 overflow-x-auto pb-1">
          {property.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`flex-shrink-0 w-20 h-14 overflow-hidden rounded-lg border-2 transition-all ${
                activeImg === i ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
        {/* Main content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link to="/properties" className="text-xs text-muted hover:text-ink transition-colors">
              ← 物件一覧
            </Link>
            <span className="text-faint">·</span>
            <span className="text-xs text-accent border border-accent/30 rounded-full px-2.5 py-0.5">
              {property.category}
            </span>
          </div>

          <h1 className="font-serif font-light text-ink leading-tight mb-2"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {property.title}
          </h1>
          <p className="text-accent-light text-sm mb-10">{property.tagline}</p>

          {/* Overview */}
          <section className="border-t border-ink/10 pt-8 mb-10">
            <p className="eyebrow mb-5">物件概要</p>
            <div className="space-y-4">
              {property.overview.map((para, i) => (
                <p key={i} className="text-sm leading-8 text-muted">{para}</p>
              ))}
            </div>
          </section>

          {/* Access */}
          <section className="border-t border-ink/10 pt-8 mb-10">
            <p className="eyebrow mb-5">アクセス</p>
            <ul className="space-y-2">
              {property.access.map((line) => (
                <li key={line} className="text-sm text-muted flex gap-3">
                  <span className="text-accent mt-0.5">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Specs */}
          <section className="border-t border-ink/10 pt-8">
            <p className="eyebrow mb-5">詳細情報</p>
            <dl className="divide-y divide-ink/8">
              {property.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[140px_1fr] gap-4 py-3">
                  <dt className="text-xs text-faint self-start pt-0.5">{spec.label}</dt>
                  <dd className="text-sm text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:sticky md:top-24 md:self-start space-y-5">
          <div className="bg-warm rounded-2xl p-7">
            <p className="text-xs text-faint mb-1">{property.priceInfo.label}</p>
            <p className="font-serif text-3xl text-ink mb-1">{property.priceInfo.value}</p>
            <p className="text-xs text-muted leading-6">{property.priceInfo.note}</p>
          </div>

          <a
            href={createMailtoHref(`${property.title}についてのお問い合わせ`)}
            className="block w-full text-center bg-ink text-paper text-sm py-4 rounded-full hover:bg-accent transition-colors"
          >
            この物件について相談する
          </a>

          {property.externalLink && (
            <a
              href={property.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-ink text-sm py-4 rounded-full border border-ink/20 hover:border-ink/50 transition-colors"
            >
              {property.externalLink.label} ↗
            </a>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {property.badges.map((b) => (
              <span key={b} className="text-[11px] text-muted border border-ink/15 rounded-full px-3 py-1">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
