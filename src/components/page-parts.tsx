import type { ReactNode } from 'react';
import { createMailtoHref } from '../data/contact';
import { site } from '../data/site';
import { useI18n } from '../i18n/context';

/** 緑の下線つきの見出し */
export function SectionTitle({
  children,
  as: Tag = 'h2',
  aside,
}: {
  children: ReactNode;
  as?: 'h1' | 'h2';
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-brand pb-2 mb-[18px]">
      <Tag className={`m-0 font-bold ${Tag === 'h1' ? 'text-[26px]' : 'text-[22px]'}`}>{children}</Tag>
      {aside && <div className="text-[13px] text-muted">{aside}</div>}
    </div>
  );
}

/** 会社の基本情報の表（トップページと会社概要ページで共通） */
export function CompanyFactsTable({ full = false }: { full?: boolean }) {
  const { t } = useI18n();
  const labels = t.company.factLabels;
  const facts = t.company.facts;

  const rows: { label: string; value: ReactNode }[] = [
    { label: labels.tradeName, value: facts.tradeName },
    { label: labels.representative, value: facts.representative },
    { label: labels.established, value: facts.established },
  ];
  if (site.showLicense) rows.push({ label: labels.license, value: t.common.licenseNumber });
  if (full) {
    rows.push(
      { label: labels.address, value: facts.address },
      {
        label: labels.phone,
        value: (
          <>
            <a href={site.phoneHref}>{site.phone}</a>
            <span className="text-muted">{t.common.mobileSuffix}</span>
            <span className="mx-1.5 text-muted">／</span>
            <a href={site.landlineHref}>{site.landline}</a>
            <span className="text-muted">{t.common.landlineSuffix}</span>
          </>
        ),
      },
      {
        label: labels.email,
        value: <a href={`mailto:${site.email}`}>{site.email}</a>,
      },
    );
  }
  rows.push(
    { label: labels.associations, value: facts.associations },
    { label: labels.partners, value: facts.partners },
    { label: labels.banks, value: facts.banks },
  );

  return (
    <table className="data-table">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Googleマップの埋め込み（APIキー不要） */
export function AccessMap({
  className = '',
  query = site.mapQuery,
  title,
  address,
}: {
  className?: string;
  /** 地図で検索する住所（省略時は本社） */
  query?: string;
  title?: string;
  /** 地図の下に出す住所（null で非表示） */
  address?: string | null;
}) {
  const { t, locale } = useI18n();
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&hl=${locale}&output=embed`;
  const caption = address === undefined ? t.company.facts.address : address;
  return (
    <div className={className}>
      <iframe
        title={title ?? t.company.mapTitle}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[240px] border border-line block"
      />
      {caption && <p className="mt-3 mb-0 text-sm">{caption}</p>}
    </div>
  );
}

/** 電話・メール・対応言語の表（お問い合わせページとTSUCHIYAビルのページで共通） */
export function ContactBlock({ subject, showAddress = false }: { subject: string; showAddress?: boolean }) {
  const { t } = useI18n();
  return (
    <div>
      <table className="data-table">
        <tbody>
          <tr>
            <th scope="row">{t.contact.phoneTitle}</th>
            <td>
              <a href={site.phoneHref} className="text-2xl font-bold no-underline text-accent">
                {site.phone}
              </a>
              <span className="ml-2 text-[13px] text-muted">
                {t.contact.landlineLabel} <a href={site.landlineHref}>{site.landline}</a>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">{t.contact.emailTitle}</th>
            <td>
              <a href={createMailtoHref(subject)} className="font-bold break-all">
                {site.email}
              </a>
            </td>
          </tr>
          {showAddress && (
            <tr>
              <th scope="row">{t.contact.addressTitle}</th>
              <td>{t.company.facts.address}</td>
            </tr>
          )}
          {site.showBusinessHours && (
            <tr>
              <th scope="row">{t.contact.hoursTitle}</th>
              <td>
                {t.common.businessHours}
                <span className="ml-3">{t.common.closedDays}</span>
              </td>
            </tr>
          )}
          <tr>
            <th scope="row">{t.contact.languagesTitle}</th>
            <td>{t.contact.languages}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
