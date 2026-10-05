import type { CaseStudy } from './caseStudies';

export const rankingEditorHref = '/projects/ranking-video-editor';
export const rankingEditorImage = '/images/ranking-video-editor/workspace.png';
export const rankingChannelUrl = 'https://www.youtube.com/channel/UCp7PVlx6V6ERao1UMvCJTyw/';

export const rankingEditorCaseStudy: CaseStudy = {
  slug: 'ranking-video-editor',
  title: 'Ranking Video Editor',
  categories: ['Desktop Application', 'Creator Tools', 'AI-Assisted Development'],
  channelUrl: rankingChannelUrl,
  results: [{ value: '500K+', label: 'YouTube views' }, { value: '700', label: 'Channel subscribers' }],
  resultsNote: 'YouTube channel totals · October 2026',
  ticker: ['Local-First Editing', 'Vertical Video', 'Ranking Overlays', 'Interactive Preview', 'FFmpeg Export', 'Creator Workflow'],
  heroImage: { label: 'Ranking Video Editor — Real Project Workspace', src: rankingEditorImage },
  galleryLayout: 'desktop',
  overview: 'I built Ranking Video Editor to turn local clips into vertical ranking videos, countdowns and compilations. It combines a React and TypeScript editor with a Tauri desktop shell, a Rust backend and local FFmpeg rendering. I use the application in my own YouTube production workflow, on a channel that has reached 500K+ views and 700 subscribers.',
  context: 'This is a tool I use, not just a portfolio demo. Repeating the same ranking format means arranging clips, assigning labels, styling titles, checking timing and exporting consistent vertical videos. I focused the application around those tasks, using an AI-assisted development workflow while retaining responsibility for architecture, debugging and the finished product.',
  info: [
    { k: 'Role', v: 'Creator · End-to-end development' },
    { k: 'Platform', v: 'Windows desktop · Local-first' },
    { k: 'Scope', v: 'Project storage, media import, editing, preview & export' },
    { k: 'Industry', v: 'Creator Tools / Video Production' },
    { k: 'Technology', v: 'Tauri, React, TypeScript, Rust, FFmpeg, Zustand, Zod' },
    { k: 'Output', v: '1080 × 1920 · 30 FPS · H.264 / AAC MP4' },
  ],
  challenge: 'The editor needs to turn mixed source clips into a consistent vertical video while keeping ranks, labels, emoji, sound cues and timing aligned. A preview that looks correct is not enough: the exported MP4 must match it, and cancelled or failed renders must not damage an existing output file.',
  solution: 'I separated editing state from native media processing. React and Zustand manage the project and preview, Zod validates persisted data, and narrowly scoped Tauri commands pass work to Rust. FFprobe inspects source media; FFmpeg normalizes and assembles the output. A shared canvas renderer produces ranking artwork for both preview and export, keeping typography and colour emoji consistent.',
  features: [
    'Ranking, countdown and clip compilation workflows',
    'Local media import with metadata and thumbnails',
    'Drag-and-drop clip ordering, ranks and editable labels',
    'Custom title colours, emoji and ranking overlay styles',
    'Interactive preview with a global seek timeline',
    'Sound effects, intro voiceover and optional outros',
    'JSON project files, autosave and recent-project history',
    'Local MP4 export with progress, validation and cancellation',
  ],
  architectureNote: 'A desktop editing interface backed by a local, native media pipeline.',
  architecture: [
    { layer: 'EDITOR', title: 'React · TypeScript · Zustand', d: 'Feature-based editing UI, project state, clip ordering and preview playback.' },
    { layer: 'DESKTOP & STORAGE', title: 'Tauri · Rust · Zod', d: 'Scoped native commands, validated JSON projects, atomic saves and local file access.' },
    { layer: 'OVERLAYS', title: 'Canvas · Shared Renderer', d: 'The same artwork drives preview and exported overlays, including full-colour emoji.' },
    { layer: 'MEDIA PIPELINE', title: 'FFmpeg · FFprobe', d: 'Media inspection, normalization, compositing, audio processing and staged MP4 export.' },
  ],
  contribution: [
    'Designed and developed the desktop application around my own recurring video production workflow.',
    'Built the React and TypeScript editing interface, project state and three video workflows.',
    'Implemented local project persistence, autosave, schema validation and media availability checks.',
    'Developed ranking overlays and shared preview/export artwork to keep text, colours and emoji consistent.',
    'Built the Rust and FFmpeg rendering pipeline with progress reporting, cancellation and protected output files.',
    'Used the editor to produce channel content and refined the tool through real production use.',
  ],
  gallery: [
    { label: 'Project Settings & Live Vertical Preview', src: rankingEditorImage },
    { label: 'Clip Ordering, Ranks & Labels', src: '/images/ranking-video-editor/clips.png' },
    { label: 'Overlay Typography & Colour Controls', src: '/images/ranking-video-editor/overlays.png' },
    { label: 'Validated Local MP4 Export', src: '/images/ranking-video-editor/export.png' },
  ],
  impact: 'I use this application to produce videos for my YouTube channel, which has reached more than 500,000 views and 700 subscribers. Those are channel outcomes, not application user counts. The project demonstrates software that supports a real, ongoing creator workflow—from local source clips through preview to exported video.',
  learned: 'Using my own tool exposed issues a demo would miss: moved media files, mismatched preview and export typography, emoji rendering and interrupted exports. Sharing the overlay renderer and treating file safety as part of the product made the workflow more dependable. AI-assisted development helped me work across the frontend and native stack, but the output still needed hands-on verification.',
  next: { title: 'Nochi / Short Anime', href: '/projects/nochi' },
};
