import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesToOptimize = [
  'reasearch.jpg',
  'SafeRouteAI.png',
  'pibot.png',
  'pimart.png',
  'pirides.png',
  'jobboard.png'
];

async function run() {
  for (const img of imagesToOptimize) {
    const inputPath = path.join(publicDir, img);
    if (!fs.existsSync(inputPath)) continue;

    const baseName = path.parse(img).name;
    const outputPath = path.join(publicDir, `${baseName}.webp`);

    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log(`${img}: ${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB (${outputPath})`);
  }
}

run().catch(console.error);
