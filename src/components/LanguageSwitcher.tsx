import { Link, useLocation } from 'react-router-dom';
import { ENABLED_LOCALES, LOCALE_META, localePrefix } from '../i18n/config';
import { useI18n } from '../i18n/context';

/** 公開中の言語が2つ以上のときだけ表示されます */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, t } = useI18n();
  const { pathname } = useLocation();

  if (ENABLED_LOCALES.length < 2) return null;

  const currentPrefix = localePrefix(locale);
  const rest = currentPrefix && pathname.startsWith(currentPrefix)
    ? pathname.slice(currentPrefix.length) || '/'
    : pathname;

  return (
    <nav aria-label={t.common.languageSwitcher} className={`flex ${className}`}>
      {ENABLED_LOCALES.map((l) => {
        const prefix = localePrefix(l);
        const href = rest === '/' ? prefix || '/' : `${prefix}${rest}`;
        const active = l === locale;
        return (
          <Link
            key={l}
            to={href}
            lang={LOCALE_META[l].htmlLang}
            aria-current={active ? 'true' : undefined}
            className={`px-2.5 py-1 no-underline border border-white/40 -ml-px first:ml-0 ${
              active ? 'bg-white text-brand font-bold' : 'text-white hover:bg-white/10 hover:text-white'
            }`}
          >
            {LOCALE_META[l].label}
          </Link>
        );
      })}
    </nav>
  );
}
