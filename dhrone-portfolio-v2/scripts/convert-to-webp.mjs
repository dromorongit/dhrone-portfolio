import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function convertPngToWebp(filePath) {
  const fileName = path.basename(filePath);
  const webpPath = filePath.replace(/\.png$/i, '.webp');

  const stats = fs.statSync(filePath);
  const pngSize = stats.size;

  await sharp(filePath)
    .webp({ quality: 80 })
    .toFile(webpPath);

  const webpStats = fs.statSync(webpPath);
  if (webpStats.size === 0) {
    throw new Error(`WebP output is zero bytes for ${fileName}`);
  }

  fs.unlinkSync(filePath);

  console.log(`${fileName} (${pngSize} bytes) -> ${path.basename(webpPath)} (${webpStats.size} bytes)`);
}

async function resizeJpeg(filePath, width, quality) {
  const fileName = path.basename(filePath);
  const stats = fs.statSync(filePath);

  const metadata = await sharp(filePath).metadata();
  if (metadata.width <= width) {
    console.log(`${fileName}: already at or below target width (${metadata.width}px), skipping`);
    return;
  }

  await sharp(filePath)
    .resize(width, null, { withoutEnlargement: true })
    .jpeg({ quality })
    .toFile(filePath + '.tmp');

  const tmpStats = fs.statSync(filePath + '.tmp');
  if (tmpStats.size === 0) {
    throw new Error(`JPEG output is zero bytes for ${fileName}`);
  }

  fs.renameSync(filePath + '.tmp', filePath);
  const newStats = fs.statSync(filePath);

  console.log(`${fileName} (${stats.size} bytes) -> ${fileName} (${newStats.size} bytes, ${width}px wide)`);
}

async function main() {
  const files = fs.readdirSync(imagesDir);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    totalBefore += stat.size;
  }

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();

    if (ext === '.png') {
      await convertPngToWebp(filePath);
    } else if (file === 'dhrone.jpg') {
      await resizeJpeg(filePath, 400, 82);
    } else if (file === 'dromorlogo.jpg') {
      await resizeJpeg(filePath, 100, 85);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      console.log(`${file}: skipped (not dhrone.jpg or dromorlogo.jpg)`);
    } else {
      console.log(`${file}: skipped (unsupported extension)`);
    }
  }

  for (const file of fs.readdirSync(imagesDir)) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      totalAfter += stat.size;
    }
  }

  console.log(`Total size: ${totalBefore} -> ${totalAfter} bytes`);
}

main().catch((err) => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
