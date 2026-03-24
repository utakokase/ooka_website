import { ContactForm } from '../components/ContactForm';
import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { contactEmail } from '../data/contact';

const contactDetails = [
  { label: '会社名', value: '應加合同会社 / Ooka LLC' },
  { label: '住所', value: '〒165-0021 東京都中野区丸山一丁目3番2号' },
  { label: 'TEL', value: '03-6319-0573' },
  { label: 'メール', value: 'ookagoudou@gmail.com' },
  { label: '対応言語', value: '日本語 / English / 中文' },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        description="物件の詳細確認、投資向けのご相談、保有不動産に関するご相談など、お気軽にご連絡ください。"
      />

      <Section className="pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ContactForm />
          <aside className="surface-card p-6 sm:p-8">
            <p className="text-lg font-semibold text-ink">連絡先情報</p>
            <dl className="mt-6 grid gap-5">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-semibold text-ink">{detail.label}</dt>
                  <dd className="mt-1 text-sm leading-7 text-muted">
                    {detail.label === 'メール' ? (
                      <a className="transition hover:text-navy" href={`mailto:${contactEmail}`}>
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
