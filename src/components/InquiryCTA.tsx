import { ButtonLink } from './ui/ButtonLink';

interface InquiryCTAProps {
  title?: string;
  description?: string;
}

export function InquiryCTA({
  title = '物件のご相談・売却相談を承ります',
  description = '投資用不動産の検討から保有不動産のご相談まで、落ち着いて対応いたします。',
}: InquiryCTAProps) {
  return (
    <section className="py-10 sm:py-12">
      <div className="container-shell">
        <div className="surface-card overflow-hidden bg-navy text-white">
          <div className="grid gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink className="bg-white text-navy hover:bg-canvas" to="/contact">
                お問い合わせ
              </ButtonLink>
              <ButtonLink
                className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
                to="/company"
                variant="secondary"
              >
                会社概要
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
