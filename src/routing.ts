import type { Language } from './i18n';

export const sectionSlugs: Record<string, string> = {
  bio: 'bio', obras: 'works', colaboraciones: 'collaborations', texto: 'texts', prensa: 'press',
};
export const englishWorkSlugs: Record<string, string> = {
  reliquias: 'relics', 'la-propension': 'the-propensity',
  'la-complicidad-de-los-dupiones': 'the-complicity-of-the-dupions', trazas: 'traces',
  'fases-y-despliegue': 'unfolding-and-phases', derivas: 'drifts', transitos: 'transits',
  'tejido-conectivo': 'connective-tissue', ofrendas: 'offerings',
  'instalacion-tejido-conectivo': 'connective-tissue-installation',
  'tejido-conectivo-ii': 'connective-tissue-ii', 'luz-ambar': 'amber-light',
  'algol-eclipse': 'algol-eclipse', gravitacion: 'gravitation', avyakta: 'avyakta',
  'sirio-el-ojo-en-el-cielo': 'the-eye-in-the-sky', 'messier-m22-m30': 'messier-m22-m30',
  'cartografias-posibles': 'unpredictable-cartographies-for-changing-seas',
  'el-futuro-es-prehistoria': 'the-future-is-prehistory', intocable: 'untouchable',
  'destellos-de-naturaleza': 'glints-of-nature', 'paisajes-posibles': 'possible-landscapes',
  'entonces-la-proteccion': 'then-protection', 'los-amantes': 'the-lovers',
  'the-right-to-memory': 'the-right-to-memory',
};
const reverse = (map: Record<string, string>, value: string) => Object.keys(map).find(key => map[key] === value) ?? value;

export function normalizePage(page: string) {
  const parts = page.split('/').filter(Boolean);
  if (!parts.length) return '';
  parts[0] = reverse(sectionSlugs, parts[0]);
  if (parts[0] === 'obras' && parts[1]) {
    parts[1] = parts[1] === 'despliegue-y-fases' ? 'fases-y-despliegue' : reverse(englishWorkSlugs, parts[1]);
  }
  return parts.join('/');
}
export function localizedPage(page: string, lang: Language) {
  const parts = normalizePage(page).split('/').filter(Boolean);
  if (lang === 'en') {
    if (parts[0] === 'obras' && parts[1]) parts[1] = englishWorkSlugs[parts[1]] ?? parts[1];
    if (parts[0]) parts[0] = sectionSlugs[parts[0]] ?? parts[0];
  } else if (parts[0] === 'obras' && parts[1] === 'fases-y-despliegue') parts[1] = 'despliegue-y-fases';
  return parts.join('/');
}
export const localizedPath = (base: string, lang: Language, page = '', proposal = '') => {
  const localized = localizedPage(page, lang);
  return `${base}${proposal ? `${proposal}/` : ''}${lang === 'en' ? 'en/' : ''}${localized ? `${localized}/` : ''}`;
};

/** Public URLs are localized; templates use stable internal section and artwork keys. */
export function routeContext(pathname: string) {
  const base = import.meta.env.BASE_URL;
  const relative = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\//, '');
  const parts = relative.split('/').filter(Boolean);
  const proposal = /^Caminografico[12]$/.test(parts[0] ?? '') ? parts.shift()! : '';
  const lang: Language = parts[0] === 'en' ? 'en' : 'es';
  if (parts[0] === 'es' || parts[0] === 'en') parts.shift();
  const suffix = normalizePage(parts.join('/'));
  const href = (page = '', target: Language = lang) => localizedPath(base, target, page, proposal);
  return { proposal, variant: proposal === 'Caminografico2' ? 2 : 1, lang, suffix, href };
}
