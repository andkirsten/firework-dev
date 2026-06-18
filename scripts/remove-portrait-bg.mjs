import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/hero-portrait.png");
const output = path.join(__dirname, "../public/hero-portrait.png");

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < width * height; i++) {
  const idx = i * channels;
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const sat = max === 0 ? 0 : (max - min) / max;

  let keep = 1;

  if (lum < 62) {
    const darkFade = 1 - smoothstep(8, 62, lum);
    keep = Math.min(keep, 1 - darkFade);
  }

  if (max < 55 && sat < 0.35) {
    keep = Math.min(keep, smoothstep(0, 55, max));
  }

  data[idx + 3] = Math.round(255 * keep);
}

await sharp(data, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(output);

console.log(`Saved transparent portrait to ${output}`);
