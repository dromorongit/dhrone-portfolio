import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function processImage(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).toLowerCase();

  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return;
  }

  const stats = fs.statSync(filePath);

  if (fileName === 'dromorlogo.jpg') {
    console.log(`${fileName}: ${stats.size} bytes (skipped, under 200KB)`);
    return;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    if (metadata.width > 1600) {
      pipeline = pipeline.resize(1600, null, { withoutEnlargement: true });
    }

    if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 9 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 78 });
    }

    const tmpPath = `${filePath}.tmp`;
    await pipeline.toFile(tmpPath);
    fs.renameSync(tmpPath, filePath);
    const newStats = fs.statSync(filePath);
    console.log(`Optimized ${fileName}: ${stats.size} -> ${newStats.size} bytes`);
  } catch (err) {
    console.error(`Failed to optimize ${fileName}:`, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(imagesDir);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      totalBefore += stat.size;
      await processImage(filePath);
      totalAfter += fs.statSync(filePath).size;
    }
  }
  console.log(`Total size: ${totalBefore} -> ${totalAfter} bytes`);
}

main().catch((err) => {
  console.error('Optimization failed:', err);
  process.exit(1);
});
