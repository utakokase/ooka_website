import { AccessMap, CompanyFactsTable, SectionTitle } from '../components/page-parts';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';

export function CompanyPage() {
  const { t } = useI18n();
  usePageTitle(t.company.title);

  return (
    <div className="container-page pt-8 pb-12">
      <SectionTitle as="h1">{t.company.title}</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 mb-10">
        <p className="m-0 text-lg font-bold leading-relaxed">{t.company.lead}</p>
        <p className="m-0 text-sub">{t.company.body}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <SectionTitle>{t.company.factsTitle}</SectionTitle>
          <CompanyFactsTable full />
        </section>
        <section>
          <SectionTitle>{t.company.accessTitle}</SectionTitle>
          <AccessMap />
        </section>
      </div>

      <section className="mt-10">
        <SectionTitle>{t.company.teamTitle}</SectionTitle>
        <ul className="m-0 p-0 list-none grid gap-4 md:grid-cols-3">
          {t.company.team.map((member) => (
            <li key={member.profile} className="border border-line p-5 flex flex-col gap-1.5">
              <h3 className="m-0 text-base font-bold">
                {member.role}
                {member.name && <span className="ml-2">{member.name}</span>}
              </h3>
              <p className="m-0 text-[13px] text-brand font-bold">
                <span className="sr-only">{t.company.languagesLabel}: </span>
                {member.languages}
              </p>
              <p className="m-0 text-sm text-sub">{member.profile}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
