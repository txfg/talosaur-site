// Text for The Problem page (copy from the Content doc).

// Sources for every number and fact on The Problem page. Each shows as a small [ link ] under what it backs up.
export const sources = {
  zones: { label: 'Smithsonian', href: 'https://dashboard.si.edu/newsdesk/releases/smithsonian-researchers-name-new-ocean-zone-rariphotic' },
  robots: { label: 'Deep Trekker', href: 'https://www.deeptrekker.com/learn/rov-buying-guide' },
  ship: { label: 'Dialogue Earth', href: 'https://dialogue.earth/en/ocean/scientists-are-becoming-ocean-hitchhikers-to-fill-data-gaps/' },
  diving: { label: 'Scuba Diving', href: 'https://www.scubadiving.com/why-is-130-feet-depth-limit-for-recreational-scuba-diving' },
  fgb: { label: 'NOAA', href: 'https://flowergarden.noaa.gov/about/mesophotic.html' },
  light: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/light_travel.html' },
  pressure: { label: 'NOAA', href: 'https://oceanservice.noaa.gov/facts/pressure.html' },
  // NOAA's 2023 Flower Garden Banks National Marine Sanctuary poster (also the source of its photos)
  poster: { label: 'NOAA poster', href: 'https://sanctuaries.noaa.gov/media/posters/2023-flower-garden-banks-national-marine-sanctuary-poster.pdf' },
  // NOAA Ocean Exploration, "How much of the ocean has been explored?" (updated April 20, 2026):
  // 28.7% of the seafloor mapped to modern high-resolution standards; explorers have seen less than
  // 0.001% of the deep seafloor (deeper than 200 m), about the size of Rhode Island; an estimated
  // 700,000 to 1 million ocean species, roughly two-thirds or more not yet discovered or described;
  // about 2,000 new species accepted each year
  explored: { label: 'NOAA', href: 'https://oceanexplorer.noaa.gov/facts/explored.html' },
  // Mora et al. 2011, "How many species are there on Earth and in the ocean?", PLoS Biology:
  // about 2.2 million ocean species, 91% still awaiting description
  mora: { label: 'PLoS Biology', href: 'https://doi.org/10.1371/journal.pbio.1001127' },
  // Liu et al. 2022, "Undescribed species have higher extinction risk than known species",
  // Conservation Letters: 30% of vertebrates described 2011–2020 are threatened, against 11.9% of those
  // described 1758–1767 (summary: phys.org/news/2022-03-newly-species-higher-extinction.html)
  liu: { label: 'Conservation Letters', href: 'https://doi.org/10.1111/conl.12876' },
  // Ocean Census: fewer than 250,000 ocean species known; some may go extinct before they're found
  census: { label: 'Ocean Census', href: 'https://oceancensus.org/how-many-ocean-species-remain-undiscovered/' },
  // Strona (University of Helsinki), 360info, 2022: knowing a species exists isn't knowing if it's
  // endangered; DNA traces can't replace a formal species description
  strona: { label: '360info', href: 'https://360info.org/a-rose-by-any-other-name-would-be-as-endangered/' },
  // Bell et al. 2025, Science Advances (press release on EurekAlert): five countries (the US, Japan,
  // New Zealand, France and Germany) made 97% of all deep-sea submergence observations, "due to the
  // high cost of ocean exploration"
  bell: { label: 'EurekAlert', href: 'https://www.eurekalert.org/news-releases/1082535' },
  // NOAA's long-term monitoring data for Flower Garden Banks (data.gov): "In 2015, monitoring efforts were
  // expanded to include the deeper mesophotic habitat (34-64 m)", surveyed with a remotely operated vehicle;
  // fish surveys are annual. The 2016 annual report describes a localized mortality event at East Flower
  // Garden Bank (https://sanctuaries.noaa.gov/science/conservation/east-west-flower-garden-banks-long-term-monitoring-2016.html)
  fgbDeep: { label: 'NOAA', href: 'https://catalog.data.gov/dataset/2016-flower-garden-banks-national-marine-sanctuary-long-term-monitoring-of-the-reef-crest-and-m' },
  // NOAA JetStream, "Layers of the ocean": the thermocline, where temperature falls quickly with depth,
  // between the warm mixed surface layer and the cold deep
  layers: { label: 'NOAA', href: 'https://noaa.gov/jetstream/ocean/layers-of-ocean' },
};

export const problemIntro =
  "Between 50 and 300 meters lies the ocean's twilight zone. It's full of marine life, yet few people ever get to look at it.";

