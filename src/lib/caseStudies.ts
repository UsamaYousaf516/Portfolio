export type CaseStudy = {
  slug: string;
  title: string;
  /** Second half of the title, shown in orange. */
  titleAccent?: string;
  categories: string[];
  ticker: string[];
  heroImage: { label: string; src?: string };
  overview: string;
  context: string;
  info: { k: string; v: string }[];
  challenge: string;
  solution: string;
  features: string[];
  architectureNote: string;
  architecture: { layer: string; title: string; d: string }[];
  contribution: string[];
  gallery: { label: string; src?: string }[];
  impact: string;
  learned: string;
  next: { title: string; href: string };
};

// TODO(usama): replace the bracketed text with real details.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'yaro-voicely',
    title: 'Yaro',
    titleAccent: '/ Voicely',
    categories: ['Social Audio', 'Realtime', 'Mobile'],
    ticker: ['Voice Rooms', 'Live Chat', 'Virtual Gifts', 'In-App Currency', 'Admin Tooling', 'Realtime'],
    heroImage: { label: 'Hero composite — 5–7 app screens angled on warm backdrop' },
    overview:
      'A realtime social audio platform featuring voice rooms, live chat, virtual gifts, in-app currency, social interactions and extensive admin tooling.',
    context:
      '[Two or three sentences of context: who the product is for, what stage it was at when you joined, and what the team needed from you.]',
    info: [
      { k: 'Role', v: 'Flutter Developer' },
      { k: 'Platform', v: 'iOS · Android · Web admin' },
      { k: 'Duration', v: '[e.g. 14 months]' },
      { k: 'Industry', v: 'Social / Entertainment' },
      { k: 'Technology', v: 'Flutter, Agora, ZegoCloud, WebSockets, Firebase, IAP' },
    ],
    challenge:
      'Live voice rooms, chat, gifting and a virtual currency all have to stay in sync across many concurrent users — while purchases stay reliable and moderators keep control of what happens in each room.',
    solution:
      'A Flutter client on top of Agora and ZegoCloud for audio, WebSockets for room events and chat, Firebase for identity and data, and store-native in-app purchases feeding a server-validated coin balance.',
    features: [
      'Multi-speaker voice rooms',
      'Live room chat',
      'Animated virtual gifts',
      'In-app coin currency',
      'Follows, friends & profiles',
      'Push notifications',
      'Room moderation controls',
      'Admin tooling for users & content',
    ],
    architectureNote: '[Confirm or adjust the layers below to match the real system.]',
    architecture: [
      { layer: 'CLIENT', title: 'Flutter app', d: 'Feature-based modules, state management and a shared design system across iOS and Android.' },
      { layer: 'MEDIA', title: 'Agora · ZegoCloud', d: 'Low-latency audio channels, speaker roles and in-room signalling.' },
      { layer: 'REALTIME', title: 'WebSockets', d: 'Room events, chat messages, gift broadcasts and presence.' },
      { layer: 'DATA & PAYMENTS', title: 'Firebase · IAP', d: 'Auth, user data, notifications and store purchases credited to the coin balance.' },
    ],
    contribution: [
      'Built and maintained core Flutter features: voice rooms, chat and gifting flows.',
      'Integrated Agora and ZegoCloud audio SDKs and handled room state and reconnection.',
      'Implemented in-app purchases and the coin wallet experience.',
      'Contributed to admin tooling for moderation and user management.',
      'Debugged, profiled and shipped production releases.',
    ],
    gallery: [
      { label: 'Voice room — speakers, listeners, gift animation' },
      { label: 'Wallet / coin store' },
      { label: 'Profile + social graph' },
      { label: 'Admin tooling (web)' },
    ],
    impact: '[Real outcomes only: release dates, store availability, user or room counts, stability improvements — whatever you can state accurately.]',
    learned:
      '[What building realtime audio and a virtual economy taught you — state sync, reconnection handling, purchase validation, moderation needs.]',
    next: { title: 'Restart Fitness', href: '/projects' },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
