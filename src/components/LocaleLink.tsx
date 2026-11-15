import { Link, NavLink, type LinkProps, type NavLinkProps } from 'react-router-dom';
import { useI18n } from '../i18n/context';

/** 今の言語のURLに自動で合わせる Link（'/properties' → '/zh/properties'） */
export function LocaleLink({ to, ...rest }: Omit<LinkProps, 'to'> & { to: string }) {
  const { path } = useI18n();
  return <Link to={path(to)} {...rest} />;
}

export function LocaleNavLink({ to, ...rest }: Omit<NavLinkProps, 'to'> & { to: string }) {
  const { path } = useI18n();
  return <NavLink to={path(to)} {...rest} />;
}
