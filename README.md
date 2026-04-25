# Michael Preciado — Software Developer Portfolio

Deployable repository for <https://michael-preciado.com>, Michael Preciado's career-facing portfolio site.

The site is built to make the strongest public work easy to evaluate quickly: full-stack apps, PWAs, interactive 3D interfaces, applied AI workflow experiments, and polished frontend/product delivery.

## Career-Facing Highlights

- **Planter** — Next.js/TypeScript/Supabase plant care PWA with offline-first product patterns.
- **Interactive Solar System** — React/TypeScript/Three.js educational 3D experience.
- **CRT Interactive Album** — React/Three.js interactive photo album with Vercel-backed media ideas.
- **F.R.I.D.A.Y.** — personal AI workflow/second-brain experiment using local AI and agent orchestration.
- **Flattenhund** — JavaScript canvas browser game with touch controls and leaderboard support.
- **Photography Portfolio** — production-ready static client-style site with optimized assets and deployment workflows.

## Repository Layout

```text
.
├── michael-preciado-website/   # React/Vite application source
├── vercel.json                 # Vercel build/routing configuration
├── package.json                # Root convenience scripts
└── README.md                   # Repo overview
```

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Vercel Analytics
- Custom CSS with responsive, terminal-inspired visual design

## Local Development

```bash
npm install
npm run dev
```

The root scripts delegate into `michael-preciado-website/`.

## Production Build

```bash
npm run build
```

## Deployment

The live site is deployed at:

- <https://michael-preciado.com>

The project includes `vercel.json` for Vercel deployment from the repository root.

## License

MIT License
