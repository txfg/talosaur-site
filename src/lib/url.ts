// Every internal address goes through url(), so the site works whether it sits at the root of
// a domain (https://talosaur.com/news) or in a folder (https://tafreshio.github.io/talosaur-site/news,
// where it used to live). The folder, if any, is the "base" set once in astro.config.mjs;
// Astro exposes it as import.meta.env.BASE_URL. Today there is no base, so url() changes nothing
// for internal links, but keep using it: then moving the site again only means editing the config.
//
// Data files and pages write plain addresses like '/news' or '/images/home-turtle.jpg',
// and pass them through url() when they put them in the page:
//
//   url('/news')                 -> '/news'           (with base '/talosaur-site': '/talosaur-site/news')
//   url('/images/photo.jpg')     -> '/images/photo.jpg'
//   url('/')                     -> '/'
//   url('https://example.com')   -> unchanged (outside links, mailto:, #anchors are left alone)

// BASE_URL may or may not end in "/", so strip it and add it back where needed.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  // Leave outside links, email links and in-page anchors (#top) untouched
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}

// The opposite: turns the current address back into a plain one, so it can be compared with
// the addresses in the data files. '/news/' -> '/news' (with a base: '/talosaur-site/news/' -> '/news')
export function withoutBase(pathname: string): string {
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path.replace(/\/$/, '') || '/';
}
