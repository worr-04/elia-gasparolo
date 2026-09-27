import type { APIRoute } from 'astro';
import { languages } from '../i18n';
import { works } from '../works-content';

export const prerender = true;

const site = 'https://worr-04.github.io';
const base = '/elia-gasparolo/';
const sections = ['', 'bio/', 'obras/', 'colaboraciones/', 'texto/', 'prensa/'];

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
})[character] ?? character);

export const GET: APIRoute = () => {
  const urls = [
    ...languages.flatMap((lang) => sections.map((section) => `${base}${lang}/${section}`)),
    ...languages.flatMap((lang) => works.map((work) => `${base}${lang}/obras/${work.slug}/`)),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
