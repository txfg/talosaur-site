// Helpers for news entries, shared by the Home page and the News page.
import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;

// Newest first: upcoming entries on top, then by date, then entries with no date yet.
export async function getSortedNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news');
  return entries.sort((a, b) => {
    if (a.data.upcoming !== b.data.upcoming) return a.data.upcoming ? -1 : 1;
    const aTime = a.data.date?.getTime() ?? -Infinity;
    const bTime = b.data.date?.getTime() ?? -Infinity;
    return bTime - aTime;
  });
}

// The text shown for an entry's date, e.g. "Oct 16, 2026"
export function formatNewsDate(entry: NewsEntry): string {
  if (entry.data.dateLabel) return entry.data.dateLabel;
  if (!entry.data.date) return '[ Date ]';
  return entry.data.date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