// ---------------------------------------------------------------- Section 01: Barely explored
// How little of the ocean has been mapped and seen, and how many of its animals still have no name.
// Three still pictures, one per figure:
//   mapped  a dotted Earth with 28.7% of its sea dots lit (public/images/figures/globe-mapped.svg,
//           made by stills_site/make_globe.py; the lit dots show the share, not the places)
//   seen    1,000 dots and a magnifier showing one of them holds 100 more, one lit: 1 in 100,000 is
//           0.001% (src/components/SeenPorthole.astro). The football field line in the aside is
//           worked out here: a field with end zones is 360 x 160 ft = 57,600 sq ft; 0.001% of that is
//           0.58 sq ft, less than a letter-size sheet (8.5 x 11 in = 0.65 sq ft)
//   named   a school of 100 sea animals: 9 named by any count, 24 more by NOAA's, the rest still
//           unnamed (src/components/SpeciesSchool.astro)
export const explored = {
  mapped: {
    label: 'Mapped',
    value: '28.7%',
    caption: 'of the seafloor has been mapped in detail, as of April 2026. The rest is known only roughly, from satellites.',
    sources: [sources.explored],
  },
  seen: {
    label: 'Seen',
    value: '<0.001%',
    caption: 'of the deep seafloor has ever been seen. Split it into 1,000 dots, then split one dot into 100: everything anyone has looked at would fit inside a single speck.',
    aside: 'On a football field, that would be less than a sheet of paper. In real life, it is an area about the size of Rhode Island.',
    sources: [sources.explored],
  },
  named: {
    label: 'Named',
    value: '67–91%',
    caption: "of ocean species have yet to be formally described: about two in three by NOAA's count, up to nine in ten by another estimate.",
    sources: [sources.explored, sources.mora],
  },
  note: 'About 2,000 new ocean species are named each year. At that pace, naming the rest would take centuries.',
  noteSource: sources.explored,
};

// Why formally describing a species matters (under the figures in Section 01)
export const naming = {
  title: 'Why naming a species matters',
  intro:
    'Formally describing a species means giving it a scientific name, keeping a reference specimen and publishing what sets it apart from every other species. It sounds like paperwork, but a lot depends on it.',
  reasons: [
    {
      title: "You can't protect what you can't name",
      text: "Whether an animal is endangered is assessed species by species. DNA traces in the water can show something is there, but they don't replace a formal description.",
      source: sources.strona,
    },
    {
      title: 'The newest names are the most at risk',
      text: 'Of vertebrates described in 2011–2020, 30% are threatened, against 12% of those described in 1758–1767, the first decade of scientific names.',
      source: sources.liu,
    },
    {
      title: "Some may vanish before they're found",
      text: 'With the ocean changing fast, some species may be going extinct before anyone finds them, let alone names them.',
      source: sources.census,
    },
  ],
};

// ---------------------------------------------------------------- Section 02: What it takes
// Big number callouts. "value" is the big text, "caption" explains it.
export const stats = [
  {
    value: '50–300 m',
    caption: "The ocean's twilight zone. Too deep for divers, too costly to revisit.",
    // Smithsonian: deep reefs run through the mesophotic (40–150 m) and rariphotic (130–309 m) zones
    source: sources.zones,
  },
  {
    value: '$50K–$1M+',
    caption: 'What commercial underwater robots cost: $50,000 to over $1 million.',
    // Deep Trekker: inspection and survey ROVs $15,000–$300,000; work-class ROVs $250,000 up to millions
    source: sources.robots,
  },
  {
    value: '$10K+',
    unit: 'a day',
    caption: 'What a research ship costs to run: tens of thousands of dollars a day.',
    // Dialogue Earth (2024): "running a research ship can easily cost tens of thousands of dollars a day or more"
    source: sources.ship,
  },
];


// Why the twilight zone is hard to study. These sit inside the depth graphic, at "depth" meters.
// "title" and "text" are the Content doc copy; "fact" is an extra sourced line added under it.
export const reasons = [
  {
    depth: 92,
    title: 'Too deep for divers.',
    text: 'Most of this zone is beyond safe diving limits.',
    fact: 'Recreational scuba divers stop at 40 m (130 ft), a limit that goes back to the U.S. Navy in the 1950s.',
    sources: [sources.diving],
  },
  {
    depth: 136,
    title: 'Too expensive to visit\u00a0often.', // no-break space: "often." never sits alone
    text: 'Remotely operated vehicles need pilots and boats, commercial underwater robots cost $50,000 to over $1 million, and ship time costs tens of thousands of dollars a day.',
    fact: '',
    sources: [sources.robots, sources.ship],
  },
  {
    depth: 210,
    title: 'Close to home.',
    text: 'Deep reefs off Texas and Louisiana, including Flower Garden Banks, sit in this zone.',
    fact: "Most of the sanctuary's habitats lie 40 to 221 m down, and in the past 20 years researchers have found new species of shrimp, squat lobster and black coral there.",
    sources: [sources.fgb],
  },
];

// Thin lines across the water at an exact depth
export const depthMarks = [
  { depth: 40, text: 'Recreational dive limit', source: sources.diving },
  { depth: 200, text: 'Rarely any significant sunlight below here', source: sources.light },
];

// Bars beside the ruler showing a depth range
export const depthRanges = [
  { from: 18, to: 50, label: 'Reef · 18–50 m', source: sources.fgb },
  { from: 40, to: 221, label: 'Flower Garden Banks · 40–221 m', source: sources.fgb },
];

// The last note, in the deep band
export const pressureNote = {
  depth: 335,
  title: 'About 31 atmospheres.',
  text: 'Every 10 m of seawater adds about one atmosphere of pressure. At 300 m it is about 31 times the pressure at the surface.',
  source: sources.pressure,
};

