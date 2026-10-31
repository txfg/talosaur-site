# Talosaur website

The Talosaur team website, built with [Astro](https://astro.build). It is a static site: no server or database, just pages.

**Live site:** https://talosaur.com/ (published automatically from the `main` branch, see "Deploy" below).

## Run the site on your computer

You need [Node.js](https://nodejs.org) installed (version 22 or newer).

```sh
npm install      # first time only: downloads Astro
npm run dev      # starts the site at http://localhost:4321/
```


Edits show up in the browser as soon as you save a file. Stop the server with `Ctrl + C`.

To check that the site builds without errors before publishing:

```sh
npm run build    # builds the finished site into the dist/ folder
npm run preview  # serves that finished site so you can click through it before publishing
npm run check    # looks for mistakes in the code (typos in data files, missing fields)
```

## Where things live

| What | File |
|---|---|
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` block at the top) |
| Top navigation and footer links, email addresses (info@, sales@, support@), social links, Twitch link | `src/data/site.ts` |
| Logo files and browser-tab icons | `public/brand/`, `public/favicon.*`, `public/apple-touch-icon.png` |
| Page-header photos | `public/images/pages/` |
| Colour-edited accent pictures (collage, tiles, field log strip, specimen) | `public/images/accents/` |
| Big cut-out specimen that runs off the screen edge | `src/components/Specimen.astro` |
| Photos for the content sections (habitat map, fact sheet, photo cards) | `public/images/sections/` |
| Fact sheet and photo-card building blocks | `src/components/SpecList.astro`, `src/components/PictureCards.astro` |
| Top navigation design | `src/components/Header.astro` |
| Footer design | `src/components/Footer.astro` |
| Home page video hero | `src/components/HeroVideo.astro` |
| Home page cards, buttons and featured heading | `src/data/home.ts` |
| News posts | `src/content/news/` (one `.md` file per post) |
| The Problem page text, big numbers and depth bands | `src/data/problem.ts` |
| Team members | `src/data/team.ts` |
| Open positions and the application form link | `src/data/positions.ts` |
| Team email, finance contact, location | `src/data/site.ts` |
| Photos | `public/images/` |
| Videos | `public/videos/` |
| Page wrapper (head, header, footer) used by every page | `src/layouts/BaseLayout.astro` |
| Site address (`site`) | `astro.config.mjs` |
| Helper that every internal link and image path goes through | `src/lib/url.ts` |
| Automatic deploy to GitHub Pages | `.github/workflows/deploy.yml` |
| Pages | `src/pages/` (one file per page) |

## Common edits

**Change a link in the nav or footer, an email address or the social links:**
open `src/data/site.ts` and edit the text between the quotes. Social links left as `''` show as plain text until filled in.

**Email addresses.** `src/data/site.ts` has three: `info@talosaur.com` (general inquiries: footer, privacy page), `sales@talosaur.com` (donations and sponsorship: the Donate button) and `support@talosaur.com` (technical questions). All three are listed on Work with us and in the footer, in the order of `contactEmails`; add a line there to list another address.

**Change a color or font:** open `src/styles/global.css` and change the value next to the variable (for example `--color-accent`).

## Edit team members

Open `src/data/team.ts`. Each person is one `{ ... }` block with their name, role, major and year, photo filename and LinkedIn link. To add someone, copy a block and edit it; to remove someone, delete their block. The order in the file is the order on the page. Leave `linkedin: ''` empty to hide the LinkedIn link. Put their photo (portrait, about 800 × 1000 px) in `public/images/team/` with the filename you wrote in `photo`.

The "What we share" text at the bottom of the crew (a few lines about the team as a whole, not one person) is `teamStatement` at the bottom of the same file. Put `**` on both sides of a phrase in the `headline` to give it a coloured box. The big scrolling strip of disciplines above it (MECHANICAL · HYDRAULICS · OCEAN ...) is made from the roles automatically, so a new role shows up there by itself.

## Edit open positions

Open `src/data/positions.ts`. Each role is one `{ ... }` block with a title, "What you'd do" and "Helpful skills". Copy a block to add a role, delete it to close one. The **Apply now** button at the top of the page opens the Google Form saved in `applicationFormUrl`; change that line if the form ever moves. If you add or rename a role, also update the "Position applying for" dropdown in the Google Form so they match.

## Add or swap a photo

All photos live in `public/images/`. To swap one, overwrite the file and keep the same name. Save JPGs about 1600 px wide and under 300 KB.

**Home page cards.** Every card shows a photo; the filename is the `photo` line in `src/data/home.ts`. Section 03 is a feature layout: the first card (Turtle) is big and square (1200 × 1200), and the other two stack beside it at 16:9 (1600 × 900). Section 04 is a stepped row (each card a little lower than the last) and Section 07 a plain row, both 16:9 (1600 × 900). The layouts are the `card-grid--feature` and `card-grid--stepped` rules in `src/pages/index.astro`. If a file is missing, the card shows a plain dark panel of the same shape.

**Home, Section 01.** The headline and intro (Content doc), and under the button two figures from The Problem as still pictures: the dotted Earth with the mapped share of the seafloor lit (`public/images/figures/globe-mapped.svg`), and how little of the deep seafloor anyone has seen, with a link to The Problem (numbers: `explored` in `src/data/problem.ts`).

**Home, FIND / FOLLOW / FILM.** Under the three words, a box of three numbers joined to them by a thin line, one for each word: the share of ocean species not yet described, where divers stop, and how few countries do nearly all deep-sea looking (no prices here, so nothing reads as what Talosaur charges). Each links to its source. The numbers are `echoFigures` in `src/data/home.ts`; the box is the `figures` option of `src/components/StoryBand.astro`, so any story band can have one.

**Home, between Section 01 and 02: a thin picture.** A long, short strip of schooling fish in violet with lime highlights (`public/images/bands/strip-school.jpg`, 2400 × 525, made by `stills_site/make_strip.py` from a Pexels clip), like the panoramic breather strips between text blocks on Colossal's pages. On phones it's a little taller (3:1). To swap it, save a new picture under the same name, at least 2400 px wide and about 4.5 times wider than tall.

**Home, Section 02: What we're doing.** The plan, right after "Life at 50–300 m is barely watched" and before the FIND / FOLLOW / FILM band (`src/components/Plan.astro`; all the text is `plan` in `src/data/home.ts`). First a big statement with two phrases in colour boxes (`src/components/Statement.astro`, the same layout as "What we share" on Who we are). Then the plan as a dive: four steps that each sit a little deeper, joined by a line like a dive profile and ending at 50–300 m (`src/components/Roadmap.astro`; on phones a plain list with the line down the left). A solid silhouette of Turtle (its outside shape only, the same outline as the Home Turtle drawing) rides the line and dives from the first stop to the last as you scroll; with "reduce motion" on it stays at the first stop. Last, a dark "What we'll offer" panel: vehicles to buy, research to use and surveys on request, with a "Talk to us" button (nothing is sold on the site). The section has `id="plan"`, so `/#plan` links straight to it, and the panel has `id="offer"`.

| File | Card | What is in it now |
|---|---|---|
| `home-turtle.jpg` | Turtle | Green schematic of Turtle's outside (side view, end view, test ladder), redrawn from the team's vehicle layout sheet with no electronics or wiring labels |
| `home-edna.jpg` | Deep eDNA possibilities | DNA helix |
| `home-live.jpg` | Talosaur Live | A lathe at work, with a "● LIVE" badge on top (links to Twitch; the badge is the `badge` line in `src/data/home.ts`) |
| `home-team.jpg` | Who we are | A school of fish |
| `home-positions.jpg` | Open positions | Pipette and well plate |
| `home-build-log.jpg` | Our build log | Hands at a microscope |
| `home-twilight-zone.jpg` | The twilight zone | Sea nettle jellyfish |
| `home-meet-the-team.jpg` | Meet the team | Crew and rover on a research ship deck (NOAA) |
| `home-get-in-touch.jpg` | Get in touch | A ship offshore |

Swap any of these for real team photos whenever you have them.

**Replacing a photo with one of the same name** just works for visitors too: every photo link gets a short fingerprint of the file on the end (`news.jpg?v=3f9a1c2e`), worked out when the site is built (`imageUrl()` in `src/lib/images.ts`). A new file means a new fingerprint, so browsers fetch the new photo instead of showing the one they kept from last time.

**Page headers.** Every page in the top menu opens with a full-screen photo band. The photos live in `public/images/pages/` and are named after the page: `who-we-are.jpg`, `the-problem.jpg`, `news.jpg`, `work-with-us.jpg`, `positions.jpg`, `donate.jpg`. Each is 3600 × 2025, saved with full colour resolution: the headers fill the whole first screen, so a sharp laptop screen shows them at about 3500 pixels across, and a phone shows only a slice from the middle, blown up. A smaller file looks soft at that size. Each is a nature photo with an edit: Who we are (zoanthids, a full negative through a violet-to-lime gradient map: the background turns soft green and the polyps deep violet), The Problem (a jellyfish on black, supplied by the team, colour-shifted: the water a soft violet wash that drifts from blue-violet to lilac pink, with a big out-of-focus echo of the jellyfish behind it; the jellyfish mapped hot pink to orange with a cyan edge, and a ring of halftone dots around it; flipped so it sits on the right, clear of the title), News (porcelain crab, a negative lens around it), Work with us (soft coral, a full negative recoloured with a left-to-right colour sweep: teal, then sand, then magenta and blue, like Colossal's "Gratitude is in our genes" page), Positions (pygmy seahorse, natural colour) and Donate (anemone, false colour). The edits darken the left side a little, where the white title sits, so keep that area calm and darkish. To swap a photo, save a new one under the same name, ideally at least 3600 × 2025: a photo straight from the camera works best, while a small or heavily compressed web copy will look soft at full-screen size. To change which part of a photo stays visible on phones, edit `imagePosition` where the page uses `<PageHeader>` (for example `imagePosition="60% 50%"` keeps a bit right of center). Delete a page's photo and that page goes back to a plain title.

**Photo rule (natural vs edited).** Like Colossal: photos of people, lab work and machines stay natural, with no filter. False-color edits (gradient maps, halftone dots, shifted slices) are only for nature and animals and for graphic "stickers". So the Home cards and the photos in the plans sections are natural (except the fish eye on Home, the dissolving reef and the warm texture behind "A small crew, for now"), while every page header, every big photo band and every picture in `public/images/accents/` is nature (or an old engraving) with a false-color edit.

**Image rights.** Only edit pictures whose licence allows changes: public-domain sources (NOAA, old engravings and plates), Pexels, or the team's own. The MBARI / FathomNet video stills the team collected are CC BY-NC-ND ("no derivatives"), so they can't be colour-edited or cut out for the site. A replacement for an edited photo needs the same treatment (ask for it, or use a gradient map in any photo app).

**Big photo bands.** Like Colossal's elephant and mammoth sections, some pages give one good photo a whole screen, with a headline and button over it: Home (Section 05, "How can we help?"), and the end of every inner page (Who we are, The Problem, News, Work with us, Positions, Donate). For a whole sentence as the headline, add `size="md"`. The component is `src/components/PhotoBand.astro`; the photos are in `public/images/bands/` (2400 × 1500, named after the page) and pan slowly as you scroll. Each headline reuses copy from the Content doc or the page.

**Inset photos across section edges ("patches"): not used right now.** Smaller photos used to sit across the edge between two sections. They were taken out (October 2026) because they looked stuck on, especially on top of the closing photo bands, which link somewhere unrelated. If you bring one back, only do it where the small photo clearly belongs to the section it overlaps, and never on a closing band or right under a page header. The component is still there: `src/components/Patch.astro` (the top of the file lists the shapes), with its photos in `public/images/patches/`. Example: `<Patch variant="lens" image="fish-eye-lens.jpg" caption="Fish eye" side="center" straddle />` between two sections.

**Plans sections in bright colours (Who we are, Work with us).** Four sections about where Talosaur is going, each on its own bright background so the pages aren't navy all the way down, and with a wide "technical" title font, Martian Mono (`--font-tech`), like the Form Bio and "Just the beginning" bands on Colossal's company page. Subheads use Archivo stretched wide (`.wide-head`). The colours are CSS variables in `src/styles/global.css` (`--color-royal`, `--color-royal-deep`, `--color-sun`, `--color-sun-ink`) and the band styles are `.theme-royal`, `.theme-violet` and `.theme-sun` there (they work like `.theme-light`). The copy is new (not from the Content doc) and sits at the top of each page file, so it's easy to edit.

| Section | Page | Pictures (`public/images/sections/`) |
|---|---|---|
| "Every ocean has a twilight zone" (where we're headed): royal blue, the route First / Next / Later, and three photos at different depths that drift at different speeds while scrolling | Who we are (`route`, `regionsText`) | `regions-reef.webp` and, for phones, `regions-reef-small.webp` with bigger squares (a reef from the air that breaks up into squares at its sides; transparent, so the band colour shows through), `regions-ice.jpg`, `regions-dolphins.jpg` |
| "A small crew, for now" (growing with Turtle): a warm band (so the end of the page isn't blue after blue) with a headline in two typefaces, wide black Archivo and thin Martian Mono, and the egrets photo set into it as a pill; then the team today and once Turtle works, side by side, beside a whale | Who we are (`growthText`, `growthToday`, `growthNext`) | `growth-egrets.jpg`, `growth-whale.jpg`, and the background `growth-texture.jpg` (the same lily pads, blurred and recoloured coral, peach, pink and yellow) |
| "What we bring back": orange, four deliverables two by two beside a reef wall with a notched corner | Work with us (`deliverIntro`, `deliverables`) | `work-coral.jpg` |
| "How a project works": violet to deep blue; on laptops the four steps sit lower and lower like a dive, joined by a stepped line from ring to ring (a timeline down the left on tablets and phones), with a button back up to the email addresses | Work with us (`steps`) | none (type only) |

All these photos are natural colour except the two edits named above, which are made by `stills_site/make_new_sections.py` from the originals the team sent (see "Image rights"). To swap a natural one, save a new photo under the same name; to redo an edit, change the original and run the script.

**Colour-shift accents (`public/images/accents/`).** Smaller edited pictures in the style of Colossal's species pages, each a different idea. All are nature or old engravings (the photo rule above), and each is decorative, so screen readers skip it:

| File | Where | What it is |
|---|---|---|
| `radiolarian.webp` | Home, Section 04, running off the right edge behind the cards | A radiolarian (plankton) from the 1887 HMS Challenger plates: neon lime lines on a violet shell, magenta inside. Transparent background. Placed with `src/components/Specimen.astro` |
| `sonar.jpg` | Home, Section 06, behind Latest news | NOAA sonar data of the seafloor, recoloured violet, teal and magenta and kept dark so the news reads on top |
| `jelly.jpg` | Work with us, beside the contact details | A jellyfish in magenta and orange, with a lime block with a notch behind it and an orange dot on its corner |

The three ways to help on Donate sit on plain colour blocks (orange, lime, violet) with their number in big thin type, not photos: a picture of an unrelated animal would suggest the wrong thing. The accent colours used in these edits (lime, orange, violet, magenta) are CSS variables in `src/styles/global.css` (`--color-lime` and so on), so the colour blocks and dots on the page match the pictures. To replace one, keep the same file name and size (and the transparent background for the `.webp`).

**Content sections with photos (`public/images/sections/`).** Like the species pages on Colossal (a section about the habitat has a map, a section about the team has team photos), these sections each carry pictures that go with what they say. Their text is mostly [bracket] placeholders to fill in later (listed in `PLACEHOLDERS.md`):

| Section | Where the text lives | Pictures |
|---|---|---|
| The Problem, 01 Barely explored: three still pictures in one style (no motion), round "portholes" in dark glass with faint sonar rings around them, each beside its number and swapping sides row by row. Mapped: a dotted Earth seen over the Atlantic, land in white, sea dots dark, 28.7% of them lit (`public/images/figures/globe-mapped.svg`, drawn from real coastlines by `stills_site/make_globe.py`; the lit dots show the share, not the places). Seen: 1,000 dots laid out like sunflower seeds, one circled, with a magnifier showing it holds 100 more and one of those lit: 1 in 100,000 (`src/components/SeenPorthole.astro`). Named: a school of 100 sea animals swirling round the middle, the 9 named by any count in orange at the centre, 24 more named by NOAA's count in cyan, 67 unnamed outlines around them (`src/components/SpeciesSchool.astro`). Then "Why naming a species matters" on a dark panel with three numbered reasons. Every number links to its source. 02 What it takes: the three big numbers (depth, robot cost, ship time) | `explored`, `naming` and `stats` in `src/data/problem.ts` (sources in `sources` at the top). To update the mapped share, change it there and in `MAPPED` in `stills_site/make_globe.py`, then run the script | `figures/globe-mapped.svg` |
| The Problem, 04 At a glance (dark, carrying on the water of the depth graphic): a fact sheet in white boxed labels beside a big jellyfish cut-out (`src/components/SpecList.astro`) | `glance` in `src/data/problem.ts` | `glance-jelly.webp` |
| The Problem, 05 Habitat: a wide photo of a brain coral at Flower Garden Banks (supplied by the team), "Flower Garden Banks", two paragraphs, five facts and a map with Flower Garden Banks and College Station. Then a story band with the sanctuary in numbers beside the drawing from the front of NOAA's 2023 sanctuary poster, and 05 Who lives here: four animals with NOAA photos from the same poster (all made by `stills_site/make_fgb.py`) | `habitat` in `src/data/problem.ts` | `habitat-pano.jpg`, `habitat-map.png` (the two map labels are placed by % in `src/pages/the-problem.astro`), `bands/story-fgb.jpg`, `fgb-poster-art.jpg`, `fgb-black-coral.jpg`, `fgb-marbled-grouper.jpg`, `fgb-manta-ray.jpg`, `fgb-trunkfish.jpg` (text: `habitat`, `fgbStats`, `fgbSpecies` in `src/data/problem.ts`) |
| Work with us, 01 Who we work with: four photo cards, all natural colour so the row matches (`src/components/PictureCards.astro`) | `audiences` at the top of `src/pages/work-with-us.astro` | `aud-research.jpg`, `aud-conservation.jpg`, `aud-fisheries.jpg`, `aud-offshore.jpg` |
| Donate, 02 Where it goes: three photo cards | `support` at the top of `src/pages/donate.astro` | `support-parts.jpg`, `support-testing.jpg`, `support-field-trips.jpg` |
| Positions, 01 Life on the team: text and an Apply button beside a big photo with a smaller one in an orange frame | `life` at the top of `src/pages/positions.astro` | `team-build.jpg`, `team-lab.jpg` |
| News, 01 Where we test: an orange band with a map of East Texas and the Gulf, the five test stops numbered on it and listed beside it, each with a small photo (`src/components/TestRoute.astro`, drawn like the locations map on Colossal's company page) | `stops` at the top of `src/pages/news.astro` (each stop's place on the map is left % / top %) | `test-route-map.png`, `test-pool.jpg`, `test-lake-bryan.jpg`, `test-lake-travis.jpg`, `test-galveston.jpg`, `test-offshore.jpg` |

**"Photo to come" panels.** A photo that shows something specific (the team, Turtle, a place like Lake Bryan) is never stood in for by an unrelated stock picture. Until the real photo exists, the slot shows a dark panel with "[ Photo to come ]" and what the photo should be (`src/components/PhotoPlaceholder.astro`). Save the photo under the file name listed in `PLACEHOLDERS.md` and the panel turns into the photo. Cards with a photo that is a generic stand-in on purpose (parts being machined, a boat wake for field trips) keep it. People, lab and machine photos stay natural; a row of photo cards keeps one treatment (all natural or all edited) so it reads as a set.

**Story bands.** Between the white stretches, each page has one loud, full-width band: a colour-shifted picture across the whole screen with very large thin capitals over it, like the bands on Colossal's mammoth and company pages. The component is `src/components/StoryBand.astro` and has five layouts:

| Layout | Page | Picture (`public/images/bands/`) |
|---|---|---|
| `echo`: a few big words stacked down the middle, each with a small caption (Colossal's "Lost but not gone forever") | Home, FIND / FOLLOW / FILM | `story-find.jpg` (spiral coral, NOAA, magenta and green) |
| `stats`: a title and big numbers on dots (Colossal's "5.5 million square miles") | Who we are, the team in numbers | `story-team.jpg` (sun rays under the surface, Pexels, orange to violet) |
| `split`: big type across a picture in two halves, with a list and the button on the right (Colossal's "Bringing back the woolly mammoth") | Positions, "06 open roles" | `story-join.jpg` (a school of fish, Pexels, lime on violet; a magenta and orange blur) |
| `statement`: a big line and two short columns (Colossal's "Mission / Goal") | Donate, "Affordable ocean exploration"; Work with us, "20 minutes" | `story-donate.jpg` (a ray, NOAA, orange to violet), `story-talk.jpg` (a feather star, NOAA, teal and pink) |
| `art`: a title and numbers on the left, a piece of artwork shown whole on the right in a thin lime frame (no type over it, no colour edits) | The Problem, "Most of it lies in the twilight zone" | `story-fgb.jpg` (the bank's seafloor relief from NOAA's poster, violet and lime), with the poster drawing `sections/fgb-poster-art.jpg` on top |

The pictures are made by `stills_site/make_story.py` from public-domain NOAA video and Pexels clips (only nature is colour-shifted). To add a band to a page, close the light band (`</div>`), put `<StoryBand ... />`, and open a new one (`<div class="band band--top theme-light">`).

These sections sit inside the light bands (or, for At a glance, in the dark water under the depth graphic), so every page keeps going light, dark, light, dark down the page.

**Page headers meet the page with a clean edge.** There is no dark fade at the bottom of a header photo: the photo runs to its bottom edge and meets the light section below with a clean line, like Colossal. Readability comes from shading on the left side only (where the title sits; even shading on phones), and the caption sits in a boxed tag. When making a new header photo, keep the bottom edge in the photo's own colours (don't darken it to navy).

**Light and dark bands.** Like Colossal's pages, the site switches between light and dark stretches. Home: dark video, then light (Sections 01 and 02), dark (03), photo band (04), dark (05), light (06), dark footer. Inner pages: dark photo header, then a light band for the content. Who we are and Work with us also have bright bands (royal blue, violet, orange: see "Plans sections" above). A band is a `<div class="band theme-light">` (light) or `<div class="band">` (dark) around sections; the light colors are the `--light-...` variables in `src/styles/global.css`.

**Page-header captions.** Each page header has a thin line under the title with a hatched `//////` stripe and a short caption in [ brackets ], for example `[ 50–300 M · THE TWILIGHT ZONE ]`. Change or remove it with the `caption` text where the page uses `<PageHeader>`.

**The depth graphic (The Problem, Section 03 "Out of reach").** The whole section is the sea, drawn to scale from the surface to 400 m. Its top edge is the water surface, and the research ship sits on it, poking up into the light band above. A line stays in the middle of the screen as you scroll and reads out the depth and water pressure under it; the notes outside the band you are in fade back. The code is `src/components/DepthBands.astro`; all the words are in `src/data/problem.ts`:
- `depthBands`: the three bands (Content doc copy) and where each starts and ends (`from`, `to` in meters).
- `reasons`: the three "why it's hard to study" notes (Content doc copy), each with a `depth` (where it sits), an extra sourced `fact` and its `source` link.
- `depthMarks` (dashed lines at 40 m and 200 m), `depthRanges` (the bars beside the ruler), `pressureNote` and `talosaurNote`.
- Move anything up or down by changing its `depth`. Leave about 50 m between notes so they don't overlap on phones.
- Make the whole drawing taller or shorter: change `--m` (pixels per meter) at the top of the component's styles.
- The animals are cut-outs of Ocean Image Bank photos in `public/images/depth/` (transparent backgrounds; the jellyfish has a false-color edit and the squid the same teal-to-magenta colour sweep as the Work with us header). Replace a file with one of the same name. Each one's depth is in the `animals` list at the top of the component.
- The ship is a simple drawing inside the component (the `<svg class="ship">`), not a photo.

**Scroll-under effect.** Like Colossal, some pictures move at a slightly different speed from the page, and the next section slides over them. Add `data-parallax="0.4"` to a picture at the very top of a page (it lags behind the scroll), or `data-drift="100"` to anything else (it starts 100 px low and rises into place as you scroll past). Used on the Home video, every page header photo, the Home card grids and The Problem's big numbers. This only works because every `.band` has `position: relative` and its own background, so the next band paints on top. It's switched off for visitors with "reduce motion" turned on. The code is at the bottom of `src/layouts/BaseLayout.astro`.

**Team members:** the `photo` name in `src/data/team.ts`, saved in `public/images/team/` (portrait, about 800 × 1000 px). Until the file exists the card shows a panel with the person's initials.

**Who we are layout.** The person marked `lead: true` in `src/data/team.ts` (the founder) gets a row of their own at the top: a big portrait with their name in violet boxes over its corner and a dark description box beside it, filled from their `bio`. Everyone else is "The crew" (`src/components/CrewCollage.astro`), a loose collage in the spirit of the "Greatness is in our DNA" band on Colossal's Company page. First a slow scrolling strip of the team's disciplines (`src/components/Marquee.astro`) on the light page; then the page steps down into solid deep navy (the light runs on a little further on the right, so the edge is uneven) before the section title. Below the title the cards come in different sizes and shapes, set at different heights: the first person is the biggest, with a colour block behind one corner; the others each have a thin strip in their discipline's colour along one edge of the picture. "What we share" (`teamStatement` in `team.ts`) sits in the middle as a light box on a lime band that runs off the right edge of the screen, and the next card climbs into the box's empty bottom left corner. Where each card goes is the `slots` list at the top of `CrewCollage.astro` (it repeats every six people, so adding someone just works; some heights are worked out from the cards' widths so the cards keep the same relation to each other at every laptop width); on tablets the first person sits beside the next two, and on phones the cards stack at different widths on alternating sides, with one picture running edge to edge. Until a photo exists, the card shows the person's initials on a dark panel over a faint pattern for their discipline (a grid for mechanical, waves for hydraulics, a zigzag for electrical, dots for software, sonar rings for ocean). Each discipline has one colour (the `palette` list in `CrewCollage.astro`), used on the strip, the role tag and the panel's glow, and on the rings in the disciplines strip. Team photos can be any shape: each is cropped to its card (tall, square or wide), so upload them at least 1000 px on the long side with the face near the middle and some room around it. The colour is only in the blocks and strips: the photos themselves stay natural.

**News posts:** add `image: name.jpg` to the post and save the file in `public/images/news/`.

Other files in `public/images/`: `hero-poster.jpg` (the still behind the Home video) and `og-image.jpg` (the preview image when a link to the site is shared: the logo over a jellyfish, 1200 × 630).

## Logo and icons

The logo files are in `public/brand/` and come from the Talosaur brand pack (striped disc plus the lowercase wordmark):

| File | Where it shows |
|---|---|
| `talosaur-lockup-reverse.svg` | Top menu (light stripes for the dark background) |
| `talosaur-lockup-white.svg` | Giant logo over the Home video (inverted against the video, so keep it pure white) and the faint full-width logo in the footer |
| `talosaur-mark-reverse.svg` | The disc on its own, for anywhere a small mark is needed |

The browser-tab icons are `public/favicon.svg`, `public/favicon.png` (64 × 64) and `public/apple-touch-icon.png` (180 × 180, used when someone saves the site to a phone home screen): the disc on a navy rounded square. To update the logo, replace these files and keep the names.

## Add a news post

Create a new file in `src/content/news/`, for example `first-dive.md`. The filename becomes the post's web address, so use lowercase words and hyphens. Paste this in and edit it:

```md
---
title: First dive
date: 2026-11-20
---

One or two sentences about what happened.
```

- `date` is year-month-day. The site sorts newest first and shows it as "Nov 20, 2026".
- For something planned but not done yet, swap the `date:` line for `upcoming: true` and `dateLabel: Coming soon`. Upcoming posts show at the top.
- Optional photo: add `image: first-dive.jpg` and put the photo in `public/images/news/`.

- Linking to another page from inside a post? Write the plain address, for example `[the problem](/the-problem)`.

The News page (`src/pages/news.astro`) lists every post, and the Home page automatically shows the four newest, each linking to that post on the News page.

## Swap the Home page video

The full-screen video at the top of the Home page is the same video saved in two sizes, plus a still image. Each visitor downloads only one of the videos: big screens get a sharp 1080p file, phones get a lighter 720p one. So the video never slows the page down, nothing of it downloads until the rest of the page has loaded (the still image shows until then), and it pauses whenever it is scrolled out of view. Replace the files and keep the exact same names:

| File | What it is | Who gets it |
|---|---|---|
| `public/videos/hero-1080.mp4` | 1920 × 1080 MP4 (H.264), about 2.5 Mbit/s: 15 MB for the current 51-second loop | Screens 900 px wide or more |
| `public/videos/hero.mp4` | 1280 × 720 MP4 (H.264), about 1.3 Mbit/s: 8 MB for the current loop | Phones, small windows, and everything else |
| `public/images/hero-poster.jpg` | 1920 × 1080 still frame from the video | Shows while the page loads, and instead of the video for visitors who have "reduce motion" or data saver turned on |

The list of files lives at the top of `src/components/HeroVideo.astro`. If a file is missing it is skipped, and if both videos are missing the site shows the still image instead.

**Video file checklist**

- **Format:** MP4 (H.264 video) for both files. This plays on every browser, including iPhones. `hero.mp4` is the safety net, so always keep it.
- **Size on screen:** 1920 × 1080 (landscape, 16:9), and 1280 × 720 for `hero.mp4`.
- **Length:** 10 to 20 seconds. It loops, so pick a clip where the end flows back into the start.
- **No sound.** Browsers only autoplay muted video, and the site never plays audio. Remove the audio track to save space.
- **File size:** it's the heaviest thing on the site, so keep it small: about 2.5 Mbit/s for `hero-1080.mp4` and 1.3 Mbit/s for `hero.mp4` (a background loop doesn't need more; the current files are 15 MB and 8 MB). A shorter loop is the easiest way to make it lighter still: 20 seconds would be about 6 MB and 3 MB. With ffmpeg installed:
  `ffmpeg -i clip.mp4 -an -c:v libx264 -b:v 2500k -maxrate 5000k -bufsize 5000k -pix_fmt yuv420p -movflags +faststart hero-1080.mp4`
  `ffmpeg -i clip.mp4 -an -vf scale=1280:720 -c:v libx264 -b:v 1300k -maxrate 2600k -bufsize 2600k -pix_fmt yuv420p -movflags +faststart hero.mp4`
- **Framing:** on phones the left and right sides get cropped, so keep the subject near the center. The big TALOSAUR wordmark sits across the bottom in white over a dark fade, so it stays readable over light or dark shots. Very busy textures right under it make it harder to read.

**Poster image checklist:** JPG, 1920 × 1080, under 300 KB, ideally the first frame of the video.

**Compressing a video** with the free tool [ffmpeg](https://ffmpeg.org) (`brew install ffmpeg` on a Mac):

```sh
# 1080p MP4 for wide screens
ffmpeg -i original.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero-1080.mp4
# 720p MP4 for phones and everything else
ffmpeg -i original.mov -an -vf "scale=1280:-2" -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p -movflags +faststart hero.mp4
```

`-an` removes the sound, `-crf 26` sets the quality (higher number = smaller file, try 23 to 30), and `-movflags +faststart` lets it start playing before it fully downloads. To grab a frame as the poster (here, the frame 25.5 seconds in):

```sh
ffmpeg -ss 25.5 -i original.mov -frames:v 1 -vf "scale=1920:-2" -q:v 3 hero-poster.jpg
```

## Deploy (put the site online)

The site is hosted for free on **GitHub Pages** at the team's own domain, **https://talosaur.com/** (the domain is managed in Cloudflare). The old address, https://tafreshio.github.io/talosaur-site/, redirects there.

### How deploys work

You don't upload anything by hand. Every push to the `main` branch publishes the site:

1. You push to `main` on GitHub.
2. GitHub Actions runs the workflow in `.github/workflows/deploy.yml` (copied from [Astro's official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/)). It installs the packages, runs `npm run build`, and uploads the finished `dist/` folder.
3. A second step publishes that upload to GitHub Pages. The live site updates about a minute after you push.

**Watch a deploy:** open the repository on GitHub and click the **Actions** tab. A green check means it's live; a red X means the build failed and the old version of the site stays up. Click the red run to see the error. You can also re-run the deploy from there with **Run workflow**.

**Before you push**, run `npm run build` (and `npm run preview` to click around). If it fails on your computer, it will fail on GitHub too.

**One-time setting (already done):** in the repository's **Settings → Pages**, **Source** is set to **GitHub Actions**. If deploys ever stop appearing, check that first.

### The domain (talosaur.com)

The domain is managed in **Cloudflare**; the site itself is still built and hosted by GitHub Pages. Three things connect them:

1. **GitHub:** repository **Settings → Pages → Custom domain** is `talosaur.com`, with **Enforce HTTPS** ticked. (With the GitHub Actions deploy, no `CNAME` file is needed in the repository; GitHub ignores it.)
2. **Cloudflare DNS** (Cloudflare dashboard → talosaur.com → DNS → Records), all set to **DNS only** (grey cloud), so GitHub can issue the HTTPS certificate:

   | Type | Name | Content |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `tafreshio.github.io` |

   These come from GitHub's guide, [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. **`astro.config.mjs`:** `site` is `'https://talosaur.com'` and there is no `base`, because on its own domain the site sits at the root (`/news`, not `/talosaur-site/news`).

Internal links and image paths are written as plain addresses (`'/news'` in `src/data/site.ts`) and passed through `url()` from `src/lib/url.ts`. **If you add a new link or image in a page or component, wrap it in `url()`**: today it changes nothing, but if the site ever moves into a folder again, only `astro.config.mjs` needs editing. Outside links (`https://...`) and email links don't need it.

## Search engines (showing up on Google)

**Already built into the site (nothing to do when you add pages):**

- **Sitemap:** a list of every page, made on every build at `https://talosaur.com/sitemap-index.xml` by the `@astrojs/sitemap` integration (set up in `astro.config.mjs`). New pages appear in it automatically. The 404 page is left out.
- **`public/robots.txt`:** tells search engines they may read every page and where the sitemap is.
- **Page titles:** each page's tab title (and its link text in search results) is `Page name | Talosaur`. The Home page's title starts with "Talosaur" followed by a few words on what it is. Both are set in `src/layouts/BaseLayout.astro`.
- **Descriptions:** the short text under the link in search results. Pages pass their intro as `description` to `BaseLayout`; pages without one use the default in `BaseLayout.astro`.
- **Canonical links:** every page names its one official address (`https://talosaur.com/news/`), so `http://`, `www.` and `https://` versions count as the same page instead of competing with each other.
- **Structured data** (Home page only): hidden information in the page that tells Google the site is called "Talosaur", who runs it, where, and which logo and social accounts belong to it. When you fill in the Instagram, LinkedIn or YouTube links in `src/data/site.ts`, they're added to it automatically. To check it, paste `https://talosaur.com` into Google's [Rich Results Test](https://search.google.com/test/rich-results).
- **The 404 page** asks search engines not to list it (`noindex` in `src/pages/404.astro`).

**One-time setup outside the code:**

1. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)): add a **Domain** property for `talosaur.com`. Google gives you a TXT record; add it in Cloudflare (talosaur.com → DNS → Records → Add record, type TXT, name `@`) and click Verify.
2. In Search Console, open **Sitemaps** and submit `sitemap-index.xml`.
3. In Search Console, use **URL inspection** on `https://talosaur.com/` and click **Request indexing**.
4. **Bing Webmaster Tools** ([bing.com/webmasters](https://www.bing.com/webmasters)): sign in and import the site from Google Search Console. Bing also feeds DuckDuckGo and Yahoo.

**What helps most after that:** links to talosaur.com from places search engines already know. Put the link in the team's Instagram, LinkedIn and Twitch bios, in the GitHub repository's **About → Website** field, on the team's Texas A&M student organization listing, and on team members' LinkedIn profiles. A brand-new domain usually takes days to a few weeks to appear in results.

## Placeholders

See `PLACEHOLDERS.md` for everything that still needs real content.
