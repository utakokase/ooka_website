import { ContactBlock, SectionTitle } from '../components/page-parts';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';

export function ContactPage() {
  const { t } = useI18n();
  usePageTitle(t.contact.title);

  return (
    <div className="container-page pt-8 pb-12">
      <SectionTitle as="h1">{t.contact.title}</SectionTitle>
      <p className="mt-0 mb-6 text-sub max-w-3xl">{t.contact.lead}</p>
      <div className="max-w-3xl">
        <ContactBlock subject={t.contact.generalSubject} showAddress />
      </div>
    </div>
  );
}
