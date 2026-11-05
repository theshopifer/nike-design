import fs from 'fs';
import path from 'path';

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('🚀 Starting Nike Design production build for Vercel...');

const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy index.html to dist/
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, 'index.html'));
console.log('✓ Copied index.html');

// 2. Copy public directory contents to dist/
const publicDir = path.resolve('public');
if (fs.existsSync(publicDir)) {
  copyDirSync(publicDir, distDir);
  console.log('✓ Copied public assets to dist/');
}

// 3. Create 404.html for SPA routing fallback
fs.copyFileSync(path.resolve('index.html'), path.join(distDir, '404.html'));
console.log('✓ Created 404.html fallback');

console.log('✨ Build completed successfully! Output in dist/');
