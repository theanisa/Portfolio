const fs = require('fs');
const s = fs.readFileSync('src/styles.css', 'utf8');
const dq = (s.match(/"/g) || []).length;
const sq = (s.match(/'/g) || []).length;
console.log('double quotes:', dq, 'single quotes:', sq);
const idx = s.lastIndexOf('"');
console.log('last double quote index:', idx);
console.log('context:', s.slice(Math.max(0, idx-80), idx+40));
