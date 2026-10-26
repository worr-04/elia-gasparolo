import type { Language } from './i18n';

export type Work = {
  id: string;
  slug: string;
  title: Record<Language, string>;
  images: string[];
  gallery?: { type: 'image' | 'video'; src: string }[];
  videos?: { src: string; poster: string; title: Record<Language, string>; width: number; height: number }[];
};

export const works: Work[] = [
  {
    "id": "01",
    "slug": "reliquias",
    "title": {
      "es": "Reliquias de la serie Tránsitos",
      "en": "Relics from the Transits Series"
    },
    "images": [
      "works/reliquias/01.webp",
      "works/reliquias/02.webp",
      "works/reliquias/03.webp",
      "works/reliquias/04.webp",
      "works/reliquias/05.webp",
      "works/reliquias/06.webp",
      "works/reliquias/07.webp",
      "works/reliquias/08.webp",
      "works/reliquias/09.webp"
    ]
  },
  {
    "id": "02",
    "slug": "la-propension",
    "title": {
      "es": "La Propensión",
      "en": "The Propensity"
    },
    "images": [
      "works/la-propension/01.webp",
      "works/la-propension/02.webp",
      "works/la-propension/03.webp",
      "works/la-propension/04.webp",
      "works/la-propension/05.webp",
      "works/la-propension/06.webp"
    ]
  },
  {
    "id": "03",
    "slug": "la-complicidad-de-los-dupiones",
    "title": {
      "es": "La Complicidad de los Dupiones",
      "en": "The Complicity of the Dupions"
    },
    "images": [
      "works/la-complicidad-de-los-dupiones/01.webp",
      "works/la-complicidad-de-los-dupiones/02.webp",
      "works/la-complicidad-de-los-dupiones/03.webp",
      "works/la-complicidad-de-los-dupiones/04.webp",
      "works/la-complicidad-de-los-dupiones/05.webp",
      "works/la-complicidad-de-los-dupiones/06.webp",
      "works/la-complicidad-de-los-dupiones/07.webp",
      "works/la-complicidad-de-los-dupiones/08.webp",
      "works/la-complicidad-de-los-dupiones/09.webp",
      "works/la-complicidad-de-los-dupiones/10.webp",
      "works/la-complicidad-de-los-dupiones/11.webp"
    ]
  },
  {
    "id": "04",
    "slug": "trazas",
    "title": {
      "es": "Trazas",
      "en": "Traces"
    },
    "images": [
      "works/trazas/01.webp",
      "works/trazas/02.webp",
      "works/trazas/03.webp",
      "works/trazas/04.webp",
      "works/trazas/05.webp",
      "works/trazas/06.webp",
      "works/trazas/07.webp"
    ]
  },
  {
    "id": "05",
    "slug": "fases-y-despliegue",
    "title": {
      "es": "Fases y Despliegue",
      "en": "Phases and Unfolding"
    },
    "images": [
      "works/fases-y-despliegue/01.webp",
      "works/fases-y-despliegue/02.webp",
      "works/fases-y-despliegue/03.webp",
      "works/fases-y-despliegue/04.webp",
      "works/fases-y-despliegue/05.webp"
    ]
  },
  {
    "id": "06",
    "slug": "derivas",
    "title": {
      "es": "Derivas",
      "en": "Drifts from the Transits Series"
    },
    "images": [
      "works/derivas/01.webp",
      "works/derivas/02.webp",
      "works/derivas/03.webp",
      "works/derivas/04.webp"
    ]
  },
  {
    "id": "07",
    "slug": "transitos",
    "title": {
      "es": "Tránsitos",
      "en": "Transits"
    },
    "images": [
      "works/transitos/01.webp",
      "works/transitos/02.webp",
      "works/transitos/03.webp",
      "works/transitos/04.webp",
      "works/transitos/05.webp",
      "works/transitos/06.webp",
      "works/transitos/07.webp",
      "works/transitos/08.webp",
      "works/transitos/09.webp"
    ]
  },
  {
    "id": "08",
    "slug": "tejido-conectivo",
    "title": {
      "es": "Tejido Conectivo",
      "en": "Connective Tissue"
    },
    "images": [
      "works/tejido-conectivo/01.webp",
      "works/tejido-conectivo/02.webp",
      "works/tejido-conectivo/03.webp",
      "works/tejido-conectivo/04.webp",
      "works/tejido-conectivo/05.webp",
      "works/tejido-conectivo/06.webp",
      "works/tejido-conectivo/07.webp",
      "works/tejido-conectivo/08.webp",
      "works/tejido-conectivo/09.webp",
      "works/tejido-conectivo/10.webp",
      "works/tejido-conectivo/11.webp",
      "works/tejido-conectivo/12.webp",
      "works/tejido-conectivo/13.webp",
      "works/tejido-conectivo/14.webp",
      "works/tejido-conectivo/15.webp",
      "works/tejido-conectivo/16.webp"
    ]
  },
  {
    "id": "09",
    "slug": "ofrendas",
    "title": {
      "es": "Ofrendas",
      "en": "Offerings"
    },
    "images": [
      "works/ofrendas/02.webp",
      "works/ofrendas/03.webp",
      "works/ofrendas/04.webp",
      "works/ofrendas/01.webp",
      "works/ofrendas/05.webp",
      "works/ofrendas/06.webp",
      "works/ofrendas/07.webp",
      "works/ofrendas/08.webp",
      "works/ofrendas/09.webp",
      "works/ofrendas/10.webp"
    ],
    "videos": [
      {
        "src": "works/ofrendas/ofrenda-lavanda.mp4",
        "poster": "works/ofrendas/ofrenda-lavanda-poster.jpg",
        "title": {
          "es": "Ofrenda Lavanda",
          "en": "Lavender Offering"
        },
        "width": 1920,
        "height": 1080
      },
      {
        "src": "works/ofrendas/ofrenda-malbec.mp4",
        "poster": "works/ofrendas/ofrenda-malbec-poster.jpg",
        "title": {
          "es": "Ofrenda Malbec",
          "en": "Malbec Offering"
        },
        "width": 1920,
        "height": 1080
      },
      {
        "src": "works/ofrendas/ofrenda-mandarina.mp4",
        "poster": "works/ofrendas/ofrenda-mandarina-poster.jpg",
        "title": {
          "es": "Ofrenda Mandarina",
          "en": "Tangerine Offering"
        },
        "width": 1920,
        "height": 1080
      }
    ],
    "gallery": [
      {
        "type": "image",
        "src": "works/ofrendas/02.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/03.webp"
      },
      {
        "type": "video",
        "src": "works/ofrendas/ofrenda-malbec.mp4"
      },
      {
        "type": "image",
        "src": "works/ofrendas/04.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/01.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/05.webp"
      },
      {
        "type": "video",
        "src": "works/ofrendas/ofrenda-lavanda.mp4"
      },
      {
        "type": "image",
        "src": "works/ofrendas/06.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/07.webp"
      },
      {
        "type": "video",
        "src": "works/ofrendas/ofrenda-mandarina.mp4"
      },
      {
        "type": "image",
        "src": "works/ofrendas/08.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/09.webp"
      },
      {
        "type": "image",
        "src": "works/ofrendas/10.webp"
      }
    ]
  },
  {
    "id": "10",
    "slug": "instalacion-tejido-conectivo",
    "title": {
      "es": "Instalación Tejido Conectivo",
      "en": "Connective Tissue Installation"
    },
    "images": [
      "works/instalacion-tejido-conectivo/01.webp",
      "works/instalacion-tejido-conectivo/02.webp",
      "works/instalacion-tejido-conectivo/03.webp"
    ]
  },
  {
    "id": "11",
    "slug": "tejido-conectivo-ii",
    "title": {
      "es": "Tejido Conectivo II",
      "en": "Connective Tissue II"
    },
    "images": [
      "works/tejido-conectivo-ii/01.webp",
      "works/tejido-conectivo-ii/02.webp",
      "works/tejido-conectivo-ii/03.webp",
      "works/tejido-conectivo-ii/04.webp",
      "works/tejido-conectivo-ii/05.webp",
      "works/tejido-conectivo-ii/06.webp",
      "works/tejido-conectivo-ii/07.webp",
      "works/tejido-conectivo-ii/08.webp",
      "works/tejido-conectivo-ii/09.webp",
      "works/tejido-conectivo-ii/10.webp"
    ]
  },
  {
    "id": "12",
    "slug": "luz-ambar",
    "title": {
      "es": "Luz Ámbar",
      "en": "Amber Light"
    },
    "images": [
      "works/luz-ambar/01.webp",
      "works/luz-ambar/03.webp",
      "works/luz-ambar/04.webp"
    ]
  },
  {
    "id": "13",
    "slug": "algol-eclipse",
    "title": {
      "es": "Algol + Eclipse",
      "en": "Algol + Eclipse"
    },
    "images": [
      "works/algol-eclipse/01.webp",
      "works/algol-eclipse/02.webp",
      "works/algol-eclipse/03.webp",
      "works/algol-eclipse/04.webp",
      "works/algol-eclipse/05.webp",
      "works/algol-eclipse/06.webp"
    ]
  },
  {
    "id": "14",
    "slug": "gravitacion",
    "title": {
      "es": "Gravitación",
      "en": "Gravitation"
    },
    "images": [
      "works/gravitacion/01.webp",
      "works/gravitacion/02.webp",
      "works/gravitacion/03.webp",
      "works/gravitacion/04.webp",
      "works/gravitacion/05.webp",
      "works/gravitacion/06.webp",
      "works/gravitacion/07.webp"
    ]
  },
  {
    "id": "15",
    "slug": "avyakta",
    "title": {
      "es": "Avyakta",
      "en": "Avyakta"
    },
    "images": [
      "works/avyakta/01.webp",
      "works/avyakta/02.webp",
      "works/avyakta/03.webp"
    ]
  },
  {
    "id": "16",
    "slug": "sirio-el-ojo-en-el-cielo",
    "title": {
      "es": "El Ojo en el Cielo",
      "en": "The Eye in the Sky"
    },
    "images": [
      "works/sirio-el-ojo-en-el-cielo/01.webp",
      "works/sirio-el-ojo-en-el-cielo/02.webp",
      "works/sirio-el-ojo-en-el-cielo/03.webp"
    ]
  },
  {
    "id": "17",
    "slug": "messier-m22-m30",
    "title": {
      "es": "Messier",
      "en": "Messier"
    },
    "images": [
      "works/messier-m22-m30/01.webp",
      "works/messier-m22-m30/02.webp",
      "works/messier-m22-m30/03.webp",
      "works/messier-m22-m30/04.webp",
      "works/messier-m22-m30/05.webp"
    ]
  },
  {
    "id": "18",
    "slug": "cartografias-posibles",
    "title": {
      "es": "Cartografías impredecibles para mares cambiantes",
      "en": "Unpredictable Cartographies for Changing Seas"
    },
    "images": [
      "works/cartografias-posibles/01.webp",
      "works/cartografias-posibles/02.webp",
      "works/cartografias-posibles/03.webp"
    ]
  },
  {
    "id": "19",
    "slug": "el-futuro-es-prehistoria",
    "title": {
      "es": "El Futuro es Prehistoria",
      "en": "The Future is Prehistory"
    },
    "images": [
      "works/el-futuro-es-prehistoria/01.webp",
      "works/el-futuro-es-prehistoria/02.webp",
      "works/el-futuro-es-prehistoria/03.webp"
    ]
  },
  {
    "id": "20",
    "slug": "intocable",
    "title": {
      "es": "Intocable",
      "en": "Untouchable"
    },
    "images": [
      "works/intocable/01.webp",
      "works/intocable/02.webp",
      "works/intocable/03.webp",
      "works/intocable/04.webp",
      "works/intocable/05.webp",
      "works/intocable/06.webp",
      "works/intocable/07.webp",
      "works/intocable/08.webp",
      "works/intocable/09.webp",
      "works/intocable/10.webp",
      "works/intocable/11.webp"
    ]
  },
  {
    "id": "21",
    "slug": "destellos-de-naturaleza",
    "title": {
      "es": "Destellos de la Naturaleza",
      "en": "Glints of Nature"
    },
    "images": [
      "works/destellos-de-naturaleza/01.webp",
      "works/destellos-de-naturaleza/02.webp",
      "works/destellos-de-naturaleza/03.webp",
      "works/destellos-de-naturaleza/04.webp"
    ]
  },
  {
    "id": "22",
    "slug": "paisajes-posibles",
    "title": {
      "es": "Paisajes Posibles",
      "en": "Possible Landscapes"
    },
    "images": [
      "works/paisajes-posibles/01.webp",
      "works/paisajes-posibles/02.webp",
      "works/paisajes-posibles/03.webp",
      "works/paisajes-posibles/04.webp",
      "works/paisajes-posibles/05.webp"
    ]
  },
  {
    "id": "23",
    "slug": "entonces-la-proteccion",
    "title": {
      "es": "Entonces la Protección",
      "en": "Then Protection"
    },
    "images": [
      "works/entonces-la-proteccion/01.webp",
      "works/entonces-la-proteccion/02.webp",
      "works/entonces-la-proteccion/03.webp",
      "works/entonces-la-proteccion/04.webp",
      "works/entonces-la-proteccion/05.webp"
    ]
  },
  {
    "id": "24",
    "slug": "los-amantes",
    "title": {
      "es": "Los Amantes",
      "en": "The Lovers"
    },
    "images": [
      "works/los-amantes/01.webp",
      "works/los-amantes/02.webp",
      "works/los-amantes/03.webp",
      "works/los-amantes/04.webp"
    ]
  },
  {
    "id": "25",
    "slug": "the-right-to-memory",
    "title": {
      "es": "El Derecho a la Memoria",
      "en": "The Right to Memory"
    },
    "images": [
      "works/the-right-to-memory/01.webp",
      "works/the-right-to-memory/02.webp",
      "works/the-right-to-memory/03.webp",
      "works/the-right-to-memory/04.webp",
      "works/the-right-to-memory/05.webp",
      "works/the-right-to-memory/06.webp",
      "works/the-right-to-memory/07.webp",
      "works/the-right-to-memory/08.webp",
      "works/the-right-to-memory/09.webp",
      "works/the-right-to-memory/10.webp",
      "works/the-right-to-memory/11.webp",
      "works/the-right-to-memory/12.webp"
    ]
  }
];
