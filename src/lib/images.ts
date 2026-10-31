// Helpers for photos in public/images/, run when the site is built.
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { url } from './url';

const imagePath = (file: string) => join(process.cwd(), 'public', 'images', file);

// Cards and team members only show a photo when the file is actually there.
export const imageExists = (file: string) => existsSync(imagePath(file));

// The address of a photo, with a short fingerprint of its contents on the end:
//   imageUrl('pages/news.jpg') -> '/images/pages/news.jpg?v=3f9a1c2e'
// Browsers keep photos for a while. When a photo is replaced by a new file with the same
// name, the fingerprint changes, so every visitor gets the new photo straight away.
const fingerprints = new Map<string, string>();
export function imageUrl(file: string): string {
  const path = imagePath(file);
  if (!existsSync(path)) return url(`/images/${file}`);
  if (!fingerprints.has(file)) {
    fingerprints.set(file, createHash('md5').update(readFileSync(path)).digest('hex').slice(0, 8));
  }
  return `${url(`/images/${file}`)}?v=${fingerprints.get(file)}`;
}
