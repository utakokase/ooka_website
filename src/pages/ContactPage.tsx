import { contactEmail, createMailtoHref } from '../data/contact';

export function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <p className="eyebrow mb-4">Contact</p>
      <h1 className="font-serif font-light text-ink leading-tight mb-6"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        お問い合わせ
      </h1>
      <p className="text-muted text-sm leading-8 max-w-lg mb-14">
        物件のご相談、売却のご相談、資産形成についてのご質問など、どうぞお気軽にご連絡ください。
        日本語・中国語・英語でご対応いたします。
      </p>

      <div className="border-t border-ink/10 pt-12 grid md:grid-cols-2 gap-16">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <p className="eyebrow mb-3">メール</p>
            <a href={createMailtoHref()} className="font-serif text-xl text-ink hover:text-accent transition-colors">
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">電話</p>
            <a href="tel:0363190573" className="font-serif text-xl text-ink hover:text-accent transition-colors">
              03-6319-0573
            </a>
          </div>
          <div>
            <p className="eyebrow mb-3">所在地</p>
            <p className="text-sm text-muted leading-8">
              〒165-0021<br />
              東京都中野区丸山一丁目3番2号
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">対応言語</p>
            <p className="text-sm text-muted">日本語 · 中国語（普通話） · 英語</p>
          </div>
        </div>

        {/* Quick contact */}
        <div>
          <p className="eyebrow mb-5">メールで問い合わせる</p>
          <div className="space-y-3">
            {[
              '物件購入について相談したい',
              '賃貸物件について問い合わせたい',
              '不動産投資について相談したい',
              '売却を検討している',
            ].map((subject) => (
              <a
                key={subject}
                href={createMailtoHref(subject)}
                className="flex items-center justify-between border border-ink/10 rounded-xl px-5 py-4 hover:border-accent/40 hover:bg-warm transition-all group"
              >
                <span className="text-sm text-ink">{subject}</span>
                <span className="text-accent text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
