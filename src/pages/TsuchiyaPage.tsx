import { LocaleLink } from '../components/LocaleLink';
import { AccessMap, SectionTitle } from '../components/page-parts';
import { PhotoPlaceholder } from '../components/property-parts';
import { createMailtoHref } from '../data/contact';
import { properties } from '../data/properties';
import { site } from '../data/site';
import { tsuchiyaBuilding } from '../data/tsuchiya';
import { usePageTitle } from '../hooks/usePageTitle';
import { LOCALE_META } from '../i18n/config';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';

const sectionIds = {
  overview: 'about',
  vacancy: 'vacancy',
  access: 'access',
  contact: 'contact',
} as const;

export function TsuchiyaPage() {
  const { t, locale } = useI18n();
  const b = t.tsuchiya;
  usePageTitle(b.pageTitle);

  const images = properties.find((p) => p.slug === tsuchiyaBuilding.slug)?.images ?? [];
  const [year, month] = tsuchiyaBuilding.vacancyUpdated.split('-').map(Number);
  const updated = new Intl.DateTimeFormat(LOCALE_META[locale].intl, { year: 'numeric', month: 'long' }).format(
    new Date(year, month - 1, 1),
  );

  const facts = [
    { label: b.factLabels.address, value: b.facts.address },
    { label: b.factLabels.station, value: b.facts.station },
    { label: b.factLabels.scale, value: b.facts.scale },
    { label: b.factLabels.owner, value: b.facts.owner },
  ];
  const sectionNav = [
    { id: sectionIds.overview, label: b.overviewTitle },
    { id: sectionIds.vacancy, label: b.vacancyTitle },
    { id: sectionIds.access, label: b.accessTitle },
    { id: sectionIds.contact, label: b.contactTitle },
  ];

  return (
    <>
      <div className="container-page pt-5">
        <nav aria-label={t.propertyDetail.breadcrumbLabel} className="text-[13px]">
          <ol className="m-0 p-0 list-none flex flex-wrap gap-1.5 text-muted">
            <li>
              <LocaleLink to="/">{t.nav.home}</LocaleLink>
              <span aria-hidden="true"> ›</span>
            </li>
            <li aria-current="page">{b.title}</li>
          </ol>
        </nav>
      </div>

      {/* ビルの顔：写真＋基本情報 */}
      <section className="bg-mist mt-4">
        <div className="container-page py-6 grid gap-6 md:grid-cols-2 items-stretch">
          <div className="relative min-h-[260px] md:min-h-[340px]">
            {images[0] ? (
              <img src={images[0]} alt={b.photoAlt} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <PhotoPlaceholder className="absolute inset-0" />
            )}
            <span className="absolute left-0 bottom-0 bg-owned text-white px-3.5 py-1.5 text-[13px] font-bold">
              {t.propertyKinds.owned}
            </span>
          </div>

          <div className="flex flex-col gap-3.5 justify-center">
            <div>
              <p className="m-0 text-sm font-bold text-brand">{b.subtitle}</p>
              <h1 className="m-0 text-[28px] sm:text-[34px] font-bold leading-tight">{b.title}</h1>
            </div>
            <p className="m-0 text-sub">{b.lead}</p>
            <table className="data-table bg-white">
              <tbody>
                {facts.map((f) => (
                  <tr key={f.label}>
                    <th scope="row">{f.label}</th>
                    <td>{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap gap-2.5">
              <a href={`#${sectionIds.vacancy}`} className="btn-primary">
                {b.ctaVacancy}
              </a>
              <a href={`#${sectionIds.contact}`} className="btn-outline">
                {b.ctaContact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ページ内の目次 */}
      <nav aria-label={b.sectionNavLabel} className="border-b border-line bg-white">
        <div className="container-page">
        <ul className="m-0 p-0 list-none flex flex-wrap -ml-4">
          {sectionNav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="inline-flex items-center min-h-[48px] px-4 font-bold no-underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>

      <div className="container-page pb-12">
        {/* ビルについて */}
        <section id={sectionIds.overview} className="pt-8 scroll-mt-4">
          <SectionTitle>{b.overviewTitle}</SectionTitle>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div>
              {b.overview.map((paragraph) => (
                <p key={paragraph} className="mt-0 mb-3 text-sub">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-line p-4">
                <div className="text-[13px] text-muted">{b.stationStatLabel}</div>
                <div className="text-[28px] font-bold text-brand leading-tight">{b.stationStatValue}</div>
              </div>
              <div className="border border-line p-4">
                <h3 className="m-0 mb-2 text-[15px] font-bold">{b.nearbyTitle}</h3>
                <ul className="m-0 p-0 list-none flex flex-wrap gap-1.5">
                  {b.nearby.map((place) => (
                    <li key={place} className="text-[13px] bg-mist border border-line px-2 py-0.5">
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* テナント募集 */}
        <section id={sectionIds.vacancy} className="pt-8 scroll-mt-4">
          <SectionTitle aside={fmt(b.vacancyUpdated, { date: updated })}>{b.vacancyTitle}</SectionTitle>
          <div
            className={`border-2 p-5 ${tsuchiyaBuilding.hasVacancy ? 'border-accent bg-white' : 'border-line bg-mist'}`}
          >
            <p className="m-0 text-lg font-bold">
              {tsuchiyaBuilding.hasVacancy ? b.vacancyOpen : b.vacancyNone}
            </p>
            <p className="mt-1 mb-0 text-sub">{b.vacancyNote}</p>
          </div>
        </section>

        {/* アクセス */}
        <section id={sectionIds.access} className="pt-8 scroll-mt-4">
          <SectionTitle>{b.accessTitle}</SectionTitle>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mt-0 mb-3 font-bold">{b.facts.station}</p>
              <h3 className="m-0 mb-2 text-[15px] font-bold">{b.directionsTitle}</h3>
              <ol className="m-0 p-0 list-none flex flex-col gap-2">
                {b.directions.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-7 h-7 bg-brand text-white font-bold text-sm flex items-center justify-center"
                    >
                      {i + 1}
                    </span>
                    <span className="text-sub">{step}</span>
                  </li>
                ))}
              </ol>
              <h3 className="mt-5 mb-1 text-[15px] font-bold">{b.parkingTitle}</h3>
              <p className="m-0 text-sub">{b.parking}</p>
            </div>
            <AccessMap query={tsuchiyaBuilding.mapQuery} title={b.mapTitle} address={b.facts.address} />
          </div>
        </section>

        {/* お問い合わせ */}
        <section id={sectionIds.contact} className="pt-8 scroll-mt-4">
          <SectionTitle>{b.contactTitle}</SectionTitle>
          <p className="mt-0 mb-4 text-sub">{b.contactLead}</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <table className="data-table self-start">
              <tbody>
                <tr>
                  <th scope="row">{t.contact.phoneTitle}</th>
                  <td>
                    <a href={site.phoneHref} className="text-2xl font-bold no-underline text-accent">
                      {site.phone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{t.contact.emailTitle}</th>
                  <td>
                    <a href={createMailtoHref(b.inquiries[0].subject)} className="font-bold break-all">
                      {site.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{t.contact.languagesTitle}</th>
                  <td>{t.contact.languages}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <h3 className="m-0 mb-1 text-[15px] font-bold">{t.contact.quickTitle}</h3>
              <p className="mt-0 mb-2 text-[13px] text-muted">{t.contact.quickNote}</p>
              <ul className="m-0 p-0 list-none border-t border-line">
                {b.inquiries.map((item) => (
                  <li key={item.subject} className="border-b border-line">
                    <a
                      href={createMailtoHref(item.subject)}
                      className="flex items-center justify-between gap-3 min-h-[48px] px-1 no-underline font-bold"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
