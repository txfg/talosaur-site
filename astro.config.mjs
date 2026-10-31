// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The site is hosted on GitHub Pages at the team's own domain, https://talosaur.com/
  // (the custom domain is set in the repository's Settings → Pages; see "Deploy" in README.md).
  //
  // site: the domain. Used to build full links in social-share previews (Open Graph tags),
  // the canonical links and the sitemap.
  site: 'https://talosaur.com',
  // Sitemap: a list of every page for search engines, rebuilt on every deploy
  // (dist/sitemap-index.xml). New pages are added to it automatically. See "Search engines" in README.md.
  // The 404 page is left out.
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  // No `base`: on its own domain the site sits at the root, so pages are /news, /donate...
  // (On the old address, tafreshio.github.io/talosaur-site/, base was '/talosaur-site'.
  // Links in the code go through url() in src/lib/url.ts, so they follow whatever this is.)
});
