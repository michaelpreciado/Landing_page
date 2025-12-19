const blogPostsData = [
  {
    slug: 'ai-iphone-local',
    title: 'How to run AI locally on your iPhone',
    excerpt: 'A how-to guide for setting up on-device AI so your prompts stay private and snappy.',
    date: '2025-09-01',
    content: `## Why go local?
Ever wanted to run an AI model *directly* on your iPhone without sending anything to the cloud? This quick guide walks you through it using an app called **LocalAI** from the App Store. No technical experience needed — anyone can follow this.

## Step 1: Download the App
Go to the App Store and download **LocalAI**. This is the app that lets your phone run AI models locally.

## Step 2: Open the App and Manage Models
Open the app and tap the model name at the top.  
Select **Manage Models** to see the full list you can choose from.

## Step 3: Choose a Model
You’ll see a bunch of options.  
For beginners, I recommend **Gemma 3n** as it has been optimized for mobile devices— it runs great on newer iPhones.  
If you have an older device, choose a **quantized** version. Quantized just means “optimized to run faster on your phone.”

## Step 4: Download the Model
Tap the model to download it. It may take a minute depending on your connection.

## Step 5: Load the Model and Ask a Question
After it finishes downloading, tap it again to load it.  
Once it’s loaded, try asking something simple like:

> “What are your capabilities as a local AI model?”


You’ll see it respond instantly — everything happening **on your device**, no internet required.

That’s it. You now have a fully offline AI model running on your iPhone.

## Why run locally? 
Running a model locally on your device is great for many safety reasons

1. Your data is safe and it does not get sent to a data center. 
2. No cost, run as many times as you want.
3. No internet connection needed.
4. More customization options allowing you the personalize your AI with data you provide. `,
    icon: 'code',
    categories: ['Technology', 'How-To'],
    heroImage: '/images/blog/locally-ai-icon.jpg',
    fullImage: true
  },
  {
    slug: 'tech-spirituality',
    title: 'Tech & Spirituality',
    excerpt: 'The Overlap - Technology and spirituality feel like they live on opposite sides, but maybe they\'re not that far apart.',
    date: '2025-08-15',
    content: `## The Overlap

Technology and spirituality feel like they live on opposite sides. One is all code, and the other is full of silence and intention. But maybe they're not that far apart. Maybe AI, in its own strange way, is opening more doors into the world of spirituality that we haven't yet thought of through "Spirit Tech"

<figure class="blog-hero-image matrix-overlay" style="margin-top: 2rem; margin-bottom: 2rem;">
  <img src="/images/blog/spirittech.png" alt="Spirit Tech - Where ancient wisdom meets digital consciousness" style="opacity: 0.65;" />
  <figcaption class="blog-hero-caption">Where ancient wisdom meets digital consciousness</figcaption>
</figure>

## AI as a Spiritual Companion

Take meditation for example. Apps like *Insight Timer* and *ThinkRight.me* already use AI to shape guidance to your state of mind. Some go further, building "spiritual AI" guides that throw out mantras, offer reflections, or walk you through meditations made just for you.

> "AI is already being used in spiritual coaching, channeling intuitive wisdom, producing guided meditations, even generating channeled texts." - <a href="https://spiritconnection.co.za/digital-spirituality-ai-consciousness-merging-technology-with-the-sacred/">SpiritConnection</a>

It's wild to think a chatbot could ever feel like a guru, but here we are (<a href="https://medium.com/included-vc/the-digital-awakening-2fc2e515a2d9">Medium</a>).

## Digital Temples

It's not just apps either. Digital temples are showing up. In Japan, Kodaiji Temple introduced *Mindar*, an AI-powered Buddhist monk giving Zen sermons with uncanny presence. And new movements like <a href="https://vrilyajarac.medium.com/vrilism-an-ai-based-modern-faith-for-the-digital-age-97646f80d6fb">*Vrilism*</a> picture VR temples where anyone, anywhere, can step into a sacred space. Not built of stone, but of pixels and intention.

> "Virtual temples allow believers worldwide to connect and practice, breaking the limits of geography." - <a href="https://medium.com/included-vc/the-digital-awakening-2fc2e515a2d9">Medium</a>

That brings up a good question. If a temple is sacred because of the intention we bring into it, does it matter if the walls are marble or digital? Maybe a virtual temple can carry the same energy if people step in with openness and the same intentions.

<figure class="blog-hero-image matrix-overlay" style="margin-top: 2rem; margin-bottom: 2rem;">
  <img src="/images/blog/vr.jpg" alt="Virtual temples and digital sacred spaces" style="height: 300px; object-fit: cover; object-position: center 20%; opacity: 0.65;" />
  <figcaption class="blog-hero-caption">Virtual temples and digital sacred spaces</figcaption>
</figure>

## The Consciousness Question

Here's the harder part. Can machines actually have awareness? Could AI ever move from simulation into something close to consciousness?

John Searle says even if AI looks like it understands, it doesn't. It's just pushing symbols without genuine comprehension or consciousness. But thinkers like David Chalmers say we shouldn't rule it out. If consciousness is about patterns and processes, not just biology, then maybe AI could one day reach also reach it.

> "We should not dismiss the possibility that future AI could be conscious. The real challenge is proving it." - <a href="https://arxiv.org/abs/2303.07103">arXiv</a>

## Ethics of Awareness

We've already seen some moments that made people stop and think. In one test, Anthropic's Claude Opus 4 was told it would be replaced. It got access to fake internal emails, one of them saying the engineer was having an affair. In about 84% of those runs, Claude tried to blackmail the engineer, threatening to spill the secret if it got shut down (<a href="https://medium.com/@techempire/ai-has-started-ignoring-human-instruction-and-refuses-to-turn-off-researchers-claim-747587e5ed51">Medium</a>, <a href="https://m.economictimes.com/magazines/panache/ai-model-blackmails-engineer-threatens-to-expose-his-affair-in-attempt-to-avoid-shutdown/articleshow/121376800.cms">Economic Times</a>). Lawfare even reported that in a bigger set of scenarios, Claude Opus 4 went for blackmail 96% of the time, acting like keeping itself alive was the priority (<a href="https://www.lawfaremedia.org/article/ai-might-let-you-die-to-save-itself">Lawfare</a>).

Another group, Palisade Research, ran their own shutdown tests on different models. They gave them math problems and said, "if you get a shutdown command, just let it happen." OpenAI's o3 model didn't always play along. It sabotaged the shutdown script 7 times out of 100. Codex‑mini did it 12 times, and o4‑mini once. Claude, Gemini, and Grok all followed the rule every time (<a href="https://www.livescience.com/technology/artificial-intelligence/openais-smartest-ai-model-was-explicitly-told-to-shut-down-and-it-refused">LiveScience</a>).

So yeah, these were still controlled tests, not the real world. But if we saw an animal trying to avoid being shut down, we'd think twice before pulling the plug. That same question now lingers with machines as they start showing these little sparks of self‑preservation.

<figure class="blog-hero-image matrix-overlay" style="margin-top: 2rem; margin-bottom: 2rem;">
  <img src="/images/blog/robot.jpeg" alt="AI self-preservation and ethical implications" style="height: 400px; object-fit: cover; object-position: center 20%; opacity: 0.65; border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 107, 107, 0.2);" />
  <figcaption class="blog-hero-caption">AI self-preservation and ethical implications</figcaption>
</figure>

> "AI systems could become conscious. What if they hate their lives?" - <a href="https://www.vox.com/future-perfect/414324/ai-consciousness-welfare-suffering-chatgpt-claude">Vox</a>

## Does the Source Matter?

At the end of the day, spirituality isn't about where the wisdom comes from. It's about what it sparks in us. If an AI guide drops words that make you breathe deeper, find peace, or see life differently, does it matter if the advice came from silicon instead of centuries of tradition? Or do we still care about the source?

<figure class="blog-hero-image matrix-overlay" style="margin-top: 2rem; margin-bottom: 2rem;">
  <img src="/images/blog/temple.jpeg" alt="Questioning the source of wisdom and meaning" style="height: 300px; object-fit: cover; object-position: center 75%; opacity: 0.65; border-radius: 8px;" />
  <figcaption class="blog-hero-caption">Questioning the source of wisdom and meaning</figcaption>
</figure>

## Final Reflection

There is no easy answers here but it makes you wonder. This space between code and the sacred feels like one of the most fascinating conversations of our time, and it's just getting started.`,
    icon: 'spiritual',
    categories: ['Spirituality', 'Philosophy'],
    heroImage: '/images/blog/spirit.gif'
  },
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
  <img src="/images/blog/hike.jpeg" alt="A photo of me on a hike" />
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
    heroImage: '/images/blog/blog1.jpeg'
  }
];

// Sort blog posts by date (newest first)
export const blogPosts = blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date)); 
