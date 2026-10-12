# Revisión técnica — 12/10/2026

Revisión del código fuente, configuración de compilación/despliegue y HTML generado.
Incluye español, inglés y ambas propuestas. Cambios locales, sin publicar.

## Seguridad

- Corregidos dos avisos de severidad alta reportados por npm: `http-cache-semantics`
  4.2.0 → 4.3.0 (GHSA-ch52-4w7c-c8xp), y `source-map-js` 1.2.1 → 1.2.2
  (GHSA-68fv-2mgg-jv7q). Son dependencias de herramientas; el sitio publicado es estático.
  No se constató explotación. Auditoría posterior: 0 avisos.
- CSP con hashes de scripts/estilos, sin `unsafe-inline` ni `unsafe-eval` para JavaScript.
  Fuentes permitidas de Google Fonts. Objetos, marcos, formularios y cambios de base bloqueados.
  Se permiten atributos de estilo porque las galerías los necesitan para su geometría.
- JSON-LD serializado con escape de `<` y hash específico incluido en CSP.
- Política de referrer explícita y exclusión de archivos `.env` del repositorio.
- Permisos de escritura de Pages/OIDC restringidos al job de despliegue; checkout sin
  persistencia de credenciales. El build usa solo permisos de lectura.
- Búsqueda limitada de patrones de claves privadas/tokens: ningún hallazgo en archivos de código.

## SEO

- Descripciones específicas de cada sección en español/inglés y de cada obra.
- Canónicas y hreflang de las propuestas apuntan a las páginas principales; propuestas
  conservan `noindex` y quedan fuera del sitemap.
- Datos estructurados Person, WebPage y VisualArtwork según el contenido.
- Cada obra usa su imagen para compartir enlaces; se agregaron nombre del sitio y alt social.
- Sitemap sin duplicar dominio/prefijo en código: toma la configuración de Astro.

## Desarrollo, rendimiento y accesibilidad

- Imágenes de prensa/textos ahora usan variantes responsive de Astro.
- Dimensiones explícitas y decodificación asíncrona en miniaturas de Obras.
- Carga de fuentes desde el head con preconexión, eliminando el @import CSS encadenado.
- Textos alternativos/etiquetas traducidos; instrucciones de teclado accesibles en el carrusel.
- Escape y etiquetas bilingües en el menú de la propuesta anterior.
- Requisitos de Node y tipos coherentes con las dependencias; README actualizado.
- `npm run verify` agregado a CI: valida archivos/enlaces internos, imágenes, metadatos,
  idiomas, sitemap, JSON-LD y correspondencia de hashes CSP con el HTML real.

## Validación y límites

- `npm run build`: 0 errores y 0 advertencias; 187 páginas generadas.
- `npm run verify`: 187 HTML y 62 URLs de sitemap correctos.
- Preview de producción en Safari: recursos visuales y menú funcionales con CSP activa.
- `git diff --check`: correcto.
- No se realizó una prueba de penetración ni validación de todas las URLs externas.
- La indexación real y Search Console requieren acceso a la propiedad y publicación.
- `robots.txt` debe estar en la raíz del dominio para que lo consulten los buscadores:
  el archivo dentro de la subcarpeta de GitHub Pages no reemplaza al de la raíz.
- Las cabeceras de seguridad HTTP adicionales requieren configuración del hosting/proxy;
  CSP mediante meta no puede implementar `frame-ancestors` ni HSTS.

Referencia técnica: https://docs.astro.build/en/reference/configuration-reference/#securitycsp
