import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-serif font-light text-4xl text-ink mb-6">ページが見つかりません</h1>
      <Link to="/" className="text-sm text-accent hover:underline">← トップページへ戻る</Link>
    </div>
  );
}
