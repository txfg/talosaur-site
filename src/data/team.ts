// Team members on the Who we are page, in the order they appear.
//
// To add someone, copy one { ... } block and edit it.
// photo:    filename in public/images/team/ (at least 1000 px on the long side, face near the middle).
//           Each card crops it to its own shape (tall, square or wide). Until the file exists, the
//           card shows a panel with the person's initials instead.
// linkedin: full LinkedIn URL, or leave as '' to hide the link
// lead:     true for the one person shown on their own at the top, with a description box beside them
// bio:      the text in that description box (only used for the lead)

export const teamIntro =
  "We're a team of students from Texas A&M and UT Austin. Most of us build in College Station.";

export interface TeamMember {
  name: string;
  role: string;
  majorYear: string;
  photo: string;
  linkedin: string;
  lead?: boolean;
  bio?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Fernando Guzman',
    role: 'Founder',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'fernando-guzman.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
    lead: true,
    // In Fernando's own words (first person)
    bio: 'I started Talosaur to discover a fish, the Talosaur, and to allow for cheaper ocean surveying. I think that when we build an AUV to get down to the mesopelagic region, we will show how efficient engineering can really be. Also, my team is very good.',
  },
  {
    name: 'Sam Cakici',
    role: 'Lead Mechanical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'sam-cakici.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Kabir Muzumdar',
    role: 'Hydraulics Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'kabir-muzumdar.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Nicholas Khu',
    role: 'Electrical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'nicholas-khu.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Omeed Tafreshi',
    role: 'Software Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'omeed-tafreshi.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Dominick Chu',
    role: 'Ocean Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'dominick-chu.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
  {
    name: 'Alvin Zheng',
    role: 'Mechanical Engineer',
    majorYear: '[Major, year]', // PLACEHOLDER
    photo: 'alvin-zheng.jpg',
    linkedin: '', // PLACEHOLDER: LinkedIn URL (optional)
  },
];

// A few lines about the team as a whole (not about one person). They sit in the middle of the crew
// on the Who we are page, after the first three people, in a light box on a lime band. Words between ** and ** get a coloured box.
export const teamStatement = {
  tag: 'What we share',
  headline: 'Many disciplines, **one vehicle**, one\u00a0question: **what lives down\u00a0there?**', // no-break spaces keep "question:" and "there?" off lines of their own
  text: "None of us could build Turtle alone. Every part depends on another, and nothing counts until it all works together in the water. So we design, build and test as one team, a\u00a0step at a\u00a0time on the way from the pool to the reef. That's how a group of students gets to see a part of the ocean that is barely watched.",
  signoff: 'The Talosaur team',
};
