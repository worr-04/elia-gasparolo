import type { Language } from './i18n';

export type PressItem = {
  publication: string;
  title: string;
  year?: string;
  href: string;
  image: string;
  supplementaryImages?: string[];
};

export const pressContent: Record<Language, { title: string; visitLabel: string }> = {
  es: { title: 'Prensa', visitLabel: 'Ver publicación' },
  en: { title: 'Press', visitLabel: 'View publication' },
};

export const pressItems: PressItem[] = [
  { publication: 'OHLALÁ!', title: 'El arte está de moda (y viceversa): 5 muestras imperdibles que lo demuestran', year: '2024', href: 'https://www.somosohlala.com/espectaculos/el-arte-esta-de-moda-y-viceversa-5-muestras-imperdibles-que-lo-demuestran-nid19072024', image: '01' },
  { publication: 'Tiempo Argentino', title: '“Bioartesanías: el futuro ya llegó”: una muestra de arte con materiales sustentables', year: '2026', href: 'https://www.tiempoar.com.ar/ta_article/bioartesanias-futuro-llego-muestra-arte-materiales-sustentables/', image: '02' },
  { publication: 'Infobae', title: 'Guía de Arte y Cultura: semana del 13 al 20 de marzo de 2026', year: '2026', href: 'https://www.infobae.com/cultura/agenda-cultura/2026/03/13/guia-de-arte-y-cultura-semana-del-13-al-20-de-marzo-de-2026/', image: '03' },
  { publication: 'The Praxis Journal', title: 'Biomateriales: la agricultura del futuro', href: 'https://thepraxisjournal.com/biomateriales-la-agricultura-del-futuro/', image: '04' },
  { publication: 'Agenda Porteña', title: '“Bioartesanías: el futuro ya llegó”, una muestra que une oficios tradicionales y biotecnología', year: '2025', href: 'https://xn--agendaportea-khb.com.ar/bioartesanias-en-el-museo-jose-hernandez/', image: '05' },
  { publication: 'L’Officiel Argentina', title: 'Elia Gasparolo en Galería Praxis', year: '2021', href: 'https://www.lofficiel.com.ar/Arte%20y%20cultura/elia-gasparolo', image: '06' },
  { publication: 'Sculpture Magazine', title: 'Transitar lo inaprehensible: una conversación con Elia Gasparolo', href: 'https://sculpturemagazine.art/transitar-lo-inaprensible-una-conversacion-con-elia-gasparolo/', image: '07' },
  { publication: 'Arte-Online', title: 'Biotextiles con memoria de Elia Gasparolo', href: 'https://www.arte-online.net/Notas/Biotextiles-con-memoria-de-Elia-Gasparolo', image: '08' },
  { publication: 'La Nación', title: 'Elia Gasparolo: “Me apasiona ver hasta dónde puedo exigirles a los materiales”', year: '2020', href: 'https://www.pressreader.com/argentina/la-nacion/20201010/282136408878537', image: '09', supplementaryImages: ['092', '093'] },
  { publication: 'Revista Ñ', title: 'Ritual y biotextiles para una nueva piel', year: '2024', href: 'https://www.clarin.com/revista-n/elia-gasparolo-ritual-biotextiles-nueva-piel_0_M4AAJraFS1.html', image: '10' },
  { publication: 'El Planeta Urbano', title: 'Moda y arte: descubrí la colección sustentable y sin huella de carbono que asombra a Buenos Aires', year: '2024', href: 'https://elplanetaurbano.com/2024/08/moda-y-arte-descubri-la-coleccion-sustentable-y-sin-huella-de-carbono-que-asombra-a-buenos-aires/', image: '11' },
  { publication: 'Bienal SACO', title: '“El futuro es prehistoria”: la propuesta neoarqueológica de Elia Gasparolo y Santiago Rey', year: '2020', href: 'https://bienalsaco.com/2021/09/23/el-futuro-es-prehistoria/', image: '12' },
  { publication: 'OHLALÁ!', title: '10 muestras de arte para ver gratis durante abril en Buenos Aires', year: '2026', href: 'https://www.somosohlala.com/espectaculos/10-muestras-de-arte-para-ver-gratis-durante-abril-en-buenos-aires-nid01042026', image: '13' },
  { publication: 'OHLALÁ!', title: '8 muestras de arte para ver en febrero en Buenos Aires', year: '2026', href: 'https://www.somosohlala.com/espectaculos/8-muestras-de-arte-para-ver-en-febrero-en-buenos-aires-nid07022026', image: '14' },
  { publication: 'Arte Conectados', title: 'Fragilidad y Fortaleza', year: '2026', href: 'https://www.arteconectados.com/en-cartel/fragilidad-y-fortaleza', image: '15' },
];
