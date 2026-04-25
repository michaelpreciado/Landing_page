export const projectsData = [
  {
    imageSrc: "/images/projects/planttracker.png",
    title: "Planter — Plant Care PWA",
    description: "Offline-first plant care tracker with smart watering reminders, local-first flows, and optional Supabase sync.",
    impact: "Best full-stack product signal: TypeScript, Next.js, Supabase, PWA patterns, testing, and deployment discipline.",
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PWA'],
    codeLink: "https://github.com/michaelpreciado/Planter",
    demoLink: "https://planttracker.netlify.app/",
    date: "Apr 2026",
    featured: true
  },
  {
    imageSrc: "/images/projects/Solar.png",
    title: "Interactive Solar System",
    description: "Immersive 3D solar system experience with interactive controls and educational visual storytelling.",
    impact: "Shows creative frontend engineering, TypeScript, Three.js/WebGL thinking, and performance-minded UI work.",
    tech: ['React', 'TypeScript', 'Three.js', 'Vite'],
    codeLink: "https://github.com/michaelpreciado/Interactive_Solar_System",
    demoLink: "https://interactive-solar-system-bay.vercel.app/",
    date: "Apr 2026",
    featured: true
  },
  {
    emoji: "📺",
    title: "CRT Interactive Album",
    description: "Interactive 3D CRT photo album built with React, Three.js, and Vercel-backed media storage.",
    impact: "Strong visual portfolio piece for frontend, 3D UI, and polished product interaction work.",
    tech: ['React', 'Three.js', 'Vercel', 'Vite'],
    codeLink: "https://github.com/michaelpreciado/CRTinteractiveAlbum",
    demoLink: "https://cr-tinteractive-album.vercel.app",
    date: "Apr 2026",
    featured: true
  },
  {
    imageSrc: "/images/projects/friday.png",
    title: "F.R.I.D.A.Y.",
    description: "Personal agentic second brain OS experimenting with local AI, persistent memory, and multi-agent workflows.",
    impact: "Highlights applied AI curiosity, automation taste, and comfort stitching tools into useful systems.",
    tech: ['AI', 'Ollama', 'Obsidian', 'OpenClaw'],
    demoLink: "/projects/friday",
    fullImage: true,
    date: "Apr 2026",
    featured: true
  },
  {
    imageSrc: "/images/corne-keyboard/cornebuild.jpeg",
    title: "Corne Keyboard",
    description: "Custom split ergonomic mechanical keyboard build with ZMK firmware and a 3D printed case.",
    impact: "Shows hardware curiosity, firmware patience, and end-to-end maker follow-through.",
    tech: ['Hardware', 'ZMK', '3D Printing'],
    demoLink: "/projects/corne-keyboard",
    fullImage: true,
    date: "Feb 2026"
  },
  {
    imageSrc: "/images/projects/flattenhund.png",
    title: "Flattenhund",
    description: "Retro browser game with canvas gameplay, dog characters, mobile controls, and optional online leaderboard.",
    impact: "Fun JavaScript/game-dev signal with canvas work, touch controls, and Supabase-backed leaderboard ideas.",
    tech: ['JavaScript', 'Canvas', 'Supabase'],
    codeLink: "https://github.com/michaelpreciado/Flattenhund",
    demoLink: "https://theflappydoggame.netlify.app/",
    date: "Apr 2026"
  },
  {
    imageSrc: "/images/projects/photography.png",
    title: "Photography Portfolio",
    description: "Production-ready static photography site with optimized assets, offline caching, Docker, and Vercel support.",
    impact: "Useful client-work signal: performance, deployment, static optimization, and practical web delivery.",
    tech: ['JavaScript', 'Performance', 'Docker', 'Vercel'],
    codeLink: "https://github.com/michaelpreciado/photography-portfolio",
    demoLink: "https://mariopreciado-photography.netlify.app",
    date: "Apr 2026"
  },
  {
    emoji: "🤖",
    title: "Preciado Tech Business Page",
    description: "Business landing page for practical AI workflows, automation systems, and polished digital tools.",
    impact: "Supports freelance/consulting positioning around AI automation and production-minded web delivery.",
    tech: ['React', 'Vite', 'Framer Motion'],
    codeLink: "https://github.com/michaelpreciado/business-page",
    demoLink: "https://business-page-liart.vercel.app",
    date: "Apr 2026"
  }
];

export const featuredProjects = projectsData.filter((project) => project.featured);
