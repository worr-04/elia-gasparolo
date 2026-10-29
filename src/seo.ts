import type { Language } from './i18n';
import { localizedPath } from './routing';

const descriptions: Record<Language, Record<string, string>> = {
  es: {
    '': 'Elia Gasparolo, artista visual argentina. Obras con biomateriales y textiles que exploran memoria, naturaleza y transformación.',
    bio: 'Biografía y statement de Elia Gasparolo: su práctica artística, investigación con biomateriales, trayectoria y currículum descargable.',
    obras: 'Explorá las obras de Elia Gasparolo: instalaciones, textiles y biomateriales. Fotografías, técnicas y detalles de cada proyecto.',
    colaboraciones: 'Proyectos de diseño y realización de Elia Gasparolo: escenografías, objetos, instalaciones y colaboraciones artísticas.',
    texto: 'Textos críticos y ensayos sobre la obra de Elia Gasparolo. Autores, publicaciones y documentos disponibles para leer y descargar.',
    prensa: 'Elia Gasparolo en la prensa: artículos, entrevistas y publicaciones sobre su obra y sus exposiciones.',
  },
  en: {
    '': 'Elia Gasparolo, Argentine visual artist. Artworks with biomaterials and textiles exploring memory, nature, and transformation.',
    bio: 'Elia Gasparolo’s biography and artist statement: her artistic practice, biomaterial research, career, and downloadable CV.',
    obras: 'Explore Elia Gasparolo’s artworks: installations, textiles, and biomaterials. Photographs, techniques, and details of each project.',
    colaboraciones: 'Design and fabrication projects by Elia Gasparolo: stage design, objects, installations, and artistic collaborations.',
    texto: 'Critical texts and essays on Elia Gasparolo’s work. Authors, publications, and documents available to read and download.',
    prensa: 'Elia Gasparolo in the press: articles, interviews, and publications about her artworks and exhibitions.',
  },
};

export const sectionDescription = (lang: Language, suffix: string) => descriptions[lang][suffix] ?? descriptions[lang][''];
export const canonicalPath = localizedPath;
// Escape markup delimiters before inserting JSON into an HTML script element.
export const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
