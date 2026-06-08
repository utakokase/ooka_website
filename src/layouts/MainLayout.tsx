import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-paper text-ink">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
