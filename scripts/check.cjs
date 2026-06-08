const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'index.html',
  'package.json',
  'scripts/dev-server.cjs',
  'scripts/build.cjs',
  'public/favicon.svg'
];

let hasError = false;

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    console.error(`Missing required file: ${file}`);
    hasError = true;
  }
}

const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
const requiredSnippets = [
  'Tailwind',
  'BUDS MOTOR',
  'wa.me/6287776606664',
  'lucide'
];

for (const snippet of requiredSnippets) {
  if (!html.toLowerCase().includes(snippet.toLowerCase())) {
    console.error(`Missing expected content in index.html: ${snippet}`);
    hasError = true;
  }
}

// Image asset check
const imageMatches = [...html.matchAll(/"image":\s*"([^"]+)"/g)].map(match => match[1]);
const missingImages = imageMatches.filter(src => {
  const clean = src.replace(/^\.\//, '');
  return !fs.existsSync(path.join(process.cwd(), clean));
});
if (missingImages.length) {
  console.error(`Missing catalog image assets:\n${missingImages.join('\n')}`);
  hasError = true;
}

if (hasError) process.exit(1);

console.log('Check passed. MOTORZONE static project is ready.');

