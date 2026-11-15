import { SectionTitle } from '../components/page-parts';
import { createMailtoHref } from '../data/contact';
import { site } from '../data/site';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';

export function ContactPage() {
  const { t } = useI18n();
  usePageTitle(t.contact.title);

  const infoRows = [
    {
      label: t.contact.phoneTitle,
      value: (
        <a href={site.phoneHref} className="text-2xl font-bold no-underline text-accent">
          {site.phone}
        </a>
      ),
    },
    {
      label: t.contact.emailTitle,
      value: (
        <a href={createMailtoHref(t.contact.generalSubject)} className="text-lg font-bold break-all">
          {site.email}
        </a>
      ),
    },
    { label: t.contact.addressTitle, value: t.company.facts.address },
    { label: t.contact.languagesTitle, value: t.contact.languages },
  ];

  return (
    <div className="container-page pt-8 pb-12">
      <SectionTitle as="h1">{t.contact.title}</SectionTitle>
      <p className="mt-0 mb-6 text-sub max-w-3xl">{t.contact.lead}</p>

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <table className="data-table">
            <tbody>
              {infoRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
              {site.showBusinessHours && (
                <tr>
                  <th scope="row">{t.contact.hoursTitle}</th>
                  <td>
                    {t.common.businessHours}
                    <span className="ml-3">{t.common.closedDays}</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="m-0 mb-1 text-lg font-bold">{t.contact.quickTitle}</h2>
          <p className="mt-0 mb-3 text-[13px] text-muted">{t.contact.quickNote}</p>
          <ul className="m-0 p-0 list-none border-t border-line">
            {t.contact.subjects.map((subject) => (
              <li key={subject} className="border-b border-line">
                <a
                  href={createMailtoHref(subject)}
                  className="flex items-center justify-between gap-3 min-h-[48px] px-1 no-underline font-bold"
                >
                  <span>{subject}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
