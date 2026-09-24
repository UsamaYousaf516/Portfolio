import { caseStudyHref } from './site';

export const projectFilters = ['All', 'Mobile Apps', 'Web', 'Realtime', 'Firebase', 'Supabase', 'AI-Assisted', 'Gaming'] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  title: string;
  cat: string;
  desc: string;
  tags: string[];
  filters: ProjectFilter[];
  href: string;
  tone: 'light' | 'dark';
  /** Wide cards span the full row; narrow ones sit in the grid. */
  layout: { wide: true } | { wide: false; rows: 1 | 2; imgHeight: number };
  image?: string;
};

// TODO(usama): replace the bracketed entries with real projects.
export const projects: Project[] = [
  {
    title: 'Yaro / Voicely',
    cat: 'Social Audio • Realtime',
    desc: 'A realtime social audio platform featuring voice rooms, live chat, virtual gifts, in-app currency, social interactions and extensive admin tooling.',
    tags: ['Flutter', 'Agora', 'ZegoCloud', 'WebSockets', 'Firebase'],
    filters: ['Mobile Apps', 'Realtime', 'Firebase'],
    href: caseStudyHref,
    tone: 'dark',
    layout: { wide: true },
  },
  {
    title: 'Restart Fitness',
    cat: 'Fitness • Admin',
    desc: 'Progressive workout programs, weekly plan generation, exercise management and external service integrations.',
    tags: ['Flutter', 'APIs', 'Kisi', 'Glofox'],
    filters: ['Mobile Apps', 'Web'],
    href: caseStudyHref,
    tone: 'light',
    layout: { wide: false, rows: 2, imgHeight: 420 },
  },
  {
    title: 'Ludino',
    cat: 'Social Gaming',
    desc: 'Ludo gameplay, profiles, friendships and realtime social features.',
    tags: ['Flutter', 'Realtime', 'Gaming'],
    filters: ['Mobile Apps', 'Realtime', 'Gaming'],
    href: caseStudyHref,
    tone: 'dark',
    layout: { wide: false, rows: 1, imgHeight: 240 },
  },
  {
    title: 'Parashoot',
    cat: 'Production App',
    desc: '[One-line description of the product and your role.]',
    tags: ['Flutter', 'Supabase', 'Flutter Web'],
    filters: ['Mobile Apps', 'Web', 'Supabase'],
    href: caseStudyHref,
    tone: 'light',
    layout: { wide: false, rows: 1, imgHeight: 240 },
  },
  {
    title: '[Admin Portal]',
    cat: 'Web • Dashboard',
    desc: '[Flutter web admin portal — moderation, analytics, content management.]',
    tags: ['Flutter Web', 'Firebase'],
    filters: ['Web', 'Firebase'],
    href: caseStudyHref,
    tone: 'light',
    layout: { wide: true },
  },
  {
    title: '[AI-Assisted Build]',
    cat: 'Experiment',
    desc: '[A product built outside Flutter using AI-assisted workflows — name the stack.]',
    tags: ['React Native', 'Supabase', 'AI-Assisted'],
    filters: ['AI-Assisted', 'Supabase', 'Web'],
    href: caseStudyHref,
    tone: 'dark',
    layout: { wide: false, rows: 1, imgHeight: 260 },
  },
];
