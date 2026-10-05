import { caseStudyHref } from './site';
import { nochiScreens } from './nochi';
import { ludinoAppUrl, ludinoScreens } from './ludino';
import { rankingChannelUrl, rankingEditorHref, rankingEditorImage } from './rankingVideoEditor';

export const projectFilters = ['All', 'AI-Assisted Development', 'Desktop Applications', 'Web Applications', 'Mobile Applications', 'Realtime Systems', 'Gaming'] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  id: string;
  title: string;
  cat: string;
  desc: string;
  tags: string[];
  filters: ProjectFilter[];
  href: string;
  appUrl?: string;
  channelUrl?: string;
  tone: 'light' | 'dark';
  /** Wide cards span the full row; narrow ones sit in the grid. */
  layout: { wide: true } | { wide: false; rows: 1 | 2; imgHeight: number };
  image?: string;
  imageFit?: 'cover' | 'contain';
  screens?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: 'ranking-video-editor',
    title: 'Ranking Video Editor',
    cat: 'Desktop Application • Creator Tools • AI Workflow',
    desc: 'Built a local-first desktop editor for vertical ranking videos, countdowns and clip compilations. I use it to produce content for my YouTube channel, which has reached 500K+ views and 700 subscribers.',
    tags: ['Tauri', 'React', 'TypeScript', 'Rust', 'FFmpeg'],
    filters: ['Desktop Applications', 'AI-Assisted Development'],
    href: rankingEditorHref,
    channelUrl: rankingChannelUrl,
    tone: 'dark',
    layout: { wide: true },
    image: rankingEditorImage,
    imageFit: 'contain',
  },
  {
    id: 'nochi',
    title: 'Nochi',
    cat: 'Short-Form Video • Streaming',
    desc: 'Built a short-form anime streaming client with a vertical preloading video player, offline downloads, watch progress, a coin economy and subscription tiers.',
    tags: ['Flutter', 'Provider', 'Dio', 'ExoPlayer', 'In-App Purchases'],
    filters: ['Mobile Applications'],
    href: '/projects/nochi',
    tone: 'light',
    layout: { wide: true },
    image: '/images/nochi/home.jpeg',
    screens: nochiScreens,
  },
  {
    id: 'ludino',
    title: 'Ludino',
    cat: 'Social Gaming • Live Rooms • Realtime',
    desc: 'Worked on the Flutter application for Ludino, formerly Yaro / Voicely, combining Ludo gameplay with live rooms, messaging, virtual gifts, in-app currency and social profiles.',
    tags: ['Flutter', 'Agora', 'ZegoCloud', 'WebSockets', 'Firebase'],
    filters: ['Mobile Applications', 'Realtime Systems', 'Gaming'],
    href: caseStudyHref,
    appUrl: ludinoAppUrl,
    tone: 'dark',
    layout: { wide: true },
    image: '/images/ludino/games.jpeg',
    screens: ludinoScreens,
  },
  {
    id: 'restart-fitness',
    title: 'Restart Fitness',
    cat: 'Fitness • Training • Admin',
    desc: 'Built a ten-level fitness journey with 30-day workout and meal plans, video-based progression tests, weekly challenges and an admin review flow.',
    tags: ['Flutter', 'REST APIs', 'Video Uploads', 'React Admin'],
    filters: ['Mobile Applications', 'Web Applications'],
    href: '/projects/restart-fitness',
    tone: 'light',
    layout: { wide: false, rows: 2, imgHeight: 420 },
    image: '/images/restart-fitness.png',
  },
  {
    id: 'imakler-uae',
    title: 'Imakler UAE',
    cat: 'Marketplace • Listings • Chat',
    desc: 'Built multi-category listings, buyer–seller chat and a credit wallet for transparent listing bumps, highlights and featured placement.',
    tags: ['Flutter', 'REST APIs', 'In-App Chat', 'In-App Purchases'],
    filters: ['Mobile Applications'],
    href: '/projects/imakler-uae',
    tone: 'dark',
    layout: { wide: false, rows: 1, imgHeight: 280 },
    image: '/images/imakler-uae.png',
  },
  {
    id: 'elite-fitness',
    title: 'Elite Fitness',
    cat: 'Fitness • Membership • Nutrition',
    desc: 'Connected member access, workout tracking and nutrition in one Flutter app with Supabase and four external service integrations.',
    tags: ['Flutter', 'Supabase', 'ExerciseDB', 'FatSecret', 'Gymmater', 'Gatekeeper'],
    filters: ['Mobile Applications'],
    href: '/projects/elite-fitness',
    tone: 'light',
    layout: { wide: false, rows: 1, imgHeight: 280 },
    image: '/images/elite-fitness.png',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    cat: 'Web Development • AI Workflow',
    desc: 'Built this portfolio with Next.js, React and TypeScript, using an AI-assisted workflow to develop responsive pages, shared components and interactive UI.',
    tags: ['Next.js', 'React', 'TypeScript', 'AI-Assisted Development'],
    filters: ['Web Applications', 'AI-Assisted Development'],
    href: '/',
    tone: 'light',
    layout: { wide: false, rows: 1, imgHeight: 240 },
    image: '/images/portfolio-website.png',
  },
];
