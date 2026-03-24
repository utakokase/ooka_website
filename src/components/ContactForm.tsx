export function ContactForm() {
  return (
    <form className="surface-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="name">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-2xl border border-stone bg-canvas px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-2xl border border-stone bg-canvas px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
            placeholder="example@ooka-llc.jp"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="subject">
            件名
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full rounded-2xl border border-stone bg-canvas px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
            placeholder="物件に関するご相談"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
            ご相談内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full rounded-3xl border border-stone bg-canvas px-4 py-3 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
            placeholder="ご希望条件、ご売却相談、投資用不動産のご相談などをご記入ください。"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end border-t border-stone pt-6">
        <button className="btn-primary" type="submit">
          送信する
        </button>
      </div>
    </form>
  );
}
