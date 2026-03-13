// screenshot.mjs — Puppeteer screenshot tool for Circa AI Group website
// Usage: node screenshot.mjs http://localhost:3000
// Usage: node screenshot.mjs http://localhost:3000 label
// Screenshots saved to ./temporary screenshots/screenshot-N[-label].png

import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

const dir = './temporary screenshots';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter(f => /^screenshot-\d+/.test(f)).length;
const filename = `screenshot-${existing + 1}${label}.png`;
const filepath = join(dir, filename);

// Try common Chrome paths in order
const chromePaths = [
  'C:/Users/nateh/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
  'C:/Users/debbi/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
];

const { existsSync: fs_existsSync } = await import('fs');
let executablePath;
for (const p of chromePaths) {
  if (fs_existsSync(p)) { executablePath = p; break; }
}

const browser = await puppeteer.launch({
  ...(executablePath ? { executablePath } : {}),
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait a moment for animations to settle
await new Promise(r => setTimeout(r, 800));

await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
