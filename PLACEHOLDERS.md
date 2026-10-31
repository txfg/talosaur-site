# Placeholders

Everything the Content doc leaves in [brackets], and the file where you fill it in, plus every photo the site
still needs. A missing photo shows as a dark "[ Photo to come ]" panel that says what goes there; save the photo
under the file name below and the panel turns into the photo (no code change). The README's "Add or swap a photo"
section explains sizes.

| Placeholder | Where it shows | File to edit |
|---|---|---|
| Instagram and YouTube links | Footer, "Connect with us" (plain text until filled in) | `src/data/site.ts` (`socialLinks`) |
| `[Major, year]` (all 7 people) | Who we are | `src/data/team.ts` |
| Team photos (initials show until a photo is added) | Who we are | `public/images/team/` (file names are in `src/data/team.ts`) |
| Team LinkedIn links (optional, hidden until filled in) | Who we are | `src/data/team.ts` (`linkedin`) |
| `[Photographer and source for these four photos.]` (zoanthids, porcelain crab, soft coral, pygmy seahorse headers) | Image credits page | `src/pages/image-credits.astro` |
| `[photographer and source]` for the brain coral photo (The Problem, Habitat) | Image credits page | `src/pages/image-credits.astro` |
| `[photographer and source]` for the jellyfish photo (The Problem, page header) | Image credits page | `src/pages/image-credits.astro` |
| `[photographer and source for each]` for the six photos in the plans sections (reef from the air, egrets, glacier front, whale, dolphins, reef wall) | Image credits page | `src/pages/image-credits.astro` |
| `[ Date ]` for "Project kicks off" (its line is now written from Fernando's description; change it if you like) | News | `src/content/news/project-kicks-off.md` |
| `[Sources still to find for some homepage video stills...]` (the known ones are now credited) | Image credits page | `src/pages/image-credits.astro` |

### Photos still needed ("photo to come" panels)

| Photo | Where it shows | Save as (in `public/images/`) | Shape |
|---|---|---|---|
| The whole team | Home, Featured "Who we are" card | `home-team.jpg` | 16:9 |
| Team members at work | Home, Featured "Open positions" card | `home-positions.jpg` | 16:9 |
| Turtle mid-build (hull closed) | Home, Featured "Our build log" card | `home-build-log.jpg` | 16:9 |
| The live build stream setup | Home, "Talosaur Live" card | `home-live.jpg` | 16:9 |
| A team portrait | Home, "Meet the team" card | `home-meet-the-team.jpg` | 16:9 |
| Team portraits (initials show until then) | Who we are | `team/` (names in `src/data/team.ts`) | Fernando 4:5, Sam 3:4, Kabir 1:1, Nicholas 4:5, Omeed 4:3, Dominick 3:4, Alvin 1:1 |
| A pool test, Lake Bryan, Lake Travis, Galveston (the Offshore stop has a NOAA reef photo) | News, "Where we test" (small photo beside each stop) | `sections/test-pool.jpg`, `test-lake-bryan.jpg`, `test-lake-travis.jpg`, `test-galveston.jpg` | 4:3 |
| An offshore platform in the Gulf | Work with us, Offshore energy card | `sections/aud-offshore.jpg` | 4:5 |
| The team at a build day | Positions, "Life on the team" | `sections/team-build.jpg` | 16:10 |
| Hands on a part (optional: adds the small framed photo) | Positions, "Life on the team" | `sections/team-lab.jpg` | 1:1 |
| Turtle in the pool | Donate, "Where it goes" Testing card | `sections/support-testing.jpg` | 4:3 |

## To confirm

- **Text written to fill placeholders (October 2026).** These were written from the Content doc, the rest of the site and the sources linked on it, so change anything that doesn't match how the team works or talks: The Problem's second Habitat paragraph and two At a glance rows (Temperature, Deep-reef surveys, both sourced); the four Work with us cards and the "20 minutes" band; the three Donate "Where it goes" cards and the "Affordable ocean exploration" band; Positions "Life on the team"; the five test stops on News (in the order of the team's test ladder, with no dates); the "Project kicks off" line; and the homepage video credits. Nothing in them promises dates, prices or results.
- **The new figures** (The Problem, Section 01 "Barely explored", the two beside the Home intro, and the box under FIND / FOLLOW / FILM). Each links to its source, checked October 2026: NOAA Ocean Exploration's "How much of the ocean has been explored?" (updated April 20, 2026) for 28.7% mapped, under 0.001% of the deep seafloor seen, about two-thirds of ocean species not yet described and about 2,000 named a year; Mora et al. 2011 for the 91% estimate; Liu et al. 2022 for the threatened shares; Ocean Census and 360info for why naming matters; the Science Advances study (via EurekAlert) for the 97% of deep-sea observations made by five countries. The 1,000 dots with 100 in one (1 in 100,000 = 0.001%) and the football field line are worked out from NOAA's under 0.001%: 0.001% of a 360 x 160 ft field is 0.58 sq ft, less than a letter-size sheet (0.65 sq ft). On the globe, the lit dots show the share mapped, not where. Seabed 2030 updates the mapped share every year or so; change `explored` in `src/data/problem.ts` and `MAPPED` in `stills_site/make_globe.py` when it does. "Centuries" is worked out from NOAA's numbers (about two-thirds of 700,000 or more species, at 2,000 a year).
- **"What we're doing" on Home** (`plan` in `src/data/home.ts`): the headline, paragraph and four steps were written for the site from the Content doc's Home text, the Turtle and eDNA cards, and the Donate and Work with us copy. Check that the step statuses ("Building now", "In development", "Next", "The goal") match where things really stand, and reword anything you like. The same goes for the "What we'll offer" panel under it (vehicles to buy, research to use, surveys on request: `plan.offer`).
- **"What we share" on Who we are** (`teamStatement` in `src/data/team.ts`): the headline ("Many disciplines, one vehicle, one question: what lives down there?") and the paragraph under it were written for the page, not taken from the Content doc. Rewrite them in the team's own words if you like.
- **The Flower Garden Banks poster drawing** (The Problem, the band "Most of it lies in the twilight zone", `public/images/sections/fgb-poster-art.jpg`). It is by Kathryn Robertson (an independent artist), Matt McIntosh/NOAA and Melissa Cook, so unlike the NOAA staff photos it is not automatically public domain, and NOAA's poster page doesn't say how the art may be reused. Ask NOAA's Office of National Marine Sanctuaries (or the artist) for an OK before launch. It is credited under the picture and on the Image credits page. To take it out, change `variant="art"` back to `variant="stats"` in `src/pages/the-problem.astro` and delete the `art={{ ... }}` lines.
- **New sections written by Claude (October 2026).** Who we are: "Every ocean has a twilight zone" (the route First / Next / Later and its paragraph) and "A small crew, for now" (the team today and once Turtle works). Work with us: "Built around your questions" (example questions and what early partners get), "What we bring back" (four deliverables), "How a project works" (four steps), "Ways to work together" (survey partner, field partner, advisor, sponsor) and "Good to know" (six short answers, including who owns the footage and whether partners can join a dive: say what the team actually wants). All written as plans, with no dates or promises; check that the deliverables and steps match what the team actually wants to offer. The copy is at the top of `src/pages/who-we-are.astro` and `src/pages/work-with-us.astro`.
- **The six photos for the plans sections** (`public/images/sections/regions-*`, `growth-*`, `work-coral.jpg`). Supplied by the team; note who took each one and where it came from so they can be credited, and check they may be used (and, for the reef and the lily pads, edited).
- **The jellyfish photo** (The Problem, page header, `public/images/pages/the-problem.jpg`, colour-shifted by `stills_site/make_problem_jelly.py`). Supplied by the team; note where it came from and who took it so it can be credited, and check it may be used and edited.
- **The brain coral photo** (The Problem, Habitat, `public/images/sections/habitat-pano.jpg`). Supplied by the team; note where it came from and who took it so it can be credited. If it is NOAA's photo pl23_sanc2433 (Emma Hickerson, Flower Garden Banks National Marine Sanctuary) it is public domain.
- **Ocean Image Bank photos** (the animals in The Problem depth graphic): free for non-commercial use with credit to the photographer and Ocean Image Bank. Check that the site counts as non-commercial (it has a Donate page, but no payments). Credits are on the Image credits page.
- **Sources on The Problem page.** Every number and fact now links to a source (the `sources` list at the top of `src/data/problem.ts`). Give them a read before launch. The closest match for the robot cost range is Deep Trekker's ROV buying guide (inspection ROVs $15,000 to $300,000, work-class ROVs $250,000 up to millions); swap in the team's own source if the $50,000 figure came from somewhere specific.
- **New section titles** ("Barely explored", "What it takes", "Out of reach" and "Why naming a species matters" on The Problem, "In the works" on Home, "At a glance", "Habitat", "Who we work with", "Where it goes", "Life on the team", "Where we test" and its stops) and the small photo tags were written as stand-ins, not Content doc copy. The big lines in the story bands come from Content doc copy ("Find / Follow / Film" from the Home intro, "A Texas-based student team" from the Home card, "Affordable ocean exploration" from the Donate intro, "20 minutes" from the Work with us intro, the Positions headline), but their small [ tags ] and captions were written for the bands. Change them where each band is.
- **Patch captions** ("On deck", "Making parts" and so on) are short labels written for the inset photos, not Content doc copy. Change them where each page uses `<Patch>`.
