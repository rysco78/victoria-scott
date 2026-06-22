import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { books, getBook, getSeriesBooks } from '@/lib/books';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = getBook(params.slug);
  if (!book) return {};
  return {
    title: book.title,
    description: book.ogDescription,
    openGraph: {
      title: `${book.title} – Victoria Scott`,
      description: book.ogDescription,
      url: book.canonicalUrl,
      images: book.ogImageWidth
        ? [
            {
              url: book.coverImage,
              width: book.ogImageWidth,
              height: book.ogImageHeight,
              alt: book.coverAlt,
            },
          ]
        : [{ url: book.coverImage, alt: book.coverAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} – Victoria Scott`,
      description: book.ogDescription,
      images: [book.coverImage],
    },
  };
}

export default function BookPage({ params }: Props) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const seriesBooks = getSeriesBooks(book);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Title */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 30px 0' }}>
        <h1
          style={{
            fontFamily: 'var(--font-dosis)',
            fontSize: '75px',
            fontWeight: 200,
            color: '#303133',
            textAlign: 'center',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            marginBottom: '60px',
          }}
        >
          {book.title}
        </h1>
      </div>

      {/* Content + cover */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px 60px' }}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div
            style={{ flex: '0 0 66.666%', maxWidth: '66.666%' }}
            className="w-full md:w-auto"
          >
            <div
              className="book-content"
              dangerouslySetInnerHTML={{ __html: book.description }}
            />
            <div style={{ marginTop: '30px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                ORDER ON AMAZON
              </a>
              <Link href="/" className="btn-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                BACK TO BOOK LIST
              </Link>
            </div>
          </div>
          <div
            style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}
            className="w-full md:w-auto"
          >
            <img
              src={book.coverImage}
              alt={book.coverAlt}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Series books */}
      {seriesBooks.length > 0 && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 30px 60px' }}>
          <hr className="site-divider" style={{ marginBottom: '40px' }} />
          <p
            style={{
              fontFamily: 'var(--font-dosis)',
              fontSize: '28px',
              fontWeight: 200,
              color: '#303133',
              marginBottom: '30px',
            }}
          >
            Also in the {book.series} Series
          </p>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            {seriesBooks.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}/`}
                style={{ display: 'block', width: 'calc(33.333% - 20px)', maxWidth: '200px' }}
              >
                <img
                  src={related.coverImage}
                  alt={related.coverAlt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
