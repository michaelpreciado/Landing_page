# Michael Preciado Website

React/Vite source app for [michael-preciado.com](https://michael-preciado.com), Michael Preciado's personal portfolio and article site.

## Positioning

The site presents Michael as an AI-focused software builder with real operations instincts. It connects:

- practical AI / automation work through Preciado Tech
- portfolio projects and case studies
- technical writing
- resume and hiring signals
- links to GitHub, LinkedIn, and contact routes

## Highlights

- Terminal-inspired homepage with Dodger Blue matrix theme
- Articles and projects pages matched to the same visual system
- `/projects/planter` case-study route
- Project cards with live demos and GitHub links
- Framer Motion page transitions
- Vercel Analytics

## Visual Project Proof

| Planter | F.R.I.D.A.Y. | AI Server |
| --- | --- | --- |
| ![Planter project screenshot](public/images/projects/planttracker.png) | ![F.R.I.D.A.Y. project screenshot](public/images/projects/friday.png) | ![AI server dashboard screenshot](public/images/projects/ai-server-dashboard.jpeg) |

## Tech Stack

- React
- Vite
- React Router
- Framer Motion
- ESLint
- Vercel Analytics

## Project Structure

```text
src/
├── components/   # Reusable UI sections, routes, and case studies
├── data/         # Blog/content data sources
├── utils/        # Liquid glass, scroll reveal, and visual helpers
└── main.jsx      # Application entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Live Site

- Portfolio: <https://michael-preciado.com>
- Preciado Tech: <https://preciado-tech.com>

## License

MIT License
