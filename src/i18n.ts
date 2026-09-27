export const languages = ['es', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'es';

export const copy = {
  es: {
    navigation: {
      bio: 'Bio + Statement',
      works: 'Obras',
      collaborations: 'Diseño y Realización',
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
          year: '2023',
          details: [
            'Instalación. Aluminio, madera y seda de Bombyx mori, proveniente de un ciclo completo de metamorfosis',
            '120 × 100 × 100 cm',
            'Peso: 7 kg',
            '2022–2023',
          ],
        },
        {
          title: 'Reliquias',
          year: '2023',
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
    bioStatement: {
      title: 'Bio + Statement',
      statementTitle: 'Statement',
      bioTitle: 'Bio',
      imageAlt: 'Elia Gasparolo junto a una instalación móvil',
      statement: [
        'Replicar, hilvanar, atesorar y atestiguar. Aprender observando esos procesos vitales de transformación de la naturaleza. Replicar esas formas que descubro. Hilvanar la espera propia de los ciclos, las estaciones, etapas, fases, transmutaciones y desprendimientos. Atestiguar y reelaborar experimentando, visibilizando la red que enlaza las partes honrándola, mostrando esas multiplicidades de tramas, decodificando su lenguaje.',
        'Mi práctica artística se despliega como una meditación sobre la memoria de la materia y los vínculos sensibles que nos unen al ecosistema. Entiendo la intersección entre naturaleza, tecnología y textil no como una suma de partes, sino como un territorio habitable donde acompaño los procesos biológicos buscando la mínima intervención, eligiendo gestos deliberadamente lentos que respetan la escala de lo vivo.',
        'En este hacer pausado, cultivo organismos simbióticos y transformo biomateriales en ofrendas; realizo hilo a mano y lo tiño con pigmentos naturales para luego registrar, a través del bordado, las cartografías celestes de las ofrendas. Estas acciones funcionan como lenguajes de traducción entre la tierra y el cielo, documentando la aparente fragilidad de los ciclos naturales y la capacidad de la materia para capturar lo invisible.',
        'Bajo esta mirada, mis soportes se vuelven un escenario donde el gesto, el error y la variación son bienvenidos como parte del devenir orgánico. Las formas emergen lentamente: constelaciones, cúmulos y nebulosas aparecen como imágenes de un tiempo profundo, permitiendo que un tiempo íntimo se expanda hacia lo público. A través de mis instalaciones y objetos textiles, invito a observar la impermanencia y la potencia silenciosa de la metamorfosis, buscando destacar la belleza de lo efímero y abrir espacios de reflexión sobre nuestra propia escala en coexistencia con los ecosistemas que habitamos.',
      ],
      bio: [
        'Nacida en Mendoza, Argentina (1978), vive y trabaja en Buenos Aires. Su formación incluye el cursado de la Licenciatura en Artes Visuales en la Universidad Nacional de las Artes (UNA), complementada con estudios especializados en las Clínicas de Bioestética, Arte y Ambientalismo en MUNTREF dictada por Pablo La Padula y su formación profesional como Traductora Pública.',
        'Su trayectoria cuenta con reconocimientos como el Premio Fondo Metropolitano (2025), la preselección para el Salón Nacional de Artes Visuales en el Palais de Glace (2025), como también su participación en Bienal SACO (2021). Entre las residencias se destacan la Bienal SACO en Chile (2021) y CIMA Residency en Catamarca.',
        'Su obra ha circulado por instituciones y plataformas internacionales, destacándose sus muestras individuales Ofrendas en Die Grünen, Viena (2025) y en el Palacio de las Aguas Corrientes (Buenos Aires, 2024). A nivel colectivo ha participado en exposiciones en el Museo de Arte Decorativo de Berlín, Maker Faire Rome (Italia), Colección Fortabat, Centro Cultural Kirchner, Museo Nacional de Arte Decorativo, Galería Praxis, Museo de Arte Popular José Hernández, Galería Cecilia Caballero, entre otras.',
      ],
      cvLabel: 'Descargar CV (PDF)',
    },
  },
  en: {
    navigation: {
      bio: 'Bio & Statement',
      works: 'Works',
      collaborations: 'Design & Realization',
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
    bioStatement: {
      title: 'Bio & Statement',
      statementTitle: 'Statement',
      bioTitle: 'Bio',
      imageAlt: 'Elia Gasparolo with a mobile installation',
      statement: [
        'Replicate, baste, treasure, and bear witness. Learn by observing these vital processes of transformation in nature. Replicate the forms I discover. Baste the waiting inherent to cycles, seasons, stages, phases, transmutations, and shedding. Bear witness and rework through experimentation, making visible the network that connects its parts, honoring it, revealing its multiple layers and patterns, and decoding its language.',
        'My artistic practice unfolds as a meditation on the memory of matter and the sensitive connections that bind us to the ecosystem. I understand the intersection of nature, technology, and textiles not as a sum of separate parts, but as a habitable territory in which I accompany biological processes while seeking minimal intervention, choosing deliberately slow gestures that respect the scale of living things.',
        'Within this slow-paced practice, I cultivate symbiotic organisms and transform biomaterials into offerings. I make thread by hand and dye it with natural pigments, then use embroidery to record the celestial cartographies of these offerings. These actions function as languages of translation between earth and sky, documenting the apparent fragility of natural cycles and the capacity of matter to capture the invisible.',
        'From this perspective, my supports become a stage where gesture, error, and variation are welcomed as part of organic becoming. Forms emerge slowly: constellations, clusters, and nebulae appear as images of deep time, allowing intimate time to expand into the public realm. Through my installations and textile objects, I invite viewers to contemplate impermanence and the silent power of metamorphosis, seeking to highlight the beauty of the ephemeral and to open spaces for reflection on our own scale within the ecosystems we inhabit.',
      ],
      bio: [
        'Born in Mendoza, Argentina (1978), she lives and works in Buenos Aires. Her education includes a degree in Visual Arts at the Universidad Nacional de las Artes (UNA), complemented by specialized studies in Bioaesthetics, Art, and Environmentalism at MUNTREF, taught by Pablo La Padula, as well as professional training as a Public Translator of English.',
        'Her career includes recognitions such as the Fondo Metropolitano Award (2025) and preselection for the National Visual Arts Salon at the Palais de Glace (2025), as well as participation in the SACO Biennial (2021). Her residencies include the SACO Biennial in Chile (2021) and the CIMA Residency in Catamarca.',
        'Her work has been presented at international institutions and platforms, including her solo exhibitions Ofrendas at Die Grünen, Vienna (2025), and Palacio de las Aguas Corrientes, Buenos Aires (2024). Her collective exhibitions and projects include presentations at the Museum of Decorative Arts in Berlin, Maker Faire Rome (Italy), Colección Fortabat, Centro Cultural Kirchner, Museo Nacional de Arte Decorativo, Galería Praxis, Museo de Arte Popular José Hernández, and Galería Cecilia Caballero, among others.',
      ],
      cvLabel: 'Download CV (PDF)',
    },
  },
} satisfies Record<Language, unknown>;

export function isLanguage(value: string | undefined): value is Language {
  return languages.includes(value as Language);
}
