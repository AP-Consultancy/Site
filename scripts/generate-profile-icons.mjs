import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const source = join(publicDir, "logo", "ap-logo-full.png");

const meta = await sharp(source).metadata();
const cropHeight = Math.round(meta.height * 0.42);
const mark = sharp(source).extract({
  left: 0,
  top: 0,
  width: meta.width,
  height: cropHeight,
});

async function squareIcon(size, outPath) {
  const inset = Math.round(size * 0.12);
  const inner = size - inset * 2;
  const resized = await mark
    .clone()
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: resized, left: inset, top: inset }])
    .png()
    .toFile(outPath);
}

await squareIcon(32, join(publicDir, "favicon-32.png"));
await squareIcon(180, join(publicDir, "apple-touch-icon.png"));
await squareIcon(192, join(publicDir, "icon-192.png"));
await squareIcon(512, join(publicDir, "icon-512.png"));

const favicon32 = await readFile(join(publicDir, "favicon-32.png"));
const ico = await pngToIco([favicon32]);
await writeFile(join(publicDir, "favicon.ico"), ico);
await writeFile(join(publicDir, "favicon.png"), favicon32);

console.log("Generated white-background profile icons in public/");
