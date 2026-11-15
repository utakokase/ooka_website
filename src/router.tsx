import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { DEFAULT_LOCALE, ENABLED_LOCALES } from './i18n/config';
import { LocaleProvider } from './i18n/LocaleProvider';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { TsuchiyaPage } from './pages/TsuchiyaPage';
import { NotFoundPage } from './pages/NotFoundPage';

/** どの言語でも共通のページ構成 */
const pageRoutes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'properties', element: <PropertiesPage /> },
  { path: 'properties/:slug', element: <PropertyDetailPage /> },
  { path: 'tsuchiya-building', element: <TsuchiyaPage /> },
  { path: 'company', element: <CompanyPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

/**
 * 日本語は / 、そのほかの言語は /zh/... /en/... のURLになります。
 * 公開する言語は src/i18n/config.ts の ENABLED_LOCALES で決まります。
 */
export const router = createBrowserRouter(
  ENABLED_LOCALES.map((locale) => ({
    path: locale === DEFAULT_LOCALE ? '/' : `/${locale}`,
    element: (
      <LocaleProvider locale={locale}>
        <MainLayout />
      </LocaleProvider>
    ),
    children: pageRoutes,
  })),
);
