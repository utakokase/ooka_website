import { Link } from 'react-router-dom';
import { contactEmail } from '../data/contact';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-serif text-2xl text-ink">應加合同会社</p>
          <p className="text-xs text-muted mt-1 tracking-widest">Ooka Limited Liability Company</p>
          <p className="text-sm text-muted mt-4 leading-7">
            〒165-0021 東京都中野区丸山一丁目3番2号<br />
            TEL: 03-6319-0573<br />
            {contactEmail}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <nav className="flex gap-5 text-sm text-muted">
            <Link to="/properties" className="hover:text-ink transition-colors">物件情報</Link>
            <Link to="/company" className="hover:text-ink transition-colors">会社情報</Link>
            <Link to="/contact" className="hover:text-ink transition-colors">お問い合わせ</Link>
          </nav>
          <p className="text-xs text-faint">© {new Date().getFullYear()} 應加合同会社</p>
        </div>
      </div>
    </footer>
  );
}
