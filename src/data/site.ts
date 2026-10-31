// Site-wide links used by the header and footer.
// Edit this file to rename a link, change where it goes, or fill in a placeholder.

// Email addresses. info@ is the main one (footer, privacy page); sales@ takes anything about money
// (the Donate button); support@ takes technical questions. All three are listed on Work with us.
export const teamEmail = 'info@talosaur.com';
export const financeContact = 'sales@talosaur.com'; // an email address or a form link (https://...)
export const supportEmail = 'support@talosaur.com';

// The contact list on Work with us and in the footer, in order: what each address is for, then the address
export const contactEmails = [
  { label: 'General inquiries', email: teamEmail },
  { label: 'Sales, donations and sponsorship', email: financeContact },
  { label: 'Technical questions', email: supportEmail },
];
export const location = 'College Station, Texas';
export const twitchUrl = 'https://www.twitch.tv/nand0guz'; // live build stream (footer and the Home "Talosaur Live" card)

// Top navigation, in order. Numbers ("01", "02"...) are added automatically.
export const mainNav = [
  { label: 'Who we are', href: '/who-we-are' },
  { label: 'The Problem', href: '/the-problem' },
  { label: 'News', href: '/news' },
  { label: 'Work with us', href: '/work-with-us' },
  { label: 'Positions', href: '/positions' },
  { label: 'Donate', href: '/donate' },
];

// Footer columns
export const footerColumns = [
  {
    title: 'Explore Talosaur',
    links: [
      { label: 'Who we are', href: '/who-we-are' },
      { label: 'The Problem', href: '/the-problem' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Can we help?',
    links: [
      { label: 'Work with us', href: '/work-with-us' },
      { label: 'Positions', href: '/positions' },
      { label: 'Donate', href: '/donate' },
    ],
  },
];

// Social links. Leave href empty ('') until the account exists; it shows as plain text.
export const socialLinks = [
  { label: 'Instagram', href: '' }, // PLACEHOLDER: Instagram URL
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/talosaur' },
  { label: 'YouTube', href: '' },   // PLACEHOLDER: YouTube URL
  { label: 'Twitch', href: twitchUrl }, // the live build stream
];

// Bottom row of the footer
export const footerLegal = [
  { label: 'Image credits', href: '/image-credits' },
  { label: 'Privacy', href: '/privacy' },
];

// True if a value is still a [bracket] placeholder
export const isPlaceholder = (value: string) => value.trim().startsWith('[');

// Turns an email address or web address into a link. Returns null for [bracket] placeholders.
export const contactHref = (value: string) => {
  if (isPlaceholder(value)) return null;
  return value.includes('@') && !value.startsWith('http') ? `mailto:${value}` : value;
};
