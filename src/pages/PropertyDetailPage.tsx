import { Navigate, useParams } from 'react-router-dom';
import { InquiryCTA } from '../components/InquiryCTA';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { ButtonAnchor } from '../components/ui/ButtonAnchor';
import { ButtonLink } from '../components/ui/ButtonLink';
import { getPropertyBySlug } from '../data/properties';

export function PropertyDetailPage() {
  const { slug = '' } = useParams();
  const property = getPropertyBySlug(slug);

  if (!property) {
    return <Navigate replace to="/properties" />;
  }

  const pageTitle =
    property.slug === 'prime-parks-shinagawa' ? (
      <>
        プライムパークス品川
        <br />
        ザ・タワー
      </>
    ) : (
      property.title
    );

  return (
    <>
      <PageHero
        eyebrow={property.category}
        title={pageTitle}
        description={property.tagline}
        actions={
          <>
            <ButtonLink to="/contact">
              この物件について問い合わせる
            </ButtonLink>
            <ButtonLink to="/properties" variant="secondary">
              一覧に戻る
            </ButtonLink>
          </>
        }
      />

      <Section className="pb-8 pt-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
          <div className="grid min-w-0 gap-6">
            <div className="surface-card overflow-hidden">
              <img
                src={property.gallery[0]}
                alt={property.title}
                className="aspect-[16/10] w-full max-w-full object-cover"
              />
            </div>
            {property.gallery.length > 1 ? (
              <div className="surface-card min-w-0 overflow-hidden p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">フォトギャラリー</p>
                  <p className="text-xs text-muted">横にスクロールしてご覧いただけます</p>
                </div>
                <div className="flex max-w-full gap-4 overflow-x-auto pb-2">
                  {property.gallery.slice(1).map((image, index) => (
                    <div
                      key={image}
                      className="w-[220px] shrink-0 overflow-hidden rounded-[20px] border border-stone bg-canvas sm:w-[250px]"
                    >
                      <img
                        src={image}
                        alt={`${property.title} photo ${index + 2}`}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="grid min-w-0 gap-6">
            <div className="surface-card p-6 sm:p-8">
              <p className="eyebrow">Price / Conditions</p>
              <h2
                className={`mt-3 text-3xl font-bold ${
                  property.priceHighlight ? 'text-navy sm:text-4xl' : 'text-ink'
                }`}
              >
                {property.priceInfo.value}
              </h2>
              <p className="mt-2 text-sm font-semibold text-muted">{property.priceInfo.label}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{property.priceInfo.note}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {property.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-stone px-3 py-1 text-xs font-medium text-muted"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <ButtonAnchor
                className="mt-8 w-full"
                href="/contact"
              >
                問い合わせる
              </ButtonAnchor>
              {property.externalLink ? (
                <ButtonAnchor
                  className="mt-3 w-full"
                  href={property.externalLink.url}
                  rel="noreferrer"
                  target="_blank"
                  variant="secondary"
                >
                  {property.externalLink.label}
                </ButtonAnchor>
              ) : null}
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="eyebrow">Overview</p>
              <p className="mt-3 text-lg font-semibold text-ink">{property.summary}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Overview"
        title="物件概要"
        description="主要条件を簡潔に整理しています。"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="surface-card p-6 sm:p-8">
            <div className="grid gap-6">
              {property.overview.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="surface-card p-6 sm:p-8">
            <p className="text-lg font-semibold text-ink">アクセス</p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              {property.access.map((item) => (
                <li key={item} className="rounded-2xl border border-stone bg-canvas px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {property.floorPlan ? (
        <Section
          eyebrow="Floor Plan"
          title={property.floorPlan.title}
          description="縦長の間取り画像を追加できるスペースです。"
        >
          <div className="surface-card p-6 sm:p-8">
            <div className="flex min-h-[540px] items-center justify-center rounded-[24px] border border-dashed border-stone bg-canvas text-center">
              <div className="max-w-xs px-6 py-10">
                <p className="text-sm font-semibold text-ink">{property.floorPlan.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{property.floorPlan.note}</p>
              </div>
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="Details"
        title="詳細情報"
        description="仕様・管理・費用条件を一覧でご確認いただけます。"
      >
        <div className="surface-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            {property.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-start justify-between gap-4 border-b border-stone px-6 py-5 even:bg-canvas/60 md:px-8"
              >
                <dt className="text-sm font-semibold text-ink">{spec.label}</dt>
                <dd className="text-right text-sm leading-7 text-muted">{spec.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <InquiryCTA
        title="条件の確認、内見希望、投資判断のご相談まで承ります"
        description="資料請求、内見調整、収益性や運用方針のご相談など、具体的な検討段階に合わせてご案内いたします。"
      />
    </>
  );
}
