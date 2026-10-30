import type { Language } from './i18n';

export const workCatalogues: Record<string, Record<Language, string>> = {
  transitos: {
    es: 'catalogos/transitos-elia-gasparolo.pdf',
    en: 'catalogos/transits-elia-gasparolo-en.pdf',
  },
};

export const externalVideoCovers: Record<string, string> = {
  transitos: 'video-covers/transitos.webp',
  'tejido-conectivo': 'video-covers/tejido-conectivo.webp',
  intocable: 'video-covers/intocable.webp',
  rabdomante: 'video-covers/rabdomante-cdee3a41.webp',
};

export const externalVideoDescriptions: Record<string, Record<Language, string>> = {
  rabdomante: { es: 'Link a video de Rabdomante', en: 'Link to Rabdomante video' },
};

export const externalWorkVideos: Record<string, {
  url: string;
  image: string;
  description: Record<Language, string>;
}[]> = {
  "transitos": [
    {
      "url": "https://www.youtube.com/watch?v=wedKseATKuc",
      "image": "video-covers/transitos.webp",
      "description": {
        "es": "Link a video Tránsitos",
        "en": "Link to Transits video"
      }
    }
  ],
  "tejido-conectivo": [
    {
      "url": "https://www.youtube.com/watch?v=bcjYyaFcn40",
      "image": "video-covers/tejido-conectivo.webp",
      "description": {
        "es": "Link a video Tejido Conectivo",
        "en": "Link to Connective Tissue video"
      }
    }
  ],
  "ofrendas": [
    {
      "url": "https://www.youtube.com/watch?v=Bo26BVSoc2g",
      "image": "works/ofrendas/04.webp",
      "description": {
        "es": "Link a video y fotoperformance de Ofrendas",
        "en": "Link to the Ofrendas video and photoperformance"
      }
    },
    {
      "url": "https://www.youtube.com/watch?v=VmqnA92l37I",
      "image": "works/ofrendas/performance-sonora.webp",
      "description": {
        "es": "Link a video Performance Sonora con el Ensamble de Serruchos en la Muestra Ofrendas",
        "en": "Link to the video of the sound performance with the Ensamble de Serruchos at Ofrendas exhibition"
      }
    }
  ],
  "instalacion-tejido-conectivo": [
    {
      "url": "https://cifra.com/project/connective-tissue",
      "image": "works/instalacion-tejido-conectivo/02.webp",
      "description": {
        "es": "Link a video de Instalación Tejido Conectivo",
        "en": "Link to Connective Tissue Installation"
      }
    }
  ],
  "el-futuro-es-prehistoria": [
    {
      "url": "https://www.youtube.com/watch?v=7ng2Dkmq4LM",
      "image": "video-covers/el-futuro-es-prehistoria.webp",
      "description": {
        "es": "Link a video El Futuro es Prehistoria",
        "en": "Link to the video of El Futuro es Prehistoria"
      }
    }
  ],
  "destellos-de-naturaleza": [
    {
      "url": "https://youtu.be/1bxx6rTAkKY?si=W8HHBtVQNg_pupSv",
      "image": "works/destellos-de-naturaleza/01.webp",
      "description": {
        "es": "Link a video de Destellos de la Naturaleza",
        "en": "Link to the Glints of Nature video"
      }
    }
  ],
  "intocable": [
    {
      "url": "https://www.youtube.com/shorts/Whn_DSRuhQY",
      "image": "video-covers/intocable.webp",
      "description": {
        "es": "Link a video de Intocable",
        "en": "Link to Intocable video"
      }
    }
  ]
};
