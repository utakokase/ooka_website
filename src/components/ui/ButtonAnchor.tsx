import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: ReactNode;
}

export function ButtonAnchor({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonAnchorProps) {
  const classes = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a className={`${classes} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
