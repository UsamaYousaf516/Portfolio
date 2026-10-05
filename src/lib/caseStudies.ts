import { nochiScreens } from './nochi';
import { ludinoAppUrl, ludinoScreens } from './ludino';
import { rankingEditorCaseStudy } from './rankingVideoEditor';

export type CaseStudy = {
  slug: string;
  title: string;
  /** Second half of the title, shown in orange. */
  titleAccent?: string;
  previousName?: string;
  appUrl?: string;
  channelUrl?: string;
  results?: { value: string; label: string }[];
  resultsNote?: string;
  categories: string[];
  ticker: string[];
  heroImage: { label: string; src?: string };
  heroScreens?: { src: string; alt: string }[];
  galleryLayout?: 'screens' | 'showcase' | 'desktop';
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

export const caseStudies: CaseStudy[] = [
  rankingEditorCaseStudy,
  {
    slug: 'nochi',
    title: 'Nochi',
    titleAccent: '/ Short Anime',
    categories: ['Short-Form Video', 'Streaming', 'Mobile'],
    ticker: ['Vertical Player', 'Offline Downloads', 'Coin Economy', 'Subscriptions', 'Watch Progress', 'Search'],
    heroImage: { label: 'Nochi — Short-Form Anime Streaming', src: '/images/nochi/splash.jpeg' },
    heroScreens: nochiScreens,
    galleryLayout: 'screens',
    overview:
      'Nochi is a short-form anime streaming application built around a vertical, swipe-through episode player, with a full catalogue, offline downloads, a coin economy and subscription tiers. I built the Flutter client end to end, from architecture through playback to the purchase experience.',
    context:
      'Episodes run one to two minutes, so the application has to behave like a feed and a streaming service at the same time. It combines an instant vertical player with catalogue browsing, watch progress that survives closing the app, and content that can be unlocked with coins or a subscription.',
    info: [
      { k: 'Role', v: 'Flutter Developer — solo build' },
      { k: 'Platform', v: 'iOS · Android' },
      { k: 'Scope', v: 'Catalogue, vertical player, downloads, coins & subscriptions' },
      { k: 'Industry', v: 'Entertainment / Streaming' },
      { k: 'Technology', v: 'Flutter, Provider, Dio, ExoPlayer / AVFoundation, In-App Purchases' },
    ],
    challenge:
      'A feed wants the next video to start the instant you swipe; a streaming service wants a catalogue, progress tracking and resume. Doing both means keeping several video decoders warm at once, which is also the fastest way to exhaust the hardware on entry-level devices.',
    solution:
      'A feature-first Flutter client with a single one-directional data flow from view to provider to repository to API. Playback runs through a purpose-built controller pool that preloads the next episode while the current one plays, holds a strict budget of live decoders, and writes watch progress continuously so Continue Watching is always accurate.',
    features: [
      'Vertical swipe-through episode player',
      'Preloaded playback between episodes',
      'Gesture controls — tap, double-tap, hold to scrub',
      'Personalised home feed & discovery',
      'Search with live suggestions',
      'Offline downloads',
      'Watch progress, history & resume',
      'Coin economy, episode unlocks & subscriptions',
    ],
    architectureNote: 'The main technologies and their responsibilities in the application.',
    architecture: [
      { layer: 'APPLICATION', title: 'Flutter · Provider', d: 'Feature-first modules, screen state and a single one-directional data flow.' },
      { layer: 'PLAYBACK', title: 'ExoPlayer · AVFoundation', d: 'Vertical video feed, decoder pooling, preloading and watch-progress tracking.' },
      { layer: 'DATA', title: 'Dio · REST', d: 'Typed API layer with token refresh, error mapping and repository-level caching.' },
      { layer: 'DEVICE', title: 'Local Storage · In-App Purchases', d: 'Offline downloads, resume positions, settings and the purchase experience.' },
    ],
    contribution: [
      'Designed and built the Flutter client across 17 feature modules and a shared component library.',
      'Built the vertical player, including decoder pooling, preloading and episode hand-off.',
      'Implemented the gesture model after device testing, replacing on-screen transport controls.',
      'Built search, downloads, watch history and resume, including the offline experience.',
      'Implemented the coin wallet, episode unlocks, rewards and the subscription paywall.',
      'Diagnosed and resolved device-specific playback failures on entry-level Android hardware.',
    ],
    gallery: [
      { label: 'Home Feed & Continue Watching', src: '/images/nochi/home.jpeg' },
      { label: 'Profile, Watch History & Coin Balance', src: '/images/nochi/profile.jpeg' },
      { label: 'Premium Plans & Subscription Benefits', src: '/images/nochi/vip.jpeg' },
      { label: 'Nochi Splash Screen & Mascot', src: '/images/nochi/splash.jpeg' },
    ],
    impact:
      'The application delivers the complete viewing experience: browsing the catalogue, swiping through episodes without a gap between them, saving titles for later, downloading for offline viewing, and unlocking content through coins or a subscription.',
    learned:
      'Playback performance is decided by the hardware you have not tested on. Supporting entry-level devices meant treating video encoding and decoder budgets as product decisions, not implementation details, and designing failures to degrade visibly rather than silently.',
    next: { title: 'Explore More Projects', href: '/projects' },
  },
  {
    slug: 'ludino',
    title: 'Ludino',
    titleAccent: '/ Social Gaming',
    previousName: 'Yaro / Voicely',
    appUrl: ludinoAppUrl,
    categories: ['Social Gaming', 'Live Rooms', 'Realtime', 'Mobile'],
    ticker: ['Ludo Gameplay', 'Live Rooms', 'Messaging', 'Virtual Gifts', 'Star Coins', 'Social Profiles'],
    heroImage: { label: 'Ludino — Social Gaming & Live Rooms', src: '/images/ludino/games.jpeg' },
    heroScreens: ludinoScreens,
    galleryLayout: 'screens',
    overview:
      'Ludino, formerly Yaro / Voicely, combines social gaming with live rooms, messaging, virtual gifts and in-app currency. My work spans Flutter feature development, audio integrations, purchase flows and admin tooling, alongside Ludo gameplay and social features.',
    context:
      'The application brings games and social interaction into one experience. Players can explore Ludo modes, join live party rooms, chat, manage their profiles and access the virtual currency shop. The current Ludino identity continues the earlier Yaro / Voicely project.',
    info: [
      { k: 'Role', v: 'Flutter Developer' },
      { k: 'Platform', v: 'iOS · Android · Web admin' },
      { k: 'Scope', v: 'Ludo, live rooms, chat, profiles, virtual currency & admin tools' },
      { k: 'Industry', v: 'Social Gaming / Entertainment' },
      { k: 'Technology', v: 'Flutter, Agora, ZegoCloud, WebSockets, Firebase, IAP' },
    ],
    challenge:
      'Gaming, live rooms, messaging and virtual currency need to feel like one coherent application. The engineering challenge is coordinating interface state, realtime updates, audio connections and purchase flows across these experiences.',
    solution:
      'A Flutter client brings Ludo and social features together with Agora and ZegoCloud audio integrations, WebSockets for live events and messaging, and Firebase for account data and notifications. Currency and purchase interfaces sit alongside room moderation and admin tools.',
    features: [
      'Ludo gameplay and game mode selection',
      'Live party rooms and room discovery',
      'Messaging, in-game chat and emoji controls',
      'Animated virtual gifts',
      'Star coins, currency balances and purchase flows',
      'Follows, friends & profiles',
      'Push notifications',
      'Room moderation controls',
      'Admin tooling for users & content',
    ],
    architectureNote: 'The main technologies and their responsibilities in the application.',
    architecture: [
      { layer: 'APPLICATION', title: 'Flutter', d: 'Ludo and social interfaces, feature logic, SDK integrations and application state.' },
      { layer: 'AUDIO', title: 'Agora · ZegoCloud', d: 'Voice room audio and speaker/listener interactions.' },
      { layer: 'REALTIME', title: 'WebSockets', d: 'Room events, live chat and updates to shared interactions.' },
      { layer: 'DATA & PURCHASES', title: 'Firebase · In-App Purchases', d: 'Account data, notifications and the purchase experience for in-app currency.' },
    ],
    contribution: [
      'Developed and maintained Flutter interfaces and logic for live rooms, chat, gifting and social features.',
      'Worked on Ludo gameplay, player profiles, friendships and realtime interactions.',
      'Integrated Agora and ZegoCloud audio SDKs, including room state and connection handling.',
      'Implemented in-app purchase flows and coin wallet interfaces.',
      'Contributed to moderation and user management tools for administrators.',
      'Investigated defects, improved application performance and supported production releases.',
    ],
    gallery: [
      { label: 'Games Lobby & Play Modes', src: '/images/ludino/games.jpeg' },
      { label: 'Ludo Board, Chat & Emoji Controls', src: '/images/ludino/ludo-board.jpeg' },
      { label: 'Live Party Rooms & Discovery', src: '/images/ludino/party.jpeg' },
      { label: 'Star Coin Shop & Currency Balances', src: '/images/ludino/stars.jpeg' },
      { label: 'Game Mode & Tier Selection', src: '/images/ludino/game-modes.jpeg' },
      { label: 'Profiles, Friends & Rewards', src: '/images/ludino/profile.jpeg' },
    ],
    impact: 'My contributions support Ludino’s connected gaming and social experience: Ludo gameplay, live rooms, messaging, gifting, profiles and in-app currency, alongside the tools used to manage users and content.',
    learned:
      'Combining games and live social features makes state coordination essential. Interface updates, audio SDK events and backend data need to stay consistent, while connection changes, purchase flows and moderation controls remain usable.',
    next: { title: 'Explore More Projects', href: '/projects' },
  },
  {
    slug: 'restart-fitness',
    title: 'Restart Fitness',
    titleAccent: '/ Level-Up Training',
    categories: ['Fitness', 'Training', 'Mobile', 'Admin'],
    ticker: ['Ten-Level Journey', '30-Day Plans', 'Video Tests', 'Weekly Challenges', 'Admin Review'],
    heroImage: { label: 'Restart Fitness app screens', src: '/images/restart-fitness.png' },
    galleryLayout: 'showcase',
    overview:
      'Restart Fitness is a structured training platform built around accountability. Members move through ten levels, each with a 30-day workout and meal plan. Video-submission tests determine progression, while weekly community challenges keep people engaged between levels.',
    context:
      'I worked as a Senior Flutter Developer on the mobile architecture, interface implementation and backend integration. A companion React admin panel lets the team assign plans, review submissions and choose challenge winners.',
    info: [
      { k: 'Role', v: 'Senior Flutter Developer · Neusoftix client project' },
      { k: 'Platform', v: 'iOS · Android · React admin panel' },
      { k: 'Scope', v: 'Level progression, plans, video submissions & challenges' },
      { k: 'Status', v: 'Released' },
      { k: 'Technology', v: 'Flutter, React, REST API, video uploads' },
    ],
    challenge:
      'A static workout plan gives people little structure or accountability once they begin. Restart Fitness needed a progression system that made each level meaningful, with verified tests and community challenges, while remaining practical for a small admin team to operate.',
    solution:
      'The Flutter app presents level-specific 30-day plans and accepts video proof for level tests and weekly challenges. Review and content assignment run through a React admin panel connected to the same REST API. Admin approval unlocks the next level, and admins select the top three weekly challenge winners.',
    features: [
      'Ten-level member progression',
      'Assigned 30-day workout and meal plans at each level',
      'Video-submission tests with admin approval',
      'Weekly challenges with video proof',
      'Admin review queue and winner selection',
      'Content assignments without an app release',
    ],
    architectureNote: 'The mobile app and admin panel share a REST data layer for plans, tests and reviews.',
    architecture: [
      { layer: 'MEMBER APP', title: 'Flutter', d: 'Level journey, assigned plans, test submissions and weekly challenge flows.' },
      { layer: 'OPERATIONS', title: 'React Admin', d: 'Plan assignments, video reviews, progression decisions and challenge winners.' },
      { layer: 'INTEGRATION', title: 'REST API', d: 'Shared data for the member experience and admin review actions.' },
      { layer: 'SUBMISSIONS', title: 'Video Upload', d: 'Queues proof for review while the rest of the app remains usable.' },
    ],
    contribution: [
      'Implemented the ten-level journey and assigned 30-day workout and meal plans.',
      'Built video submission for level tests, with admin approval required to advance.',
      'Built weekly challenge submissions, including the admin flow for selecting three winners.',
      'Integrated the Flutter app with the React admin panel’s REST data layer.',
      'Structured plans, levels and tests as assignable content so changes do not require an app release.',
    ],
    gallery: [{ label: 'Restart Fitness — member journey, workouts, chat and video content', src: '/images/restart-fitness.png' }],
    impact:
      'Delivered a complete level-based training experience with assigned plans, verified progression and recurring challenges. The operating team can manage content and review submissions through the admin panel.',
    learned:
      'Verified progress needs a smooth submission and review loop on both sides. A future improvement would be on-device video compression to make uploads more reliable on weak connections.',
    next: { title: 'Imakler UAE', href: '/projects/imakler-uae' },
  },
  {
    slug: 'imakler-uae',
    title: 'Imakler UAE',
    titleAccent: '/ Listings & Chat',
    categories: ['Marketplace', 'Listings', 'Mobile'],
    ticker: ['Property', 'Jobs', 'Vehicles', 'Buyer–Seller Chat', 'Credit Wallet', 'Listing Boosts'],
    heroImage: { label: 'Imakler UAE app screens', src: '/images/imakler-uae.png' },
    galleryLayout: 'showcase',
    overview:
      'Imakler UAE is a listings marketplace for property, jobs, vehicles and other categories. Buyers can contact sellers inside the app; sellers can purchase credits and spend them on clearly defined bumps, highlights and featured placements.',
    context:
      'I implemented the client application as a Senior Flutter Developer at Neusoftix. The project combines category-specific discovery, listing-based conversations and a credit economy in one released iOS and Android app.',
    info: [
      { k: 'Role', v: 'Senior Flutter Developer · Neusoftix client project' },
      { k: 'Platform', v: 'iOS · Android' },
      { k: 'Scope', v: 'Listings, search, chat, credits & ranking' },
      { k: 'Status', v: 'Released' },
      { k: 'Technology', v: 'Flutter, REST APIs, in-app chat, in-app purchases' },
    ],
    challenge:
      'A multi-category marketplace has to support different listing details without fragmenting the browsing experience. Sellers also need to understand what paid promotion costs and how it affects visibility, rather than buying an opaque “promote” option.',
    solution:
      'I built shared listing and search flows with category-specific fields, contextual chat threads tied to listings, and a credit wallet. Sellers purchase credits through an in-app purchase flow, then spend them on distinct bump, highlight or featured packages. Listing-rank logic surfaces promoted entries predictably.',
    features: [
      'Property, jobs, vehicles and other listing categories',
      'Category-aware browsing and search',
      'Buyer–seller chat linked to a listing',
      'Credit wallet with in-app purchases',
      'Distinct bump, highlight and featured packages',
      'Predictable placement for boosted listings',
    ],
    architectureNote: 'Shared listing data keeps categories extensible, while promotion types have explicit prices and effects.',
    architecture: [
      { layer: 'APPLICATION', title: 'Flutter', d: 'Listing discovery, search, conversations and seller promotion flows.' },
      { layer: 'DATA', title: 'REST APIs', d: 'Shared listing model with category-specific fields and promotion state.' },
      { layer: 'CONVERSATIONS', title: 'In-App Chat', d: 'Buyer–seller threads retain the listing context.' },
      { layer: 'MONETIZATION', title: 'Credits · In-App Purchases', d: 'Wallet top-ups and itemized bump, highlight and featured options.' },
    ],
    contribution: [
      'Implemented browsing and search across property, jobs, vehicles and other categories.',
      'Built in-app conversations between buyers and sellers, scoped to listings.',
      'Implemented credit purchases and wallet spending for multiple promotion types.',
      'Built listing-rank logic for bumped and featured items.',
      'Kept category fields data driven so additional categories can reuse the same screens.',
    ],
    gallery: [{ label: 'Imakler UAE — wallet, listing discovery, favourites and map views', src: '/images/imakler-uae.png' }],
    impact:
      'Delivered a multi-category marketplace with direct buyer–seller communication and an itemized credit-based promotion loop that makes seller visibility options clear.',
    learned:
      'Bumps, highlights and featured placement are easier to understand when each has a distinct price and effect. A useful next step would be a preview of how a boost changes ranking before purchase.',
    next: { title: 'Elite Fitness', href: '/projects/elite-fitness' },
  },
  {
    slug: 'elite-fitness',
    title: 'Elite Fitness',
    titleAccent: '/ Member Experience',
    categories: ['Fitness', 'Membership', 'Nutrition', 'Mobile'],
    ticker: ['Workout Builder', 'Exercise Catalog', 'Progress Charts', 'Nutrition', 'Membership Access'],
    heroImage: { label: 'Elite Fitness app screens', src: '/images/elite-fitness.png' },
    galleryLayout: 'showcase',
    overview:
      'Elite Fitness brings paid gym membership, training and nutrition into one branded Flutter app. Members can build workouts from a large exercise catalog, track activity and progress, and use nutrition data, recipes and meal ideas.',
    context:
      'I implemented the client app as a Senior Flutter Developer at Neusoftix. The released iOS and Android experience combines a Supabase-backed data layer with ExerciseDB, FatSecret, Gymmater and Gatekeeper integrations.',
    info: [
      { k: 'Role', v: 'Senior Flutter Developer · Neusoftix client project' },
      { k: 'Platform', v: 'iOS · Android' },
      { k: 'Scope', v: 'Workouts, progress, nutrition & member access' },
      { k: 'Status', v: 'Released' },
      { k: 'Technology', v: 'Flutter, Supabase, ExerciseDB, FatSecret, Gymmater, Gatekeeper' },
    ],
    challenge:
      'The gym needed one member experience for paid access, structured training and credible nutrition information. These functions had been spread across spreadsheets and generic tools, while membership eligibility also had to govern entry to the app.',
    solution:
      'The Flutter app combines workout creation and progress tracking with nutrition features. ExerciseDB supplies the exercise catalog, FatSecret provides food and recipe data, and Gymmater plus Gatekeeper handle membership eligibility and access flows. A Supabase-backed data layer supports the product.',
    features: [
      'Workout creation and editing from a large exercise catalog',
      'Workout history, analytics and progress charts',
      'Daily nutrition tracking, recipes and meal ideas',
      'Paid-member eligibility and access flow',
      'Supabase-backed application data',
    ],
    architectureNote: 'Each external provider has a separate responsibility in the member experience.',
    architecture: [
      { layer: 'APPLICATION', title: 'Flutter', d: 'Workout, progress, nutrition and membership interfaces.' },
      { layer: 'DATA', title: 'Supabase', d: 'Backend data layer for the member product.' },
      { layer: 'CONTENT', title: 'ExerciseDB · FatSecret', d: 'Exercise catalog plus nutrition data, recipes and meal inspiration.' },
      { layer: 'ACCESS', title: 'Gymmater · Gatekeeper', d: 'Membership eligibility and gym access flows.' },
    ],
    contribution: [
      'Implemented workout creation, updates and history using the ExerciseDB catalog through RapidAPI.',
      'Built workout analytics and progress charts.',
      'Integrated FatSecret nutrition tracking, recipe search and meal inspiration.',
      'Integrated Gymmater and Gatekeeper for member eligibility and access.',
      'Built the Supabase-backed data layer and kept third-party integrations in separate services.',
    ],
    gallery: [{ label: 'Elite Fitness — nutrition, dashboard, workout builder and progress screens', src: '/images/elite-fitness.png' }],
    impact:
      'Delivered a single branded member app that connects paid access with workouts and nutrition, replacing disconnected tracking tools with a structured experience.',
    learned:
      'Membership checks work best early in navigation, before members enter gated tools. Caching the exercise catalog is a useful next improvement to reduce repeat loading in the workout builder.',
    next: { title: 'Explore More Projects', href: '/projects' },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
