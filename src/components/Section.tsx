import type { ReactNode } from 'react';

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 ${className}`.trim()}>
      <div className="container-shell">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl sm:mb-12">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title mt-3">{title}</h2> : null}
            {description ? <p className="section-copy mt-4">{description}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
