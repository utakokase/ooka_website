import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-stone/70 bg-white/80 py-12">
      <div className="container-shell flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">應加合同会社 / Ooka LLC</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            〒165-0021 東京都中野区丸山一丁目3番2号
          </p>
          <p className="mt-1 text-sm text-muted">TEL: 03-6319-0573</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <Link className="transition hover:text-ink" to="/properties">
              物件情報
            </Link>
            <Link className="transition hover:text-ink" to="/company">
              会社情報
            </Link>
            <Link className="transition hover:text-ink" to="/contact">
              お問い合わせ
            </Link>
          </div>
          <p className="mt-4 text-xs tracking-[0.04em]">© 2026 Ooka LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
