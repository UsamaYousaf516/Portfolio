const si = (slug: string) => `https://cdn.simpleicons.org/${slug}/17100B`;

export const heroPills = ['Claude', 'ChatGPT', 'MCP Servers', 'Next.js', 'TypeScript', 'Flutter', 'Firebase', 'Supabase'];

export type Service = { title: string; desc: string; tags: string[] };

export const services: Service[] = [
  {
    title: 'AI-Assisted Software Development',
    desc: 'I use Claude, ChatGPT and MCP servers to support research, prototyping, implementation and debugging. I review the output and test how the software behaves before shipping it.',
    tags: ['Claude', 'ChatGPT', 'MCP Servers', 'Prompt Engineering'],
  },
  {
    title: 'Web Application Development',
    desc: 'I build responsive websites, web applications and admin dashboards, connecting interfaces to the data and services they need.',
    tags: ['Next.js', 'React', 'TypeScript', 'Flutter Web'],
  },
  {
    title: 'Backend & API Integration',
    desc: 'I connect applications to authentication, databases, storage, payments and external services, with Firebase, Supabase and REST APIs.',
    tags: ['Firebase', 'Supabase', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Realtime Application Development',
    desc: 'I implement voice rooms, messaging, live events and push notifications, including the connection and state handling that keeps these experiences usable.',
    tags: ['Agora', 'ZegoCloud', 'WebSockets', 'FCM'],
  },
  {
    title: 'Cross-Platform Mobile Development',
    desc: 'Three years of Flutter experience building mobile applications, integrating native SDKs and maintaining production releases, alongside work with React Native.',
    tags: ['Flutter', 'Dart', 'React Native', 'SDK Integration'],
  },
  {
    title: 'Software Delivery & Maintenance',
    desc: 'I work through requirements, implementation, debugging and release, then improve the application as new needs and issues emerge.',
    tags: ['Code Review', 'Debugging', 'Performance Optimization', 'Deployment'],
  },
];

type Tool = { name: string; icon?: string };
const t = (name: string, slug?: string): Tool => ({ name, icon: slug ? si(slug) : undefined });

export const toolkit: { cat: string; items: Tool[] }[] = [
  { cat: 'AI DEVELOPMENT', items: [t('Claude'), t('ChatGPT'), t('MCP Servers'), t('Prompt Engineering'), t('AI-Assisted Development')] },
  { cat: 'WEB DEVELOPMENT', items: [t('Next.js', 'nextdotjs'), t('React', 'react'), t('TypeScript', 'typescript'), t('Responsive Web Design')] },
  { cat: 'MOBILE DEVELOPMENT', items: [t('Flutter', 'flutter'), t('Dart', 'dart'), t('React Native', 'react'), t('Cross-Platform Development')] },
  { cat: 'BACKEND & INTEGRATIONS', items: [t('Firebase', 'firebase'), t('Supabase', 'supabase'), t('REST APIs'), t('Authentication')] },
  { cat: 'REALTIME APPLICATIONS', items: [t('WebSockets', 'socketdotio'), t('Agora'), t('ZegoCloud'), t('Push Notifications')] },
  { cat: 'SOFTWARE ENGINEERING', items: [t('Software Architecture'), t('Code Review'), t('Debugging'), t('Performance Optimization'), t('Deployment')] },
];

export const aboutStats = [
  { v: '3+', l: 'Years in Software Development' },
  { v: '25+', l: 'Freelance Projects Delivered' },
  { v: 'AI', l: 'Claude · ChatGPT · MCP Servers' },
  { v: 'Mobile + Web', l: 'Application Development' },
];

export const responsibilities = [
  'Cross-platform mobile development',
  'Web applications & admin dashboards',
  'REST API & SDK integration',
  'Firebase & Supabase integration',
  'Realtime communication',
  'Feature development & maintenance',
  'Debugging & performance optimization',
  'Production releases',
];

export const processSteps = [
  { n: '01', t: 'Define', d: 'Understand the users, requirements and constraints. Make the expected behavior clear before writing code.', arrow: '→' },
  { n: '02', t: 'Design', d: 'Choose the stack, application structure and integrations. Break the work into features that can be reviewed and tested.', arrow: '→' },
  { n: '03', t: 'Build with AI', d: 'Use Claude and ChatGPT to prototype and implement. Review generated code and connect it to the rest of the application.', arrow: '→' },
  { n: '04', t: 'Verify & Release', d: 'Test user flows, fix defects, check performance and prepare the release. Keep improving after deployment.', arrow: '✦' },
];

export const whyMe = [
  { t: 'Production Experience', d: 'My work includes social audio, fitness and gaming applications, with real integrations, release requirements and ongoing maintenance.' },
  { t: 'Adaptability', d: 'I use AI tools and documentation to work across stacks, then validate the result in the application.' },
  { t: 'Feature Ownership', d: 'I follow features from requirements and interface implementation through integrations, debugging and release.' },
  {
    t: 'Engineering Judgment',
    d: 'Claude and ChatGPT support my workflow. I remain responsible for understanding the code, reviewing decisions and checking that the software works.',
  },
];
