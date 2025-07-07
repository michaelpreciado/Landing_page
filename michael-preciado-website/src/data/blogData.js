const blogPostsData = [
  {
    slug: 'my-tech-journey',
    title: 'My Relationship With Tech',
    excerpt: 'From dial-up screeches to my first PC build, my tech story so far.',
    date: '2025-01-01',
    content: `### Dial Up Days\n\nRemember the metallic screech of dial up? The forty five second concert was my first grade gateway to the entire digital universe. Huddled in a corner of our Hayward home, I spent hours playing pixelated browser games and wondering to myself how does this thing even work?\n\n### Building My First Rig 🛠️\n\nBy fifteen, our hand me down HP wheezed through every tab I opened. I had save enough money to buy the list of parts needed to build my first fully functional PC. I spent hours watching youtube videos and reading online tech forums. Fry's Electronics became my home one day and a pile of parts turned into my first self built PC. It booted in an instant and ran ice cold with the giant heatsink I had slapped onto my build. This ignited a lifelong obsession with tech hardware and software optimization that is still running bright to this day.\n\n<div class="blog-article-image" style="max-width:300px;margin:1.5rem auto;">\n  <img src="/images/blog1.jpeg" alt="Laptop and notebook on desk" />\n</div>\n\n### How I Learn Every Day\n\n1. Hardware deep dives: tear downs, trace fixes, and countless rebuilds.\n2. Endless micro learning: docs, forums, late night YouTube, AI copilots translating complexity into plain English.\n3. Trend tracking: release notes, keynotes, hardware reviews. I test new tech on my own rigs before it hits production.\n\n### Superpower Mode ⚡️\n\nADHD scatters focus until hyper focus strikes. When it does, hours are gone while I untangle bugs or perfect UI pixels. Clear checkpoints keep that rocket fuel aimed forward, not sideways.  Using noise cancelling headphones and my phones "Do not disturb" feature has done wonders in helping me tune out all the other noise and remain laser focused. Learning how to manage my attention has helped me in ensuring I am moving towards my goals.\n\n### My Digital Home Base 🏠\n\nVersion 1.0 of my personal site (2021) was a single holographic card with a photo and a few links. Today it is a living playground of experiments, projects. "Finished" is never the goal as it is a personal showcase of my technical creativity.\n\n### Inspirations\n\n1. Albert Einstein: proof that a walk or nap can solve problems textbooks cannot\n2. Steve Jobs: showed the world tech is equal parts engineering and art\n3. Tony Stark: if he can build a suit in a cave with scraps, I can build an app from scratch\n\n### Why I Love This Stuff ❤️\n\nWith the right idea and a few lines of code, you can\n\n1. Solve real problems for real people\n2. Connect worlds that never would have met\n3. Turn imagination into something you can click, tap, or deploy\n\nHelping someone streamline a workflow makes every late night debug worthwhile.\n\n### What's Next

I am doubling down on AI and hunting for ways to democratize tech for anyone who thinks it is out of reach. Have an idea or a challenge? My inbox is always open. Let's build the future together.

    <div class="blog-article-image" style="max-width:300px;margin:1.5rem auto;">
      <img src="/images/outsidelaptop.jpeg" alt="Laptop outside" />
    </div>`,
    icon: 'code',
    categories: ['Technology'],
    heroImage: '/images/mirror.jpeg'
  }
];

// Sort blog posts by date (newest first)
export const blogPosts = blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date)); 