const fs = require('fs');
const p = 'src/styles.css';
let s = fs.readFileSync(p, 'utf8');
const before = s;
const start = s.indexOf('background-image');
const dataPos = s.indexOf('data:image', start);
if (start !== -1 && dataPos !== -1) {
  const endPos = s.indexOf(');', dataPos);
  if (endPos !== -1) {
    const sliceStart = s.lastIndexOf('\n', start) + 1;
    const newS = s.slice(0, sliceStart) + '  background-image: none;\n' + s.slice(endPos + 2);
    fs.writeFileSync(p, newS, 'utf8');
    console.log('styles.css fixed');
    process.exit(0);
  }
}
console.error('No change made');
process.exit(1);
