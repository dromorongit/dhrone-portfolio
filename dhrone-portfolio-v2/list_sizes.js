const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isFile());
files.sort();
for (const f of files) {
  const s = fs.statSync(path.join(dir, f));
  console.log(`${f}: ${s.size}`);
}
