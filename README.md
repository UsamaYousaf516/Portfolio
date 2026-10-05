# Usama Yousaf — Portfolio

Next.js (App Router) + TypeScript implementation of the designs in `project/`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

- Pages: `/`, `/about`, `/projects`, `/projects/ranking-video-editor`, `/projects/nochi`, `/projects/ludino`, `/projects/restart-fitness`, `/projects/imakler-uae`, `/projects/elite-fitness`, `/contact` (`src/app/`). The former `/projects/yaro-voicely` URL redirects to Ludino.
- Shared parts: `src/components/` (Nav, Ticker, Footer, Services accordion, image Placeholder, Effects).
- Motion, magnetic buttons, parallax and the custom cursor live in `src/components/Effects.tsx`, driven by `data-reveal`, `data-stagger`, `data-magnetic`, `data-parallax` and `data-cursor` attributes.
- Colours are CSS variables in `src/app/globals.css`; dark mode redefines them under `html[data-theme='dark']`.
- Content still to fill in is marked `TODO(usama)`: contact links and resume (`src/lib/site.ts`), bracketed project and case-study copy (`src/lib/projects.ts`, `src/lib/caseStudies.ts`, `src/app/page.tsx`, `src/app/about/page.tsx`), images (pass `src` to `<Placeholder>`), and a real backend for the contact form.

---

# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 1 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `project/Home.dc.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `Portfolio site structure and assets` project files (HTML prototypes, assets, components)
