import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://worr-04.github.io',
  base: '/elia-gasparolo',
  output: 'static',
  security: {
    csp: {
      directives: [
        "default-src 'self'", "object-src 'none'", "base-uri 'none'",
        "form-action 'none'", "frame-src 'none'", "img-src 'self' data:", "media-src 'self'",
        "font-src 'self' https://fonts.gstatic.com",
      ],
      styleDirective: { resources: [
        "'self'", 'https://fonts.googleapis.com',
        // Restrict this exception to style attributes used by gallery geometry.
        { resource: "'unsafe-inline'", kind: 'attribute' },
      ] },
    },
  },
  trailingSlash: 'always',
});
