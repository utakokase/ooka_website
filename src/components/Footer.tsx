import { site } from '../data/site';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';
import { LocaleLink } from './LocaleLink';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-brand text-brand-soft text-[13px]">
      <div className="container-page py-6 flex flex-wrap justify-between gap-4">
        <div>
          <div className="font-bold text-base text-white">{t.common.companyName}</div>
          <div>
            <span className="mr-3">{t.company.facts.address}</span>
            <span className="mr-3">TEL {site.phone}</span>
            <span>{site.email}</span>
          </div>
          {site.showLicense && <div>{fmt(t.common.license, { license: t.common.licenseNumber })}</div>}
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 self-end">
          <nav aria-label={t.nav.footerLabel} className="flex flex-wrap gap-4">
            <LocaleLink to="/properties" className="text-brand-soft hover:text-white">
              {t.nav.properties}
            </LocaleLink>
            <LocaleLink to="/tsuchiya-building" className="text-brand-soft hover:text-white">
              {t.nav.tsuchiya}
            </LocaleLink>
            <LocaleLink to="/company" className="text-brand-soft hover:text-white">
              {t.nav.company}
            </LocaleLink>
            <LocaleLink to="/contact" className="text-brand-soft hover:text-white">
              {t.nav.contact}
            </LocaleLink>
          </nav>
          <div>{fmt(t.footer.copyright, { year: new Date().getFullYear() })}</div>
        </div>
      </div>
    </footer>
  );
}
