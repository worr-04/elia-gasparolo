# Elia Gasparolo

Sitio portfolio bilingüe construido con Astro.

## Requisitos

Node.js 20.12 o posterior (se recomienda la versión LTS vigente).

## Desarrollo

```sh
npm install
npm run dev
```

## Imágenes del home

Guardá las obras del slider en `src/assets/home/` con extensión `.avif`, `.webp`, `.jpg`, `.jpeg`, `.png` o `.gif`.

Astro las optimiza durante la compilación. El orden se determina por nombre de archivo, por lo que se recomienda usar un prefijo numérico, por ejemplo:

```text
01-obra.jpg
02-obra.jpg
03-obra.jpg
```

Mientras la carpeta esté vacía, el home muestra un estado editorial de "Próximamente".
