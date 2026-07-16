# Mars AI — Landing Page

A dark, cosmic, animated marketing landing page for **Mars AI** — the AI study companion that turns lectures, PDFs, and links into notes, flashcards, transcripts, and gamified quizzes.

Built with **React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion**, using the same colors, fonts, and copy voice as the Mars AI iOS app.

> This folder currently lives at the root of the `Mars AI` Xcode project repo for context while building it. Feel free to move it into its own repo later — it has no dependency on the Swift app.

## What's inside

- **Hero** — animated headline, floating planets, canvas starfield, and an auto-cycling phone mockup of the app's screens (upload → notes → flashcards → quiz).
- **Problem section** — "You are not alone" empathy section addressing student pain points.
- **Features bento grid** — 8 core features (record, notes, flashcards, transcripts, quizzes, test mode, chat, learning journeys).
- **How it works** — 3-step explainer.
- **Gamification showcase** — streaks, Light Points, badges, with animated count-up stats.
- **Testimonials** — infinite marquee using the same review copy already shipped in the app's review-request screen.
- **FAQ** — animated accordion.
- **Final CTA + Footer** — App Store download CTA.

Everything animates in on scroll (Framer Motion `whileInView`), and the whole page uses the app's real brand tokens (see `src/index.css` `@theme` block) pulled directly from `MarsTheme.swift` / `MarsFont.swift`.

## Getting started

```bash
npm install
npm run dev      # starts a local dev server (usually http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 20+.

## Swapping in real screenshots

The phone mockup (`src/components/PhoneMockup.tsx`) currently renders **hand-built placeholder UI** (fake notes/flashcards/quiz screens) so the page looks complete without real screenshots. Once you have real screenshots:

1. Drop your screenshot images into `src/assets/images/`.
2. In `PhoneMockup.tsx`, replace the contents of any of the `HomeScreen` / `NotesScreen` / `FlashcardsScreen` / `QuizScreen` components with:
   ```tsx
   <img src={yourScreenshot} alt="Mars AI app screen" className="h-full w-full object-cover" />
   ```
3. Optionally do the same for the small app icon/screenshot references elsewhere (`Hero.tsx`, `Navbar.tsx`, `Footer.tsx` already use the real `AppIcon.png`).

## Updating the App Store link

The final CTA button in `src/components/FinalCTA.tsx` links to the App Store using the ID pulled from the app's existing marketing links. Update the `href` there once you have your production App Store URL confirmed.

## Deploying to GitHub Pages

`vite.config.ts` already sets `base: './'` so the build works from any subpath (required for GitHub Pages project sites).

**Option A — GitHub Actions (recommended):**

1. Push this folder to its own repo (or keep it in a subfolder and point the workflow at it).
2. In the repo settings, set **Pages → Source: GitHub Actions**.
3. Add a workflow that runs `npm ci && npm run build` and deploys the `dist/` folder using `actions/deploy-pages`.

**Option B — `gh-pages` package:**

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

## Tech stack

- [Vite](https://vite.dev/) — build tool
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) — via `@tailwindcss/vite`
- [Framer Motion](https://motion.dev/) — scroll/entrance animations
- [Lucide React](https://lucide.dev/) — icons

No backend, no CMS — fully static, so it's free to host anywhere (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
