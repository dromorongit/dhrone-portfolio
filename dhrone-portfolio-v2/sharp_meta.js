const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function getMetadata(filePath) {
  const meta = await sharp(filePath).metadata();
  const stat = fs.statSync(filePath);
  return {
    file: path.basename(filePath),
    width: meta.width,
    height: meta.height,
    size: stat.size
  };
}

async function main() {
  const results = [];
  for (const f of files) {
    results.push(await getMetadata(path.join(dir, f)));
  }
  results.sort((a, b) => b.size - a.size);
  for (const r of results.slice(0, 10)) {
    console.log(`${r.file}: ${r.width}x${r.height}, ${r.size} bytes`);
  }
}

main().catch(console.error);
