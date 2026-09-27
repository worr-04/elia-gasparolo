import type { Language } from './i18n';

export interface DesignProject {
  title: string;
  credit: string;
  year?: string;
  paragraphs: string[];
  videoUrl?: string;
}

export const designContent: Record<Language, { title: string; videoLabel: string; projects: Record<string, DesignProject> }> = {
  es: {
    title: 'Diseño y Realización',
    videoLabel: 'Ver video',
    projects: {
      nube: {
        title: 'Nube',
        credit: 'Nube de Gaspar Libedinsky',
        year: '2022–2024–2026',
        paragraphs: ['Obra conformada por 300 escobillones de techo. Sus “pompones”, reutilizados en PET 100% reciclado, abandonan aquí su función doméstica y utilitaria para transformarse en una masa aérea, colorida y exuberante.'],
      },
      pijama: {
        title: 'Pijama de la serie Arrecifes para Vestir',
        credit: 'Gaspar Libedinsky + Mamitek Vibradios + Elia Gasparolo',
        paragraphs: [
          'Instalación performática en Galería Praxis.',
          'Una instalación performática ocupa el Espacio Vidriera donde se exhibió en 2018 la obra sitio específica El Origen de las Especies: un arrecife de corales hechos a partir de atados de cerdas de escobillones domésticos.',
          'En esta ocasión aquella barrera de corales se eleva del plano para envolver el cuerpo en formato de indumentaria.',
          'La vidriera opera como una pantalla. La vida doméstica hecha pública y la vida pública hecha doméstica, adaptación sistémica propia de los tiempos de pandemia. Luego finalmente llega a la calle.',
        ],
      },
      origen: {
        title: 'El Origen de las Especies',
        credit: 'El Origen de las Especies de Gaspar Libedinsky',
        year: '2019',
        paragraphs: ['El Origen de las Especies es una instalación sitio específica, una experiencia inmersiva. Un arrecife de corales compuesto por fibras 100% PET.'],
      },
      rabdomante: {
        title: 'Rabdomante',
        credit: 'Rabdomante de Joaquín Fargas. Diseño y realización: Elia Gasparolo',
        year: '2019',
        paragraphs: ['La combinación de la naturaleza con la tecnología nos permite generar un nuevo ciclo vital en el desierto obteniendo agua de la atmósfera en el lugar más seco del mundo, el Desierto de Atacama.'],
        videoUrl: 'https://youtu.be/BJFxf_sPWzo',
      },
      robotika: {
        title: 'Robotika, The Nannybot',
        credit: 'Robotika, The Nannybot de Joaquín Fargas. Diseño y realización: Elia Gasparolo',
        year: '2019',
        paragraphs: ['¿Estamos listos para la Inteligencia Artificial? Respuestas aún por venir. ¿Somos los seres humanos capaces de garantizar la supervivencia de nuestra especie? ¿Estamos dispuestos a delegar la preservación de la especie humana a la IA?'],
      },
      libro: {
        title: 'El Libro Absoluto',
        credit: 'El Libro Absoluto de Joaquín Fargas. Diseño y realización: Elia Gasparolo',
        year: '2018',
        paragraphs: ['¿Es posible encontrar en el Universo un libro contenedor de todo el conocimiento? El Libro Absoluto nos propone explorar caminos diversos en esta búsqueda que nos presenta alternativas infinitas que exceden la comprensión humana.'],
      },
      glaciator: {
        title: 'Glaciator. The Utopia Project',
        credit: 'Glaciator. The Utopia Project de Joaquín Fargas. Diseño y realización: Elia Gasparolo',
        year: '2017',
        paragraphs: ['Glaciator es una instalación artística realizada en la Antártida, compuesta por dos robots solares que ayudan a compactar y cristalizar la nieve para adherirla a la masa del glaciar.'],
      },
      altar: {
        title: 'Altar Mujeres SXXI #vidasenlucha',
        credit: 'Dirección: Silvia Barrios',
        paragraphs: ['“Altar Mujeres SXXI #vidasenlucha”. Manifestación de mujeres y movimientos de luchas de todes las épocas y culturas.', 'Altar Mujeres SXXI #vidasenlucha es un laboratorio/instalación transdisciplinaria en cruce con la perspectiva de género. Sintetiza el trabajo de una plataforma dedicada a la investigación y producción de obra de arte contemporáneo: un archivo global de todos los tiempos y culturas.'],
      },
    },
  },
  en: {
    title: 'Design & Realization',
    videoLabel: 'Watch video',
    projects: {
      nube: {
        title: 'Nube',
        credit: 'Nube by Gaspar Libedinsky',
        year: '2022–2024–2026',
        paragraphs: ['An artwork composed of 300 ceiling dusters. Their “pom-poms,” made from 100% recycled PET, abandon their domestic and utilitarian function here to transform into an aerial, colorful, and exuberant mass.'],
      },
      pijama: {
        title: 'Pajamas — from the Reefs to Wear series',
        credit: 'Gaspar Libedinsky + Mamitek Vibradios + Elia Gasparolo',
        paragraphs: [
          'Performative installation at Praxis Gallery.',
          'A performative installation occupies the Gallery Window Space where, in 2018, the site-specific work The Origin of Species was exhibited: a coral reef made from bundles of bristles from household dusters.',
          'On this occasion, that coral barrier rises from the plane to envelop the body, taking the form of clothing.',
          'The window display operates as a screen. Domestic life made public and public life made domestic—a systemic adaptation characteristic of the pandemic era. Eventually, it reaches the street.',
        ],
      },
      origen: {
        title: 'The Origin of Species',
        credit: 'The Origin of Species by Gaspar Libedinsky',
        year: '2019',
        paragraphs: ['The Origin of Species is a site-specific installation and an immersive experience. A coral reef composed of 100% PET fibers.'],
      },
      rabdomante: {
        title: 'Rabdomante',
        credit: 'Rabdomante by Joaquín Fargas. Design and realization: Elia Gasparolo',
        year: '2019',
        paragraphs: ['The combination of nature and technology allows us to generate a new life cycle in the desert by obtaining water from the atmosphere in the driest place on Earth: the Atacama Desert.'],
        videoUrl: 'https://youtu.be/BJFxf_sPWzo',
      },
      robotika: {
        title: 'Robotika, The Nannybot',
        credit: 'Robotika, The Nannybot by Joaquín Fargas. Design and realization: Elia Gasparolo',
        year: '2019',
        paragraphs: ['Are we ready for Artificial Intelligence? The answers are yet to come. Are we, as human beings, capable of guaranteeing the survival of our species? Are we willing to delegate the preservation of the Human Species to AI?'],
      },
      libro: {
        title: 'The Absolute Book',
        credit: 'The Absolute Book by Joaquín Fargas. Design and realization: Elia Gasparolo',
        year: '2018',
        paragraphs: ['Is it possible to find a book in the Universe containing all knowledge? The Absolute Book invites us to explore different paths in this search, presenting infinite alternatives that exceed human understanding.'],
      },
      glaciator: {
        title: 'Glaciator — The Utopia Project',
        credit: 'Glaciator — The Utopia Project by Joaquín Fargas. Design and realization: Elia Gasparolo',
        year: '2017',
        paragraphs: ['Glaciator is an art installation created in Antarctica, composed of two solar-powered robots that help compact and crystallize snow, transforming it into ice and incorporating it into the glacier mass.'],
      },
      altar: {
        title: 'Altar Mujeres SXXI #vidasenlucha',
        credit: 'Direction: Silvia Barrios',
        paragraphs: ['“ALTAR MUJERES SXXI #VIDASENLUCHA” — A Manifestation of Women and Struggles Across All Eras and Cultures.', 'Altar Mujeres SXXI #vidasenlucha is a transdisciplinary laboratory/installation situated at the intersection of art and a gender perspective. It synthesizes the work of a platform dedicated to the research and production of contemporary art. It constitutes a global archive spanning all eras and cultures.'],
      },
    },
  },
};
