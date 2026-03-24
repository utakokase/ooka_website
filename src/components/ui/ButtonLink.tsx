import { Link, type LinkProps } from 'react-router-dom';

interface ButtonLinkProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  const classes = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <Link className={`${classes} ${className}`.trim()} {...props}>
      {children}
    </Link>
  );
}
