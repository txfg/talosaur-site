// Open positions on the Positions page. Edit this list to match what the team needs.
// To add a role, copy one { ... } block. To close a role, delete its block.

export const positionsHeadline = 'Help us explore the twilight zone';

export const positionsIntro =
  "We're looking for motivated students who want to build something real. No ocean experience needed.";

// The Google Form the "Apply now" button opens
export const applicationFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeqdfpwJna-HFkx8cruwIPdnk9MsNprZIsnHh6OidtGsZZL4w/viewform';

export const positions = [
  {
    title: 'Embedded Software Engineer',
    whatYoullDo: 'Write microcontroller code for motor control, sensors and safety systems',
    skills: 'C/C++, Arduino or ESP32',
  },
  {
    title: 'Computer\u00a0Vision\u00a0/\u00a0ML Engineer', // no-break spaces: "Computer Vision / ML" stays on one line
    whatYoullDo: 'Help the robot spot and track marine animals in video',
    skills: 'Python, PyTorch, OpenCV',
  },
  {
    title: 'Mechanical Engineer',
    whatYoullDo: 'Design and test the frame, mounts and waterproof parts',
    skills: 'CAD (SolidWorks, Fusion), 3D printing',
  },
  {
    title: 'Marine Biology Researcher',
    whatYoullDo: 'Help us choose study sites and identify what we film',
    skills: 'Marine biology or ecology coursework',
  },
  {
    title: 'Business Development',
    whatYoullDo: 'Talk to potential users and research the market',
    skills: 'Interest in startups, good communication',
  },
  {
    title: 'Web and Media',
    whatYoullDo: 'Keep the website updated, edit build videos and photos',
    skills: 'Web basics, video editing',
  },
];
