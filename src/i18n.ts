export const languages = ['es', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'es';

export const copy = {
  es: {
    navigation: {
      bio: 'Bio',
      statement: 'Statement',
      works: 'Obras',
      collaborations: 'Colaboraciones',
      text: 'Texto',
      press: 'Prensa',
    },
    home: {
      sliderLabel: 'Obras seleccionadas',
      previous: 'Imagen anterior',
      next: 'Imagen siguiente',
      empty: 'Próximamente',
      emptyDetail: 'Las obras seleccionadas aparecerán aquí.',
      works: [
        {
          title: 'Tejido Conectivo',
          year: '2024',
          details: [
            'Instalación biotextil sitio específico',
            'Muestra: Ofrendas',
            '500 × 500 × 500 cm',
            'Museo del Agua, junio–agosto 2024',
          ],
        },
        {
          title: 'Collar de Mandarinas',
          details: [
            'Biotextil en base a gelatina',
            'Ingredientes: cáscaras de mandarina, gelatina, agua, glicerina vegetal',
            'Medidas: 50 × 30 cm',
          ],
        },
        {
          title: 'La Propensión',
          year: '2022–2023',
          details: [
            'Instalación. Aluminio, madera y seda de Bombyx mori, proveniente de un ciclo completo de metamorfosis',
            '120 × 100 × 100 cm',
            'Peso: 7 kg',
            '2022–2023',
          ],
        },
        {
          title: 'Reliquias',
          year: '2022–2023',
          details: [
            'Piezas realizadas en madera y restos de telas de seda elaboradas por Bombyx mori',
            '40 × 50 cm',
            '2022–2023',
          ],
        },
        {
          title: 'Intocable',
          year: '2020–2022',
          details: [
            'Serie: Móviles',
            '120 × 100 × 100 cm',
            'Móvil compuesto por criaturas de aluminio reciclado con alas de papel sujetas a motor a través de tensores de acero.',
            '2020–2022',
          ],
        },
      ],
    },
  },
  en: {
    navigation: {
      bio: 'Bio',
      statement: 'Statement',
      works: 'Works',
      collaborations: 'Collaborations',
      text: 'Text',
      press: 'Press',
    },
    home: {
      sliderLabel: 'Selected works',
      previous: 'Previous image',
      next: 'Next image',
      empty: 'Coming soon',
      emptyDetail: 'Selected works will appear here.',
      works: [
        {
          title: 'Connective Tissue (Tejido Conectivo)',
          year: '2024',
          details: [
            'Site-specific biotextile installation',
            'Exhibition: Offerings (Ofrendas)',
            '500 × 500 × 500 cm',
            'Museo del Agua, June–August 2024',
          ],
        },
        {
          title: 'Tangerine Necklace',
          details: [
            'Gelatin-based biotextile',
            'Ingredients: Tangerine peels, gelatin, water, vegetable glycerin',
            'Dimensions: 50 × 30 cm',
          ],
        },
        {
          title: 'The Propensity',
          year: '2022–2023',
          details: [
            'Installation. Aluminum, wood, and Bombyx mori silk resulting from a complete metamorphic cycle',
            'Dimensions: 120 × 100 × 100 cm',
            'Weight: 7 kg',
            '2022–2023',
          ],
        },
        {
          title: 'Relics',
          year: '2022–2023',
          details: [
            'Pieces made of wood and remnants of silk fabric produced by Bombyx mori',
            'Dimensions: 40 × 50 cm',
            '2022–2023',
          ],
        },
        {
          title: 'Intocable',
          year: '2020–2022',
          details: [
            'Series: Móviles',
            'Dimensions: 120 × 100 × 100 cm',
            'Mobile composed of creatures made from recycled aluminum, with paper wings attached to a motor by means of steel tension cables.',
            '2020–2022',
          ],
        },
      ],
    },
  },
} satisfies Record<Language, unknown>;

export function isLanguage(value: string | undefined): value is Language {
  return languages.includes(value as Language);
}
