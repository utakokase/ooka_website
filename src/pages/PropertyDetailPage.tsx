import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { LocaleLink } from '../components/LocaleLink';
import { SectionTitle } from '../components/page-parts';
import { KindBadge, PhotoPlaceholder, PriceDisplay } from '../components/property-parts';
import { createMailtoHref } from '../data/contact';
import { getPropertyBySlug, SPEC_ORDER, type Property, type SpecKey } from '../data/properties';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';
import { fmt, formatPrice, priceToString } from '../i18n/format';
import { NotFoundPage } from './NotFoundPage';

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { path } = useI18n();
  const property = getPropertyBySlug(slug ?? '');
  if (!property) return <NotFoundPage />;
  // 自社ビルなど専用ページがある物件はそちらへ
  if (property.pagePath) return <Navigate to={path(property.pagePath)} replace />;
  // key で物件ごとに写真の選択状態をリセット
  return <PropertyDetail key={property.slug} property={property} />;
}

function PropertyDetail({ property }: { property: Property }) {
  const { t, locale } = useI18n();
  const text = t.properties[property.slug];
  usePageTitle(text.title);
  const [activeImage, setActiveImage] = useState(0);

  const specRows = SPEC_ORDER.flatMap((key): { key: SpecKey; value: string }[] => {
    if (key === 'price') {
      return property.priceYen === null
        ? []
        : [{ key, value: priceToString(formatPrice(locale, property.priceYen)) }];
    }
    const value = text.specs[key];
    return value ? [{ key, value }] : [];
  });

  return (
    <div className="container-page pt-5 pb-12">
      <nav aria-label={t.propertyDetail.breadcrumbLabel} className="text-[13px] mb-4">
        <ol className="m-0 p-0 list-none flex flex-wrap gap-1.5 text-muted">
          <li>
            <LocaleLink to="/">{t.nav.home}</LocaleLink>
            <span aria-hidden="true"> ›</span>
          </li>
          <li>
            <LocaleLink to="/properties">{t.nav.properties}</LocaleLink>
            <span aria-hidden="true"> ›</span>
          </li>
          <li aria-current="page">{text.title}</li>
        </ol>
      </nav>

      <div className="flex flex-wrap items-center gap-2 mb-1">
        <KindBadge kind={property.kind} />
        <span className="text-sm text-muted">{text.area}</span>
      </div>
      <h1 className="m-0 mb-5 text-[24px] sm:text-[28px] font-bold leading-snug">{text.title}</h1>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          {/* 写真 */}
          <section aria-label={t.propertyDetail.galleryLabel}>
            {property.images.length > 0 ? (
              <>
                <div className="aspect-[4/3] bg-placeholder">
                  <img
                    src={property.images[activeImage]}
                    alt={fmt(t.propertyDetail.photoAlt, { title: text.title, n: activeImage + 1 })}
                    className="w-full h-full object-contain bg-ink/5"
                  />
                </div>
                {property.images.length > 1 && (
                  <ul className="m-0 mt-2 p-0 list-none flex gap-1.5 overflow-x-auto pb-1">
                    {property.images.map((src, i) => (
                      <li key={src} className="shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveImage(i)}
                          aria-label={fmt(t.propertyDetail.showPhoto, { n: i + 1 })}
                          aria-pressed={i === activeImage}
                          className={`block w-[84px] h-[60px] p-0 border-2 ${
                            i === activeImage ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <PhotoPlaceholder className="aspect-[4/3]" />
            )}
          </section>

          <section className="mt-8">
            <SectionTitle>{t.propertyDetail.overviewTitle}</SectionTitle>
            {text.overview.map((paragraph) => (
              <p key={paragraph} className="mt-0 mb-3 text-sub">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mt-8">
            <SectionTitle>{t.propertyDetail.accessTitle}</SectionTitle>
            <ul className="m-0 pl-5 text-sub">
              {text.access.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <SectionTitle>{t.propertyDetail.specsTitle}</SectionTitle>
            <table className="data-table">
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{t.specLabels[row.key]}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        {/* 価格・問い合わせ */}
        <aside className="lg:sticky lg:top-4 lg:self-start flex flex-col gap-3">
          <div className="border border-line bg-mist p-5">
            <div className="text-xs text-muted mb-1">{t.priceLabels[property.kind]}</div>
            <PriceDisplay property={property} size="lg" />
            {text.priceNote && <p className="mt-2 mb-0 text-xs text-muted">{text.priceNote}</p>}
          </div>

          <a
            href={createMailtoHref(fmt(t.propertyDetail.inquireSubject, { title: text.title }))}
            className="btn-primary w-full"
          >
            {t.propertyDetail.inquire}
          </a>

          <div className="border border-line p-4 text-center">
            <div className="text-xs text-muted">{t.propertyDetail.callUs}</div>
            <a href={site.phoneHref} className="text-2xl font-bold no-underline text-accent">
              {site.phone}
            </a>
          </div>

          {property.externalUrl && text.externalLinkLabel && (
            <a href={property.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
              {text.externalLinkLabel}
              <span className="sr-only">{t.common.opensInNewTab}</span>
              <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          )}

          <LocaleLink to="/properties" className="text-sm text-center">
            {t.propertyDetail.backToList}
          </LocaleLink>
        </aside>
      </div>
    </div>
  );
}