// Next to the Talosaur mark in the twilight zone (Content doc, Home hero text)
export const talosaurNote = {
  depth: 268,
  text: 'Talosaur is a Texas-based student team building a low-cost underwater robot that finds, follows and films marine life there.',
};

// Depth bands graphic, top to bottom. The graphic is drawn to scale:
// "from" and "to" are depths in meters and decide where each band starts and ends.
// The last band has no real bottom, so "to" is just where the drawing stops.
export const depthBands = [
  { depth: '0–50 m', name: 'Sunlit', text: 'Within reach of divers.', zone: 'sunlit', from: 0, to: 50 },
  { depth: '50–300 m', name: 'Twilight zone', text: 'Too deep for divers, too costly to revisit.', zone: 'twilight', from: 50, to: 300 },
  { depth: '300 m+', name: '', text: 'Reached by research ships and deep vehicles.', zone: 'deep', from: 300, to: 380 },
];

// ---------------------------------------------------------------- Section 04: Habitat
// The map is public/images/sections/habitat-map.png; the two labels on it are placed in
// src/pages/the-problem.astro. The first paragraph and the new facts come from NOAA's 2023 sanctuary
// poster (sources.poster). The second is written from sources.diving, sources.fgbDeep (ROV monitoring of
// the deeper reefs since 2015, 34–64 m, and the 2016 die-off on East Flower Garden Bank) and sources.fgb
// (deep reefs give homes to commercially and recreationally valuable fish).
export const habitat = {
  title: 'Flower Garden Banks',
  paragraphs: [
    'Flower Garden Banks National Marine Sanctuary covers 17 reefs and banks 80 to 125 miles off the Texas and Louisiana coast. The coral reefs on top are among the healthiest in the world, but they make up only 2% of the sanctuary. Most of it lies deeper, in the twilight zone, on reefs of black corals, octocorals and sponges. Reef fish, manta rays, sea turtles and sharks live across the sanctuary.',
    'The deeper reefs start below the 40 m limit for recreational divers, so they are mostly reached by remotely operated vehicles on research trips. The sanctuary added them to its yearly monitoring in 2015, but only down to 64 m. Filming more often, and further down, could show how these reefs change from year to year, how they recover after events like the 2016 die-off on East Flower Garden Bank, and how the fish that depend on them are doing.',
  ],
  facts: [
    { label: 'Reef depth', value: '40–221 m', source: sources.fgb },
    { label: 'Off the coast', value: '80–125 miles south of Texas and Louisiana', source: sources.poster },
    { label: 'Protected area', value: '160 square miles', source: sources.poster },
    { label: 'Reef monitoring', value: 'Every year since 1989, on the shallow reefs', source: sources.poster },
    // straight line from College Station to East and West Flower Garden Bank (worked out from their coordinates)
    { label: 'From College Station', value: 'About 400 km (250 miles)' },
  ],
};

// Flower Garden Banks in numbers, for the story band between the habitat and the animals
export const fgbStats = [
  { title: '17', text: 'Reefs and banks in the sanctuary' },
  { title: '160', text: 'Square miles protected' },
  { title: '2%', text: 'Is the shallow coral reef divers know. Most of the rest lies deeper.' },
];

// Who lives here: four animals from the poster, each with a NOAA photo (public/images/sections/fgb-*.jpg)
export const fgbSpecies = [
  { image: 'fgb-black-coral.jpg', tag: 'NOAA / UNCW-UVP', title: 'Black coral', text: 'Lives on the deeper reefs. New species turn up during deep-sea exploration; this one was first described in 2017.' },
  { image: 'fgb-marbled-grouper.jpg', tag: 'G.P. Schmahl · NOAA', title: 'Marbled grouper', text: 'A shy fish that prefers deeper reefs, so divers rarely see one.' },
  { image: 'fgb-manta-ray.jpg', tag: 'G.P. Schmahl · NOAA', title: 'Manta ray', text: 'A common sight in the sanctuary. Each one can be told apart by the markings on its belly.' },
  { image: 'fgb-trunkfish.jpg', tag: 'Emma Hickerson · NOAA', title: 'Golden smooth trunkfish', text: 'One of the only places in the world to find the golden form of this fish.' },
];

// ---------------------------------------------------------------- Section 03: At a glance
// The twilight zone as a fact sheet (Colossal's mammoth page style).
export const glance = [
  { label: 'Depth', value: '50–300 m' },
  { label: 'Sunlight', value: 'Rarely any significant sunlight below 200 m', source: sources.light },
  { label: 'Pressure', value: 'About 6 to 31 times the surface', source: sources.pressure },
  { label: 'Temperature', value: 'Falls fast with depth, from warm surface water towards the cold deep', source: sources.layers },
  { label: 'Who lives here', value: 'At Flower Garden Banks: black corals, octocorals, sponges and reef fish', source: sources.poster },
  { label: 'Deep-reef surveys', value: 'Once a year at Flower Garden Banks since 2015, by ROV, and only to 64 m', source: sources.fgbDeep },
];
