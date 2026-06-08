import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/properties', label: '物件情報' },
  { to: '/company', label: '会社情報' },
  { to: '/contact', label: 'お問い合わせ' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full bg-ink flex items-center justify-center text-paper text-sm font-serif font-semibold">
            應
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium text-ink">應加合同会社</p>
            <p className="text-[10px] text-muted tracking-wider">Ooka LLC</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-px bg-ink transition-all ${open ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-px bg-ink mt-1.5 transition-all ${open ? '-rotate-45 -translate-y-0.5' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="text-sm text-muted hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
