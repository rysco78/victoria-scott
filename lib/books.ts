export type Book = {
  slug: string;
  title: string;
  publisher: string;
  pages: number;
  coverImage: string;
  coverAlt: string;
  description: string;
  accolades?: string;
  amazonUrl: string;
  series?: string;
  seriesBooks?: string[];
  ogDescription: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  canonicalUrl?: string;
};

export const books: Book[] = [
  {
    slug: 'violet-grenade',
    title: 'Violet Grenade',
    publisher: 'Entangled Teen',
    pages: 300,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/Violet-Grenade-Cover.jpg',
    coverAlt: 'Violet Grenade cover',
    description: `
      <p>Her name is Domino Ray.</p>
      <p>But the voice inside her head has a different name.</p>
      <p>When the mysterious Ms. Karina finds Domino in an alley and offers her a position as a live-in performer at her girls-only carnival, Dom jumps at the chance to escape her past. But Ms. Karina's Carnivale Mystique isn't what it seems. It's a girls-only collection of damaged outsiders, each more dangerous than the last. And Ms. Karina herself is not who she claims to be.</p>
      <p>When someone begins murdering the girls, Dom is determined to find the killer—and keep herself alive. But the closer she gets to the truth, the more she realizes the voice in her head may know more about what's going on than she does.</p>
      <p><strong>A Must-Read YA from USA Today</strong></p>
    `,
    amazonUrl: 'https://www.amazon.com/Violet-Grenade-Victoria-Scott/dp/1633756874',
    ogDescription: "Her name is Domino Ray. But the voice inside her head has a different name. A Must-Read YA from USA Today. Victoria Scott's Violet Grenade.",
    canonicalUrl: 'https://www.victoriascott.com/violet-grenade/',
  },
  {
    slug: 'hear-the-wolves',
    title: 'Hear the Wolves',
    publisher: 'Scholastic Press',
    pages: 240,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/Hear-the-Wolves-Cover.jpg',
    coverAlt: 'Hear the Wolves cover',
    description: `
      <p>Sloan is a hunter.</p>
      <p>So she shouldn't be afraid of anything. But ever since her mom left the family and she lost hearing in one ear in a blizzard, it's been hard to talk to people, and near-impossible to go anywhere or do anything without her dad or big sister within eyesight – it makes her too scared to be on her own.</p>
      <p>When they leave her home alone for what should only be two nights, she's already panicked. Then the snow starts falling and doesn't stop. One of her neighbors is hurt in an accident. And the few people still left in Rusic need to make it to the river and the boat that's tied there – their only way to get to a doctor from their isolated Alaska town.</p>
      <p>But the woods are icy cold, and the wolves are hungry. Sloan and her group are running out of food, out of energy, and out of time. That's when the wolves start hunting them….</p>
      <p><strong>"Short but powerful, with edge-of-your-seat suspense, this is one journey that should remain in readers' memories." –<em>Kirkus Reviews</em></strong></p>
    `,
    amazonUrl: 'https://www.amazon.com/Hear-Wolves-Victoria-Scott/dp/1338043587',
    ogDescription: "Stranded in isolated Alaska during a blizzard, hunter Sloan must lead her group to safety before the wolves close in. A survival thriller by Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/hear-the-wolves/',
  },
  {
    slug: 'titans',
    title: 'Titans',
    publisher: 'Scholastic Press',
    pages: 320,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/Titans-Cover.jpg',
    coverAlt: 'Titans cover',
    description: `
      <p>Ever since the Titans first appeared in her Detroit neighborhood, Astrid Sullivan's world has revolved around the mechanical horses. She and her best friend have spent countless hours watching them and their jockeys practice on the track. It's not just the thrill of the race. It's the engineering of the horses and the way they're programmed to seem so lifelike. The Titans are everything that fascinates Astrid, and nothing she'll ever touch.</p>
      <p>She hates them a little, too. Her dad lost everything betting on the Titans. And the races are a reminder of the gap between the rich jockeys who can afford the expensive machines to ride, and the working class friends and neighbors of Astrid's who wager on them.</p>
      <p>But when Astrid's offered a chance to enter an early model Titan in this year's derby, well, she decides to risk it all. Because for a girl from the wrong side of the tracks, it's more than a chance at fame or money. Betting on herself is the only way to hang on to everyone in the world she cares about.</p>
      <p><strong>✩ "Right from the start, Scott commands attention with the simple yet compelling premise, which tackles topics of privilege and class as it entertains." – <em>Publishers Weekly</em>, starred review</strong></p>
      <p><strong>✩ "…the end result is a solid, exciting story about a determined girl faced with difficult circumstances." – <em>Bulletin</em>, starred review</strong></p>
    `,
    amazonUrl: 'https://www.amazon.com/Titans-Victoria-Scott/dp/0545806011/',
    ogDescription: "In a future Detroit where mechanical horses race for glory, Astrid Sullivan bets everything on herself. Two starred reviews. By Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/titans/',
  },
  {
    slug: 'we-told-six-lies',
    title: 'We Told Six Lies',
    publisher: 'Entangled Teen',
    pages: 400,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/We-Told-Six-Lies-Cover.jpg',
    coverAlt: 'We Told Six Lies cover',
    description: `
      <p>Remember how many lies we told, Molly? It's enough to make my head spin. You were wild when I met you, and I was mad for you. But then something happened. And now you're gone.</p>
      <p>But don't worry. I'll find you. I just need to sift through the story of us to get to where you might be. I've got places to look, and a list of names.</p>
      <p>The police have a list of names, too. See now? There's another lie. There is only one person they're really looking at, Molly.</p>
      <p>And that's yours truly.</p>
    `,
    amazonUrl: 'https://www.amazon.com/s?k=We+Told+Six+Lies+Victoria+Scott',
    ogDescription: "Remember how many lies we told, Molly? A twisting psychological thriller about a missing girl and the boy who knew her best. By Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/we-told-six-lies/',
  },
  {
    slug: 'fire-flood',
    title: 'Fire & Flood',
    publisher: 'Scholastic Press',
    pages: 320,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/Fire-and-Flood-Cover.jpg',
    coverAlt: 'Fire & Flood cover',
    description: `
      <p>Tella Holloway is losing it. Her brother is sick, and when a dozen doctors can't determine the cause, her parents decide to move to Montana for the fresh air. She's lost her friends, her parents are driving her crazy, her brother is dying—and she's helpless to change anything.</p>
      <p>Until she receives mysterious instructions on how to become a Contender in the Brimstone Bleed. It's an epic race across jungle, desert, ocean, and mountain that could win her the prize she desperately desires: the Cure for her brother's illness. But all the Contenders are after the Cure for people they love–with only an animal companion for support–and there's no guarantee that Tella (or any of them) will survive the race.</p>
      <p><strong>Amazon Teacher's Pick</strong></p>
    `,
    amazonUrl: 'https://www.amazon.com/Fire-Flood-Victoria-Scott/dp/0545537460/',
    series: 'Fire & Flood',
    seriesBooks: ['salt-stone'],
    ogDescription: "Tella Holloway will race through jungle, desert, ocean, and mountain to save her dying brother. An Amazon Teacher's Pick. Book 1 in the Fire & Flood series by Victoria Scott.",
    ogImageWidth: 970,
    ogImageHeight: 1500,
    canonicalUrl: 'https://www.victoriascott.com/fire-flood/',
  },
  {
    slug: 'salt-stone',
    title: 'Salt & Stone',
    publisher: 'Scholastic Press',
    pages: 320,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/Salt-and-Stone-Cover.jpg',
    coverAlt: 'Salt & Stone cover',
    description: `
      <p>In <em>Fire &amp; Flood</em>, Tella Holloway faced a dangerous trek through the jungle and a terrifying march across the desert, braving one treacherous challenge after another with her Pandora, a mystical creature that could mean the difference between life and death. Now Tella's headed into a new race—an ocean and a mountain standing between her and the Cure that might save her brother's life.</p>
      <p>Tella's lust for survival is stronger than ever, but it's also making her darker. She's willing to sacrifice anyone and anything to win—even if that means betraying her friends. She wants to be the girl she was before the race started, but she's not sure that girl exists anymore. And with her heart pulling her in two directions at once, she doesn't know which would hurt worse: losing the race or losing the boy she's falling for.</p>
    `,
    amazonUrl: 'https://www.amazon.com/Salt-Stone-Victoria-Scott/dp/0545537487/',
    series: 'Fire & Flood',
    seriesBooks: ['fire-flood'],
    ogDescription: "Forty-one Contenders remain. One Cure. Tella Holloway faces the ocean and the mountain in the race-to-the-death conclusion. Book 2 in the Fire & Flood series.",
    canonicalUrl: 'https://www.victoriascott.com/salt-stone/',
  },
  {
    slug: 'the-collector',
    title: 'The Collector',
    publisher: 'Entangled Teen',
    pages: 350,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/The-Collector-Cover.jpg',
    coverAlt: 'The Collector cover',
    description: `
      <p>Dante Walker is flippin' awesome, and he knows it. His good looks, killer charm, and stellar confidence have made him one of Hell's best soul collectors. His job is simple: weed through the losers and find souls worth collecting.</p>
      <p>But when he's sent to collect the soul of seventeen-year-old Charlie Cooper, something happens for the first time in Dante's life—he's not sure he wants to do his job. Charlie is like nothing Dante has ever seen before. She's not afraid of him. She's not afraid of anything. And for some reason, that makes Dante feel like he's the one who should be afraid. Because Dante can't stop thinking about her, can't stop wanting to be near her, even though he knows he should stay away.</p>
      <p>And as Dante gets closer to Charlie, he starts questioning everything about his job, his life, and what it means to be on the right side of heaven and hell.</p>
    `,
    amazonUrl: 'https://www.amazon.com/The-Collector-Victoria-Scott/dp/1620612429/',
    series: 'Dante Walker',
    seriesBooks: ['the-liberator', 'the-warrior'],
    ogDescription: "Dante Walker is Hell's best soul collector—until his latest assignment makes him question everything. Book 1 in the Dante Walker series by Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/the-collector/',
  },
  {
    slug: 'the-liberator',
    title: 'The Liberator',
    publisher: 'Entangled Teen',
    pages: 325,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/The-Liberator-Cover.jpg',
    coverAlt: 'The Liberator cover',
    description: `
      <p>Dante has a shiny new cuff wrapped around his ankle, and he doesn't like it one bit. His new accessory comes straight from Big Guy himself and marks the former demon as a liberator. Despite his gritty past and bad boy ways, Dante Walker has been granted a second chance.</p>
      <p>When Dante is given his first mission as a liberator to save the soul of seventeen-year-old Aspen, he knows he's got this. But Aspen reminds him of the rebellious life he used to live and is making it difficult to resist sinful temptations. Though Dante is committed to living clean for his girlfriend Charlie, this dude's been a playboy for far too long…and old demons die hard.</p>
      <p>With Charlie becoming the girl she was never able to be pre-makeover and Aspen showing him how delicious it feels to embrace his inner beast, Dante will have to go somewhere he never thought he'd return to in order to accomplish the impossible: save the girl he's been assigned to, and keep the girl he loves.</p>
    `,
    amazonUrl: 'https://www.amazon.com/Liberator-Dante-Walker-Novel/dp/1622660161/',
    series: 'Dante Walker',
    seriesBooks: ['the-collector', 'the-warrior'],
    ogDescription: "Dante Walker has switched sides—but saving souls is harder than collecting them. Book 2 in the Dante Walker series by Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/the-liberator/',
  },
  {
    slug: 'the-warrior',
    title: 'The Warrior',
    publisher: 'Entangled Teen',
    pages: 325,
    coverImage: 'https://www.victoriascott.com/wp-content/uploads/The-Warrior-Cover-v2.jpg',
    coverAlt: 'The Warrior cover',
    description: `
      <p>War between heaven and hell is coming, but Dante Walker makes it look damn good.</p>
      <p>Dante's girlfriend, Charlie, is fated to lead the forces of good in an upcoming battle, and it's Dante's job to keep her safe and out of Satan's reach. But when Dante puts Charlie's well-being before his own, it sets off a chain of events that could change everything.</p>
      <p>Now Dante and Charlie are running from both sides—all the while trying to convince anyone and everyone to join their cause. The race to win the war is on, and it all comes down to one fateful decision that only Dante can make.</p>
    `,
    amazonUrl: 'https://www.amazon.com/Warrior-Dante-Walker-Victoria-Scott/dp/1622662784/',
    series: 'Dante Walker',
    seriesBooks: ['the-collector', 'the-liberator'],
    ogDescription: "Heaven and hell collide in the thrilling conclusion to the Dante Walker series. War is coming—and only Dante can stop it. By Victoria Scott.",
    canonicalUrl: 'https://www.victoriascott.com/the-warrior/',
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getSeriesBooks(book: Book): Book[] {
  if (!book.seriesBooks) return [];
  return book.seriesBooks.map((s) => books.find((b) => b.slug === s)).filter(Boolean) as Book[];
}
