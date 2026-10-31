// Content collections: folders of Markdown files that Astro reads as data.
// Each news update is one .md file in src/content/news/.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    // The real date, used for sorting. Leave it out if you don't know it yet.
    date: z.coerce.date().optional(),
    // Optional text to show instead of the date, e.g. "Coming soon" or "[ Date ]"
    dateLabel: z.string().optional(),
    // true = a planned update that hasn't happened yet. Shown at the top of the list.
    upcoming: z.boolean().default(false),
    // Optional photo filename in public/images/news/
    image: z.string().optional(),
  }),
});

export const collections = { news };
