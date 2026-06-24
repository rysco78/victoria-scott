import type { Metadata } from 'next';
import Link from 'next/link';
import { books } from '@/lib/books';

export const metadata: Metadata = {
  title: 'Victoria Scott | YA Author',
  description:
    'Author of critically acclaimed young adult and middle grade novels, including the "Collector" Trilogy and "Fire & Flood" Series.',
  openGraph: {
    title: 'About Victoria - Victoria Scott',
    description:
      'Victoria Scott is the author of nine novels. Her books have been YALSA-nominated and have received starred reviews. Translated and sold in thirteen countries.',
    url: 'https://www.victoriascott.com/',
  },
  twitter: {
    title: 'About Victoria - Victoria Scott',
    description:
      'Victoria Scott is the author of nine novels. Her books have been YALSA-nominated and have received starred reviews. Translated and sold in thirteen countries.',
  },
};

const standAlones = ['violet-grenade', 'hear-the-wolves', 'titans', 'we-told-six-lies'];
const fireFloodSeries = ['fire-flood', 'salt-stone'];
const collectorSeries = ['the-collector', 'the-liberator', 'the-warrior'];
const otherWorks = [
  {
    title: 'Four Houses',
    href: 'https://www.amazon.com/Four-Houses-Victoria-Scott-ebook/dp/B0058KSMFW/',
    image: '/images/FOUR-HOUSES-2.webp',
  },
  {
    title: "Stories I Don't Tell",
    href: 'https://heytori.medium.com/the-stories-i-dont-tell-701e282e9ab2',
    image: '/images/Stories-I-Dont-Tell.webp',
  },
];

function BookGrid({ slugs }: { slugs: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      {slugs.map((slug) => {
        const book = books.find((b) => b.slug === slug);
        if (!book) return null;
        return (
          <Link key={slug} href={`/${slug}/`} style={{ display: 'block' }}>
            <img
              src={book.coverImage}
              alt={book.title}
              style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
              loading="lazy"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
        {/* Bio */}
        <section
          style={{ padding: '60px 0 40px' }}
          className="flex flex-col md:flex-row gap-8 md:gap-10"
        >
          {/* Desktop: photo on left */}
          <div
            style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}
            className="hidden md:block"
          >
            <img
              src="/images/victoria-scott-headshot-new-e1770426233268.jpeg"
              alt="Victoria Scott"
              width={645}
              height={1000}
              style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
            />
          </div>
          <div
            style={{
              flex: '1 1 0',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
            className="md:pl-5"
          >
            {/* Mobile: full-width photo above title */}
            <div className="md:hidden mb-6">
              <img
                src="/images/victoria-scott-headshot-new-e1770426233268.jpeg"
                alt="Victoria Scott"
                width={645}
                height={1000}
                style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-dosis)',
                fontSize: '50px',
                fontWeight: 200,
                color: '#303133',
                marginBottom: '20px',
                lineHeight: 1.1,
              }}
            >
              ABOUT VICTORIA
            </p>
            <div style={{ textAlign: 'left' }}>
              <p style={{ marginBottom: '1em', lineHeight: 1.7 }}>
                Victoria (Tori) Scott is the author of nine novels. Her books have been
                YALSA-nominated, appeared on the Spirit of Texas Reading Program, and have received
                starred reviews—the highest honor—by top literary critics. Her stories have been
                translated and sold in thirteen countries, and <em>Fire &amp; Flood</em> is
                currently an Amazon Teacher&apos;s Pick.
              </p>
              <p style={{ lineHeight: 1.7 }}>
                In addition to being a novelist, Tori also founded Scribbler, a company that helped
                aspiring authors write their first book. Scribbler grossed millions in revenue, and
                was featured by BuzzFeed and Good Morning Texas before being successfully sold in
                2025. Tori holds an MBA, and is currently writing her first book for adults,
                tentatively titled <em>This Violent Machine</em>. The author lives in Dallas, and
                loves hearing from readers. You can read her nonfiction work{' '}
                <a
                  href="https://heytori.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#777777', textDecoration: 'underline' }}
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <hr className="site-divider" />

        {/* Stand-alone novels */}
        <section style={{ padding: '50px 0' }}>
          <p
            className="section-heading"
            style={{ marginBottom: '40px' }}
            dangerouslySetInnerHTML={{ __html: 'STAND-ALONE NOVELS' }}
          />
          <BookGrid slugs={standAlones} />
        </section>

        <hr className="site-divider" />

        {/* Fire & Flood series */}
        <section style={{ padding: '50px 0' }}>
          <p
            className="section-heading"
            style={{ marginBottom: '40px' }}
            dangerouslySetInnerHTML={{ __html: 'FIRE &amp; FLOOD SERIES' }}
          />
          <BookGrid slugs={fireFloodSeries} />
        </section>

        <hr className="site-divider" />

        {/* Collector series */}
        <section style={{ padding: '50px 0' }}>
          <p
            className="section-heading"
            style={{ marginBottom: '40px' }}
            dangerouslySetInnerHTML={{ __html: 'COLLECTOR SERIES' }}
          />
          <BookGrid slugs={collectorSeries} />
        </section>

        <hr className="site-divider" />

        {/* Other works */}
        <section style={{ padding: '50px 0 60px' }}>
          <p className="section-heading" style={{ marginBottom: '40px' }}>
            OTHER WORKS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {otherWorks.map((work) => (
              <a
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  style={{ width: '100%', height: 'auto', display: 'block', boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
