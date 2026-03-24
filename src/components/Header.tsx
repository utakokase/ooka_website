import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'ホーム' },
  { to: '/properties', label: '物件情報' },
  { to: '/company', label: '会社情報' },
  { to: '/contact', label: 'お問い合わせ' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/60 bg-canvas/85 backdrop-blur-md">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            className="flex min-w-0 items-center gap-3 text-ink transition hover:text-navy"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-stone bg-white text-sm font-bold">
              應加
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-wideish">應加合同会社</p>
              <p className="truncate text-xs text-muted">Ooka LLC</p>
            </div>
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone bg-white text-ink lg:hidden"
            aria-label="メニューを開く"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="text-lg">{isOpen ? '×' : '≡'}</span>
          </button>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-white text-navy shadow-sm' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-stone/60 bg-white/95 px-5 py-4 lg:hidden">
          <div className="container-shell flex flex-col gap-2 px-0">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-mist text-navy' : 'text-muted hover:bg-canvas hover:text-ink'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
