# Elia Gasparolo

Portfolio bilingüe estático en Astro. La versión principal usa el header superior.
Las rutas `/Caminografico1/` y `/Caminografico2/` se conservan para revisar las propuestas,
con `noindex` y URLs canónicas hacia `/es/` y `/en/`.

## Desarrollo y validación

Requiere Node 22.19 o posterior (rama 22 en `.nvmrc`) y Python 3 para la verificación del sitio.

```sh
nvm use
npm ci
npm run dev
npm run build
npm run verify
npm run preview
npm audit
```

`verify` inspecciona el HTML compilado: enlaces y archivos locales, dimensiones y textos
alternativos de imágenes, idiomas, metadatos, sitemap, JSON-LD y hashes CSP.
GitHub Actions ejecuta build y verify antes de publicar un push a `main`.

## Contenidos

- Home: selección explícita en `src/pages/[lang]/index.astro`, imágenes en `src/assets/home-final/`.
- Obras y orden: `src/works-content.ts`. Textos con formato y enlaces al pie: `src/work-texts.json`.
  Para reimportarlos desde los Word: `python3 scripts/import-work-texts.py "/ruta/Obras actualizacion"`.
- Portadas: `src/work-covers.ts`; dimensiones originales: `src/work-image-sizes.json`.
- Biografía y navegación: `src/i18n.ts`.
- Diseño, textos y prensa: sus archivos `src/*-content.ts`.
- SEO de secciones: `src/seo.ts`. Metadatos y datos estructurados: `src/layouts/BaseLayout.astro`.

El carrusel conserva la proporción de las fotos. Su velocidad está en `WorkSlider.astro`.
Permite arrastrar con mouse/dedo, navegar con flechas y pausar con espacio cuando tiene foco;
respeta la preferencia de movimiento reducido. Las imágenes originales no se modifican.

## Seguridad y hosting

No hay backend, login ni formularios: el despliegue contiene únicamente archivos estáticos.
La CSP se genera con hashes de scripts y estilos; admite Google Fonts y permite atributos
`style` para las proporciones y desplazamientos de las galerías. Se comprueba con build/preview,
no con el servidor de desarrollo. El JSON-LD escapa los delimitadores de HTML.

La URL pública y el prefijo se configuran en `astro.config.mjs`. El sitemap usa esa configuración.
Si cambia el dominio, actualizar también `public/robots.txt`: los buscadores consultan robots.txt
en la raíz del dominio, no en la subcarpeta de este proyecto de GitHub Pages.
La publicación del sitemap en Search Console requiere acceso a la propiedad correspondiente.
Las cabeceras HTTP de hosting (por ejemplo, CSP frame-ancestors y HSTS) deben configurarse en
un servidor/proxy que las permita; no se simulan mediante archivos `_headers` en GitHub Pages.

No subir `.env`, tokens ni claves. Para actualizar dependencias, revisar `npm audit`, evitar
`--force` y volver a ejecutar build y verify. La auditoría no equivale a una prueba de penetración.
