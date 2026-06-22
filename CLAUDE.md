# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Quick Start

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build static export to /out
npm run start    # Serve the static export
npm run lint     # Run Next.js lint
```

## Architecture

**Next.js 14 static site** exported to `/out` for static hosting. Author portfolio for Victoria Scott — home page lists books by section, dynamic slug-based pages for individual book details.

### Tech Stack

- **Framework:** Next.js 14 (App Router) with static export (`output: 'export'`)
- **Styling:** Tailwind CSS with custom fonts (Permanent Marker, Dosis, Raleway, Poppins)
- **Deployment:** Static HTML export — no server-side runtime required

### Project Structure

```
app/
  layout.tsx          # Root layout — fonts, Nav, Footer
  page.tsx            # Home page — author bio + book catalog by series
  [slug]/page.tsx     # Dynamic book detail pages
  globals.css         # Tailwind + custom CSS classes

components/
  Nav.tsx             # Header — logo (Permanent Marker font) + social icons
  Footer.tsx          # Footer — copyright + social icons

lib/
  books.ts            # Book data (type Book), getBook(), getSeriesBooks()
```

### Key Conventions

- **Path aliases:** `@/*` maps to the project root (configured in `tsconfig.json`)
- **Data layer:** All book data lives in `lib/books.ts` as a static array — cover images pulled from WordPress CDN
- **Static generation:** `generateStaticParams()` in `[slug]/page.tsx` pre-renders all book slug pages at build time
- **Design tokens:** Defined in `tailwind.config.ts` — colors (`gold: #ffc42e`, `body: #141618`), fonts, `maxWidth.site: '1200px'`
- **Custom CSS classes:** `.btn-gold`, `.section-heading`, `.site-divider`, `.book-content` — defined in `globals.css`

### Adding a New Book

1. Add a new `Book` object to the `books` array in `lib/books.ts`
2. The slug-based route auto-generates — no other changes needed
3. To add it to the home page grid, add the slug to the appropriate section array in `app/page.tsx`

### Book Data Shape

```ts
type Book = {
  slug: string;           // URL slug — must be unique
  title: string;
  publisher: string;
  pages: number;
  coverImage: string;     // WordPress CDN URL
  coverAlt: string;
  description: string;    // HTML string rendered via dangerouslySetInnerHTML
  amazonUrl: string;
  series?: string;        // Series name, e.g. 'Fire & Flood'
  seriesBooks?: string[]; // Slugs of other books in the same series
  ogDescription: string;  // Used for og:description and meta description
  ogImageWidth?: number;
  ogImageHeight?: number;
  canonicalUrl?: string;
};
```

### Series

- **Fire & Flood:** fire-flood → salt-stone
- **Dante Walker (Collector):** the-collector → the-liberator → the-warrior
- Stand-alones: violet-grenade, hear-the-wolves, titans, we-told-six-lies
