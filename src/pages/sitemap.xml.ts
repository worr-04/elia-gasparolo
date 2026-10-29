import type { APIRoute } from 'astro';
import { languages } from '../i18n';
import { works } from '../works-content';
import { localizedPath } from '../routing';

export const prerender = true;

const base = import.meta.env.BASE_URL;
const sections = ['', 'bio/', 'obras/', 'colaboraciones/', 'texto/', 'prensa/'];

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
})[character] ?? character);

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Configure site in astro.config.mjs');
  const urls = [
    ...languages.flatMap((lang) => sections.map((section) => localizedPath(base, lang, section))),
    ...languages.flatMap((lang) => works.map((work) => localizedPath(base, lang, `obras/${work.slug}`))),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
