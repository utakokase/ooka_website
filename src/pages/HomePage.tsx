import { LocaleLink } from '../components/LocaleLink';
import { AccessMap, CompanyFactsTable, SectionTitle } from '../components/page-parts';
import { PropertyCard } from '../components/PropertyCard';
import { PhotoPlaceholder } from '../components/property-parts';
import { createMailtoHref } from '../data/contact';
import { featuredProperty, publishedProperties } from '../data/properties';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';

export function HomePage() {
  const { t } = useI18n();
  usePageTitle();

  const featuredText = t.properties[featuredProperty.slug];
  const heroImage = featuredProperty.images[0];

  return (
    <>
      {/* ヒーロー：注目物件の写真＋会社の紹介 */}
      <section className="bg-mist">
        <div className="container-page py-6 grid gap-6 md:grid-cols-2 items-stretch">
          <LocaleLink
            to={featuredProperty.pagePath ?? `/properties/${featuredProperty.slug}`}
            className="relative block min-h-[260px] md:min-h-[340px] bg-placeholder"
            aria-label={featuredText.title}
          >
            {heroImage ? (
              <img
                src={heroImage}
                alt=""
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <PhotoPlaceholder className="absolute inset-0" />
            )}
            <span className="absolute left-0 bottom-0 bg-accent text-white px-3.5 py-1.5 text-[13px] font-bold">
              {t.propertyKinds[featuredProperty.kind]}
              <span className="ml-3">{featuredText.area}</span>
            </span>
          </LocaleLink>

          <div className="flex flex-col gap-3.5 justify-center">
            <h1 className="m-0 text-[24px] sm:text-[30px] leading-[1.4] font-bold">
              {t.home.heroTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="m-0 text-sub">{t.home.heroLead}</p>
            <div className="flex flex-wrap gap-2.5 mt-1.5">
              <LocaleLink to="/properties" className="btn-primary">
                {t.home.heroCtaProperties}
              </LocaleLink>
              <a href={createMailtoHref(t.contact.generalSubject)} className="btn-outline">
                {t.home.heroCtaEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 掲載中の物件 */}
      <section className="container-page pt-8 pb-2">
        <SectionTitle aside={fmt(t.home.listingsCount, { count: publishedProperties.length })}>
          {t.home.listingsTitle}
        </SectionTitle>
        <div className="grid gap-[18px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {publishedProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      {/* ご相談いただける内容 */}
      <section className="container-page pt-8 pb-2">
        <SectionTitle>{t.home.servicesTitle}</SectionTitle>
        <ul className="m-0 p-0 list-none grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-line">
          {t.home.services.map((service) => (
            <li key={service.title} className="p-[18px] border-r border-b border-line">
              <h3 className="m-0 mb-1 text-base font-bold">{service.title}</h3>
              <p className="m-0 text-sm text-sub">{service.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 会社概要・アクセス */}
      <section className="container-page pt-8 pb-10 grid gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle>{t.home.companyTitle}</SectionTitle>
          <CompanyFactsTable />
          <p className="mt-3 mb-0 text-sm">
            <LocaleLink to="/company">{t.home.companyMore}</LocaleLink>
          </p>
        </div>
        <div>
          <SectionTitle>{t.home.accessTitle}</SectionTitle>
          <AccessMap />
        </div>
      </section>
    </>
  );
}
