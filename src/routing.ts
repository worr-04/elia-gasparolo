import type { Language } from './i18n';

/** Keep all navigation inside the selected graphic proposal. Assets retain BASE_URL. */
export function routeContext(pathname: string) {
  const base = import.meta.env.BASE_URL;
  const relative = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
  const parts = relative.split('/').filter(Boolean);
  const proposal = /^Caminografico[12]$/.test(parts[0] ?? '') ? parts.shift()! : '';
  const lang: Language = parts[0] === 'en' ? 'en' : 'es';
  if (parts[0] === 'es' || parts[0] === 'en') parts.shift();
  const suffix = parts.join('/');
  const href = (page = '', target: Language = lang) => `${base}${proposal ? `${proposal}/` : ''}${proposal && target === 'es' ? '' : `${target}/`}${page ? `${page.replace(/^\/|\/$/g, '')}/` : ''}`;
  return { proposal, variant: proposal === 'Caminografico2' ? 2 : 1, lang, suffix, href };
}
