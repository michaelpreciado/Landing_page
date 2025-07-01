const blogPostsData = [
  {
    slug: 'my-tech-journey',
    title: 'My Tech Journey',
    excerpt: 'How dial-up tones, Einstein naps, and a DIY PC lit the path to my AI adventures.',
    date: '2024-01-22',
    content: `## **The Spark That Ignited It All** 🔥\n\nI'm **Michael** and my lifelong tech obsession began somewhere near the first grade when our family's hulking desktop screeched its way onto AOL. That dial up handshake was my first live concert, and I've been hooked on the magic of the digital world ever since.\n\n## **Inspirations** ✨\n\nI pull ideas from three very different giants:\n\n- **Albert Einstein** reminds me that stepping away taking a walk, grabbing a nap often cracks problems textbooks can't. (He basically invented "deep focus" decades before Pomodoro timers were cool.)\n- **Steve Jobs** proved tech can be equal parts engineering and art and that a gorgeous interface matters just as much as raw horsepower under the hood.\n- **Tony Stark** (yes, Iron Man). Because when you've accidentally fried enough hard drives, it's comforting to know someone else once built a super AI in a cave with a box of scraps.\n\nWhenever I'm stuck, I channel Einstein's curiosity, Jobs's polish, and a trace of Stark's determination.\n\n## **Building My First PC** 🛠️💻\n\nBy fifteen I'd pushed our hand me down HP desktop the kind you'd see in a school library well past its limits. Frames stuttered, compile times crawled, and adding one more browser tab felt like a dare. So I raided savings, ordered parts, and spent a weekend turning static cling bags and screwdrivers into my first self built rig. That machine booted faster, ran cooler, and sparked a lasting obsession with component upgrades and hardware tinkering.\n\nWhat I carried forward:\n\n1. **Learning thrives on curiosity.** Every setback dead drive, driver conflict, bottlenecked GPU pushes me to research, experiment, and improve.\n\n## **How I Actually Learn Every Day** 📚\n\nClassrooms never quite fit my ADHD brain, so I built a curriculum that moves at my own pace and keeps me current with the industry's rapid changes.\n\n- **Hardware deep dives:** Tearing down PCs, tracing failures, swapping parts, and rebuilding skills that also feed my inner PC gamer who's always chasing better frame rates.\n- **Online courses and certifications:** Whenever a respected platform releases a course on cloud architecture, AI, or security, I enroll and work through it methodically to stay aligned with best practices.\n- **Endless micro learning:** Documentation, community forums, late night YouTube walkthroughs, and now AI copilots that clarify concepts in plain language all fuel my curiosity between larger projects.\n- **Project driven sprints:** One week might be a focused Kubernetes lab; the next, performance tuning a distributed database short, goal oriented bursts that keep my attention anchored.\n- **Trend tracking:** I follow release notes, keynote streams, and hardware reviews to stay ahead of the latest tech shifts, then test new ideas on my own rigs before they reach production environments.\n\n## **Superpower Mode** ⚡️\n\nYes, ADHD can scatter my focus but when a concept clicks, hyper focus kicks in like afterburners. I'll lose hours (happily) untangling a bug or perfecting a UI button. The trick is setting clear checkpoints so the focus propels me forward instead of sideways.\n\n## **My Digital HomeBase** 🏠\n\nIn 2021 I set a goal: build a personal website from scratch. The first version was a single holographic style card floating in digital space with my photo and a handful of links. Since then it has morphed into an ever evolving showcase of experiments, projects, and the occasional dad joke hidden in the console. It's never "finished," and that's exactly the point.\n\n## **Embracing the AI Revolution** 🤖🚀\n\nThese days, I'm diving headfirst into the world of AI, and it's like adding rocket fuel to my tech passion. AI is like having a genius sidekick who's always ready to help me turn wild ideas into reality. It's like having a mini Einstein in my pocket, always ready to spark new ideas and keep me on my toes:\n\n- **Prototyping at warp speed:** AI tools help me mock up ideas in hours, not weeks.\n- **Future side quests:** a dog facial expression analyzer, a smarter plant health tracker, and SaaS tools that give small businesses big tech muscle without the big tech bill.\n\n## **Why I Love This Stuff** ❤️\n\nTechnology evolves overnight while humans take a millennia. That gap fascinates me. With the right idea and a few lines of code, you can:\n\n- **Solve real problems** for real people.\n- **Connect worlds** that never would've met otherwise.\n- **Turn imagination into something you can click, tap, or deploy.**\n\nHelping someone streamline their workflow makes every late night debug session worth it.\n\n## **What's Next** 🔮\n\nI'm doubling down on AI, refining my automation toolkit, and looking for ways to democratize tech for folks who think it's out of reach. If you need an enthusiastic partner to kick around ideas my inbox is always open.\n\n---`,
    icon: 'code',
    categories: ['Technology', 'AI'],
    heroImage: '/images/mac.JPG'
  },
  {
    slug: 'journey-through-the-cosmos',
    title: 'Journey Through the Cosmos',
    excerpt: 'Exploring our solar system, one celestial body at a time.',
    date: '2024-01-10',
    content: `# Journey Through the Cosmos 🌌\n\nExplore the wonders of space with this placeholder article.\n\n## Milky Way 🌌\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\n## Solar System ☀️🪐\n\n* Mercury\n* Venus\n* Earth\n* Mars\n\n### Conclusion 🔭\n\nThe universe is vast and full of mysteries waiting to be discovered.`,
    icon: 'globe',
    categories: ['Space', 'Exploration'],
    heroImage: '/images/macbook.jpg'
  },
  {
    slug: 'building-with-react-threejs',
    title: 'Building with React & Three.js',
    excerpt: 'How I crafted interactive 3D experiences on the web using the power of React Three Fiber.',
    date: '2024-01-20',
    content: `# Building with React & Three.js ⚛️🛠️\n\nReact Three Fiber allows you to harness the full power of Three.js within the React paradigm.\n\n## Getting Started 🚀\n\nInstall dependencies:\n\n\`\`\`bash\nyarn add three @react-three/fiber\n\`\`\`\n\n## Rendering a Cube 🧊\n\n\`\`\`jsx\n<Canvas>\n  <mesh>\n    <boxGeometry args={[1,1,1]} />\n    <meshStandardMaterial color="hotpink" />\n  </mesh>\n</Canvas>\n\`\`\`\n\nHappy coding! 🎉`,
    icon: 'code',
    categories: ['Development', '3D'],
    heroImage: '/images/macbook.jpg'
  }
];

// Sort blog posts by date (newest first)
export const blogPosts = blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date)); 