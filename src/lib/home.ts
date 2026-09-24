const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/17100B`;

export const heroPills = ['Flutter', 'React Native', 'Web Apps', 'Firebase', 'Supabase', 'REST APIs', 'Realtime', 'AI Workflows'];

export type Service = { title: string; desc: string; tags: string[] };

export const services: Service[] = [
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform, production-ready mobile applications with polished UI, scalable architecture and native integrations.',
    tags: ['Flutter', 'React Native', 'Firebase', 'Supabase'],
  },
  {
    title: 'Web Application Development',
    desc: 'Responsive modern web applications, dashboards, portals and product experiences.',
    tags: ['Flutter Web', 'Admin Dashboards', 'Responsive UI'],
  },
  {
    title: 'Backend & API Integration',
    desc: 'Firebase, Supabase, REST APIs, authentication, cloud storage, realtime data and third-party integrations.',
    tags: ['Firebase', 'Supabase', 'REST APIs', 'Auth'],
  },
  {
    title: 'Realtime Experiences',
    desc: 'Chat, social audio, live interactions, notifications and realtime application architecture.',
    tags: ['Agora', 'ZegoCloud', 'WebSockets', 'FCM'],
  },
  {
    title: 'Product UI Implementation',
    desc: 'Turning Figma/design concepts into responsive, pixel-accurate production interfaces.',
    tags: ['Figma-to-Code', 'Design Systems', 'Animations'],
  },
  {
    title: 'AI-Assisted Product Development',
    desc: 'Using modern AI development workflows to rapidly prototype, build, debug and ship across unfamiliar technologies while maintaining engineering judgment and product quality.',
    tags: ['Rapid Prototyping', 'Debugging', 'Design-to-Code'],
  },
];

type Tool = { name: string; icon?: string };
const t = (name: string, slug?: string): Tool => ({ name, icon: slug ? si(slug) : undefined });

export const toolkit: { cat: string; items: Tool[] }[] = [
  { cat: 'MOBILE', items: [t('Flutter', 'flutter'), t('Dart', 'dart'), t('React Native', 'react')] },
  { cat: 'BACKEND & CLOUD', items: [t('Firebase', 'firebase'), t('Supabase', 'supabase'), t('REST APIs'), t('WebSockets', 'socketdotio')] },
  { cat: 'STATE & ARCHITECTURE', items: [t('Provider'), t('GetX'), t('ChangeNotifier')] },
  { cat: 'REALTIME & MEDIA', items: [t('Agora'), t('ZegoCloud'), t('FCM', 'firebase')] },
  { cat: 'WEB & PRODUCT', items: [t('Responsive Web', 'googlechrome'), t('Admin Dashboards'), t('Figma-to-Code', 'figma')] },
  { cat: 'AI WORKFLOW', items: [t('AI Coding Assistants'), t('Rapid Prototyping'), t('Debugging'), t('Code Generation'), t('Design-to-Code')] },
];

export const aboutStats = [
  { v: '3+', l: 'Years Experience' },
  { v: '25+', l: 'Freelance Projects' },
  { v: 'Multiple', l: 'Production Products' },
  { v: 'Mobile + Web', l: 'Platforms' },
];

export const responsibilities = [
  'Mobile application development',
  'Flutter web / admin portals',
  'API integrations',
  'Firebase / Supabase',
  'Realtime functionality',
  'Product implementation',
  'Debugging & optimization',
  'Production deployment',
];

export const processSteps = [
  { n: '01', t: 'Understand', d: 'Clarify the product, users, requirements and constraints.', arrow: '→' },
  { n: '02', t: 'Plan', d: 'Choose architecture, technologies and implementation approach.', arrow: '→' },
  { n: '03', t: 'Build', d: 'Develop the product iteratively with modern engineering and AI-assisted workflows.', arrow: '→' },
  { n: '04', t: 'Refine & Ship', d: 'Test, optimize, polish and prepare the product for production.', arrow: '✦' },
];

export const whyMe = [
  { t: 'Product Thinking', d: 'I care about solving the actual user problem, not just completing tickets.' },
  { t: 'Fast Adaptation', d: 'I can move between technologies and quickly become productive in unfamiliar stacks.' },
  { t: 'End-to-End Ownership', d: 'From UI implementation and backend integration to debugging and deployment.' },
  {
    t: 'AI-Accelerated Workflow',
    d: 'I use AI as an engineering accelerator for research, prototyping and implementation — while keeping human judgment in architecture, quality and product decisions.',
  },
];
