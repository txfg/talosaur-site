// Small text helpers for the [ bracket ] tags.

// Glues each " · " separator to the word before it (with a no-break space), so when a tag wraps
// onto a second line on a phone, the line breaks after a dot and never starts with one:
// "Research · Conservation · Fisheries" -> "Research · Conservation ·" / "Fisheries"
export const keepDots = (text: string) => text.replaceAll(' · ', '\u00a0· ');

// Glues a number to its unit with a no-break space, so "200 m" never splits across two lines:
// "below 200 m" -> "below 200 m" (the space before "m" can't break)
// It also keeps a range in one piece ("50–300" never breaks after its dash), with an invisible
// word joiner after the dash.
export const keepUnits = (text: string) =>
  text.replace(/(\d)–(\d)/g, '$1–\u2060$2').replace(/(\d) (m|km|ft|atm)\b/g, '$1\u00a0$2');
