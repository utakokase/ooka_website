import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useI18n } from '../i18n/context';

export function MainLayout() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">
        {t.common.skipToContent}
      </a>
      <ScrollRestoration />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
