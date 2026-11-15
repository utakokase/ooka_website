import { useState } from 'react';
import { site } from '../data/site';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LocaleLink, LocaleNavLink } from './LocaleLink';

export function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: '/properties', label: t.nav.properties },
    { to: '/tsuchiya-building', label: t.nav.tsuchiya },
    { to: '/company', label: t.nav.company },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* 上の細い帯：免許番号・対応言語 */}
      <div className="bg-brand text-brand-soft text-xs">
        <div className="container-page py-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span>
            {site.showLicense && <>{fmt(t.common.license, { license: t.common.licenseNumber })} ／ </>}
            {t.common.association}
          </span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:inline">{t.common.supportedLanguages}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <header className="border-b border-line bg-white">
        <div className="container-page py-3.5 flex items-center justify-between gap-3 md:gap-4">
          <LocaleLink
            to="/"
            className="flex items-center gap-3 min-w-0 no-underline text-ink hover:text-ink"
            aria-label={t.header.homeLinkLabel}
          >
            <span
              aria-hidden="true"
              className="w-11 h-11 shrink-0 bg-brand text-white flex items-center justify-center font-bold text-[22px]"
            >
              {t.common.logoMark}
            </span>
            <span>
              <span className="block text-xl font-bold tracking-[0.04em]">{t.common.companyName}</span>
              <span className="hidden sm:block text-xs text-muted">{t.header.tagline}</span>
            </span>
          </LocaleLink>

          <nav aria-label={t.nav.mainLabel} className="hidden lg:flex gap-0.5 text-sm">
            {navItems.map((item) => (
              <LocaleNavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2.5 font-bold no-underline whitespace-nowrap ${isActive ? 'text-accent' : 'text-brand'}`
                }
              >
                {item.label}
              </LocaleNavLink>
            ))}
          </nav>

          <div className="hidden md:block md:ml-auto lg:ml-0 shrink-0 text-right">
            <div className="text-xs text-muted whitespace-nowrap">{t.common.phoneLabel}</div>
            <a
              href={site.phoneHref}
              className="block whitespace-nowrap text-[24px] xl:text-[26px] font-bold no-underline text-accent tracking-[0.02em] leading-tight"
            >
              {site.phone}
            </a>
            {site.showBusinessHours && (
              <div className="text-xs text-muted">
                {t.common.businessHours}
                <span className="ml-3">{t.common.closedDays}</span>
              </div>
            )}
          </div>

          <div className="lg:hidden flex shrink-0 gap-2">
            <a
              href={site.phoneHref}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-accent text-white text-xs font-bold no-underline hover:text-white"
              aria-label={`${t.common.phoneLabel} ${site.phone}`}
            >
              {t.common.callShort}
            </a>
            <button
              type="button"
              className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 border border-line"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.common.menuClose : t.common.menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                aria-hidden="true"
                className={`block w-5 h-0.5 bg-brand transition-transform ${menuOpen ? 'translate-y-1 rotate-45' : ''}`}
              />
              <span
                aria-hidden="true"
                className={`block w-5 h-0.5 bg-brand transition-transform ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-line bg-white">
            <nav aria-label={t.nav.mainLabel} className="container-page py-2 flex flex-col">
              {navItems.map((item) => (
                <LocaleNavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 font-bold no-underline border-b border-line text-brand"
                >
                  {item.label}
                </LocaleNavLink>
              ))}
              <a href={site.phoneHref} className="py-3 font-bold no-underline text-accent text-lg">
                TEL {site.phone}
              </a>
              <LanguageSwitcher className="py-3" tone="light" />
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
