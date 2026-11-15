import { LocaleLink } from '../components/LocaleLink';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';

export function NotFoundPage() {
  const { t } = useI18n();
  usePageTitle(t.notFound.title);

  return (
    <div className="container-page py-20 text-center">
      <p className="m-0 text-sm text-muted">404</p>
      <h1 className="mt-1 mb-3 text-2xl font-bold">{t.notFound.title}</h1>
      <p className="mt-0 mb-6 text-sub">{t.notFound.body}</p>
      <LocaleLink to="/" className="btn-primary">
        {t.notFound.back}
      </LocaleLink>
    </div>
  );
}
