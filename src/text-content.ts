import type { Language } from './i18n';

export type TextItem = {
  title: Record<Language, string>;
  author: string;
  year: string;
  image: string;
  files: Record<Language, string>;
};

export const textContent: Record<Language, { title: string; intro: string; readLabel: string; languageLabel: string }> = {
  es: {
    title: 'Texto',
    intro: 'Ensayos, entrevistas y escritos sobre las obras y los procesos de Elia Gasparolo.',
    readLabel: 'Leer texto',
    languageLabel: 'También disponible en',
  },
  en: {
    title: 'Text',
    intro: 'Essays, interviews, and writings on Elia Gasparolo’s works and processes.',
    readLabel: 'Read text',
    languageLabel: 'Also available in',
  },
};

export const textItems: TextItem[] = [
  {
    title: { es: 'Transitar lo inaprehensible', en: 'Transiting the Ungraspable' },
    author: 'María Carolina Baulo',
    year: '2021',
    image: 'destellos',
    files: { es: 'texts/transitar-lo-inaprehensible-es.pdf', en: 'texts/transiting-the-ungraspable-en.pdf' },
  },
  {
    title: { es: 'Memoria fragmentada', en: 'Fragmented Memory' },
    author: 'María Carolina Baulo',
    year: '2019',
    image: 'memoria-fragmentada',
    files: { es: 'texts/memoria-fragmentada-es.pdf', en: 'texts/fragmented-memory-en.pdf' },
  },
  {
    title: { es: 'Ofrendas', en: 'Offerings' },
    author: 'María Carolina Baulo',
    year: '2025',
    image: 'ofrendas',
    files: { es: 'texts/ofrendas-es.pdf', en: 'texts/offerings-en.pdf' },
  },
  {
    title: { es: 'Reliquias de paz', en: 'Relics of Peace' },
    author: 'María Carolina Baulo',
    year: '2023',
    image: 'reliquias',
    files: { es: 'texts/reliquias-de-paz-es.pdf', en: 'texts/relics-of-peace-en.pdf' },
  },
];
