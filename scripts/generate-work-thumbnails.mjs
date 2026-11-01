// Regenerate after changing work-covers.ts: npm run thumbnails
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const covers = await readFile(new URL('../src/work-covers.ts', import.meta.url), 'utf8');
const directory = new URL('../public/work-thumbnails/', import.meta.url);
await mkdir(directory, { recursive: true });
const thumbnails = {};
for (const [, slug, source] of covers.matchAll(/"([^"]+)": "([^"]+)"/g)) {
  const input = await readFile(new URL(`../public/${source}`, import.meta.url));
  const hash = createHash('sha256').update(input).digest('hex').slice(0, 10);
  thumbnails[slug] = [];
  for (const width of [320, 640, 960]) {
    // Keep original framing: the grid's existing object-fit controls the crop.
    const { data, info } = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 }).toBuffer({ resolveWithObject: true });
    const filename = `${slug}-${hash}-${width}.webp`;
    await writeFile(new URL(filename, directory), data);
    thumbnails[slug].push({ src: `work-thumbnails/${filename}`, width: info.width, height: info.height });
  }
}
await writeFile(new URL('../src/work-thumbnails.json', import.meta.url), JSON.stringify(thumbnails, null, 2) + '\n');
console.log(`Generated responsive thumbnails for ${Object.keys(thumbnails).length} works.`);
