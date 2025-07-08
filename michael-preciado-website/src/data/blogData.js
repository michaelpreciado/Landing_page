const blogPostsData = [
  {
    slug: 'my-tech-journey',
    title: 'My Relationship With Tech',
    excerpt: 'From dial-up screeches to my first PC build, my tech story so far.',
    date: '2025-07-15',
    content: `### Dial Up Days\n\nRemember the metallic screech of dial up? To 6 year old me, that forty five second concert was my gateway to the digital universe. Huddled in a corner of our Bay Area home, I spent hours playing pixelated browser games of Garfield and Toy Story wondering to myself how the hell does this thing even actually even work? I was always curious about tech but at a young age I became fascinated once it became part of our every day lives with smartphones and in many ways it has enhanced our connections to the people we love. It's no doubt tech is going to continue to evolve but with AI pretty much being added in as rocket fuel we are going to start seeing advancements in society which we could only have dreamt of a few years ago.  \n\n### Building My First Rig 🛠️\n\nBy fifteen, our hand me down HP wheezed through every tab I opened. I had save enough money to buy the list of parts needed to build my first fully functional PC. I spent hours watching youtube videos and reading online tech forums. Fry's Electronics became my home one day and a pile of parts turned into my first self built PC. It booted in an instant and ran ice cold with the giant heatsink I had slapped onto my CPU. This ignited a lifelong obsession with tech hardware upgrades and software optimization that is still running bright to this day.\n\n### How I Learn Every Day

After high school I took some classes at my nearest community college, but most of my learning came from my personal time. Thanks to the countless hours spent on my computers, new software came easy, and and when it came to solving actual problems, I spent less time trying to find a folder and more time executing on the problem itself. This way of working bled into the way I learn new programming techniques by diving all in first and learning as much as I can about whatever technology it is to prevent myself from limiting any knowledge. I'm currently pursuing Machine Learning and continue to learn new Software Development skills through Codeacademy and other sites in my spare time.

It's simple really. If I don't know the answer then I am going to use all the tools at my disposal to find it.

I’m thankful to work in a job which allows me to continue learning but the sessions which I take the most knowledge come from those countless hours late night troubleshooting. 

1. Hardware deep dives: tear downs, trace fixes, and countless rebuilds.
2. Endless micro learning: docs, forums, late night YouTube, AI copilots translating complexity into plain English.
3. Trend tracking: release notes, keynotes, hardware reviews. I test new tech on my own rigs before it hits production.
4. Superpower Mode: ADHD scatters focus until hyper focus strikes. When it does, hours are gone while I untangle bugs or perfect UI pixels. Checkpoints keep that rocket fuel aimed forward, not sideways. Noise cancelling headphones has done wonders in helping me tune out all the other noise and remain laser focused.

### My Digital Home Base 🏠

Version 1.0 of my personal site (2021) was a single holographic card with a photo and a few links. Today it is a living playground of projects I am currently working on. “Finished” is never the goal as it is a personal showcase of my technical creativity. I work on my projects daily refining them as Ideas come. My current plans are to continue writing blog posts based on current interests and begin adding some IRL project using my 3D Printer. Stay tuned!

<figure class="blog-hero-image matrix-overlay" style="margin-top: 2rem; margin-bottom: 2rem;">
  <img src="/images/hike.jpeg" alt="A photo of me on a hike" />
  <figcaption class="blog-hero-caption">Disconnecting to reconnect.</figcaption>
</figure>

### Inspirations

1. Albert Einstein: proof that a walk or nap can solve problems textbooks sometimes cannot
2. Steve Jobs: showed the world tech is equal parts engineering and art
3. Tony Stark: if he can build a suit trapped in a cave with scraps, I can build an app

### Why I Love This Stuff ❤️

With the right idea and a few lines of code, you can

1. Solve real problems for real people
2. Connect worlds that never would have met
3. Turn imagination into something you can click, tap, or deploy

Helping someone streamline a workflow or bring an ideas to life makes every late night debug worthwhile.

### What’s Next

I am doubling down on AI and hunting for ways to democratize tech for anyone who thinks it is out of reach. My inbox is always open if you have an idea.`,
    icon: 'code',
    categories: ['Technology'],
    heroImage: '/images/blog1.jpeg'
  }
];

// Sort blog posts by date (newest first)
export const blogPosts = blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date)); 