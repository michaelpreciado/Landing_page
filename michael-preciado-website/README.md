# Michael Preciado – Portfolio / Articles

Hey there 👋 I'm **Michael Preciado**, an end-to-end web engineer & perpetual tinkerer. This repo powers my personal site – a living playground where I mix code, design and the occasional dad-level Easter egg.

## Live Site

<https://michaelpreciado.com> *(or whatever Netlify / Vercel URL you're viewing)*

## Why this project exists

1. Showcase projects, articles and experiments in one place.
2. Play with new tech without the red-tape of a corporate codebase.
3. Share lessons learned so other builders can skip a few potholes.

## Tech Stack

| Layer | Package / Tool | Why I chose it |
|-------|----------------|----------------|
| Build | **Vite 6** | Ridiculously fast dev server & optimized production bundles |
| UI | **React 19** | My daily driver for component-driven UIs |
| Animations | **Framer Motion 12** | Simple, declarative motion that feels buttery smooth |
| Routing | **react-router-dom 6** | File-size friendly and stable navigation |
| 3D / WebGL | **three.js**, **@react-three/fiber**, **@react-three/drei** | For the CRT album & matrix rain experiments |
| Icons | **react-icons** | One dependency, dozens of icon sets |
| Linting | **ESLint 9** (with React-Hooks & React-Refresh plugins) | Keep the codebase honest |

## Folder Guide

```
src/
  components/   Reusable React components (Hero, Projects, Articles etc.)
  data/         Plain-JS data sources (blogData.js – soon to be moved to CMS)
  hooks/        Custom hooks (typewriter, scroll animations...)
  styles/       Global CSS + experimental "liquid-glass" effect
  utils/        Small helpers (liquidGlass.js, other visual toys)
public/
  images/       Optimized images & SVGs used across the site
```

## Running Locally

```bash
git clone https://github.com/michaelpreciado/michael-preciado-website.git
cd michael-preciado-website
npm install
npm run dev   # starts Vite with hot-reload at http://localhost:5173
```

To build a production bundle:

```bash
npm run build
npm run preview   # serve dist/ locally to sanity-check
```

## Roadmap / Ideas

- Migrate articles to a headless CMS (likely MDX + Content Layer).
- Dark-mode toggle with system preference.
- More 3D playgrounds built with R3F.
- Automated Lighthouse CI to keep performance scores ��.

---

_Built with caffeine, lofi beats and the unwavering belief that good software should feel fun._
