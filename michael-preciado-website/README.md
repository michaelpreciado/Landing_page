# Michael Preciado Website

Career-facing portfolio for Michael Preciado, built as a fast React single-page app with a terminal-inspired visual identity, featured project cards, technical writing, and project case-study routes.

## Purpose

This site is designed for quick evaluation by recruiters, hiring managers, collaborators, and clients. The homepage now emphasizes:

- Michael's software developer positioning
- strongest stack: React, TypeScript, Next.js, Supabase, Vite, Three.js, and AI automation workflows
- strongest public projects and live demos
- GitHub, LinkedIn, resume, email, and meeting links

## Featured Projects

- **Planter** — full-stack plant care PWA using Next.js, TypeScript, Supabase, and offline-first product patterns.
- **Interactive Solar System** — React/TypeScript/Three.js 3D educational experience.
- **CRT Interactive Album** — interactive 3D photo album built with React, Three.js, and Vercel-backed storage ideas.
- **F.R.I.D.A.Y.** — personal AI workflow and agentic second-brain experiment.
- **Flattenhund** — JavaScript canvas browser game with Supabase leaderboard support.
- **Photography Portfolio** — static production-style portfolio with optimized assets and deployment workflows.

Project metadata lives in `src/data/projectsData.js` so the homepage and `/projects` route can stay aligned.

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Vercel Analytics
- ESLint
- Custom CSS

## Project Structure

```text
src/
├── components/          # Reusable UI sections and route components
├── data/projectsData.js # Shared project metadata
├── data/blogData.js     # Blog/article content
├── utils/               # Visual effects and helpers
├── App.jsx              # Homepage composition
└── main.jsx             # Router entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Quality Checks

```bash
npm run lint
npm run build
npm run preview
```

## Live Site

- <https://michael-preciado.com>

## License

MIT License
