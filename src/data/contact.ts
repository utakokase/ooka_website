import { site } from './site';

/** 件名つきの mailto: リンクを作ります */
export function createMailtoHref(subject?: string): string {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${site.email}${query}`;
}
