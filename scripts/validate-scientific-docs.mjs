import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'src/content/kue';
const errors = [];
const warnings = [];
function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : /\.mdx?$/.test(entry.name) ? [path] : [];
  });
}
const files = walk(root);
const ids = new Map();
for (const file of files) {
  const body = readFileSync(file, 'utf8');
  const fm = body.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) { errors.push(`${file}: frontmatter missing`); continue; }
  const get = key => fm[1].match(new RegExp(`^${key}:\\s*["']?([^\\r\\n"']+)`, 'm'))?.[1]?.trim();
  const id = get('id'), sig = get('signatur'), version = get('version');
  if (!sig || !version) errors.push(`${file}: missing signatur/version`);
  if (id) {
    if (!/^DOC:KUE:[A-Za-z0-9_-]+$/.test(id)) errors.push(`${file}: invalid ID`);
    if (ids.has(id)) errors.push(`${file}: duplicate ID (${ids.get(id)})`);
    ids.set(id, file);
    for (const key of ['title', 'language', 'documentType']) if (!get(key)) errors.push(`${file}: new-style ID requires ${key}`);
    if (!/\bkg:\s*\r?\n/m.test(fm[1])) errors.push(`${file}: new-style ID requires kg mapping`);
  } else warnings.push(`${file}: legacy document without id (migration optional)`);
}
console.log(`Scientific metadata check: ${files.length} documents; ${errors.length} errors; ${warnings.length} legacy notices`);
for (const issue of errors) console.error('ERROR', issue);
for (const issue of warnings.slice(0, 10)) console.warn('NOTICE', issue);
if (warnings.length > 10) console.warn(`... and ${warnings.length - 10} further legacy notices`);
if (errors.length) process.exitCode = 1;
