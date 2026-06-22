# Victoria Scott — Author Portfolio

Static author portfolio site for Victoria Scott, built with Next.js 14.

## Overview

A clean, book-forward portfolio showcasing Victoria's nine published novels across three series and standalone titles. The site mirrors the design and content of [victoriascott.com](https://www.victoriascott.com).

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, static export)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + custom CSS
- **Fonts:** Permanent Marker, Dosis, Raleway, Poppins (via `next/font/google`)
- **Deployment:** Any static host (Vercel, Netlify, GitHub Pages, S3)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build static export to `/out` |
| `npm run start` | Serve the static export locally |
| `npm run lint` | Run Next.js lint |

## Project Structure

```
app/
  layout.tsx          # Root layout — fonts, Nav, Footer
  page.tsx            # Home page — bio + book catalog
  [slug]/page.tsx     # Book detail pages (statically generated)
  globals.css         # Global styles + Tailwind

components/
  Nav.tsx             # Header with logo and social icons
  Footer.tsx          # Footer with copyright and social icons

lib/
  books.ts            # All book data, types, and helper functions
```

## Books

### Stand-Alone Novels
- [Violet Grenade](https://www.victoriascott.com/violet-grenade/)
- [Hear the Wolves](https://www.victoriascott.com/hear-the-wolves/)
- [Titans](https://www.victoriascott.com/titans/)
- [We Told Six Lies](https://www.victoriascott.com/we-told-six-lies/)

### Fire & Flood Series
1. [Fire & Flood](https://www.victoriascott.com/fire-flood/)
2. [Salt & Stone](https://www.victoriascott.com/salt-stone/)

### Dante Walker (Collector) Series
1. [The Collector](https://www.victoriascott.com/the-collector/)
2. [The Liberator](https://www.victoriascott.com/the-liberator/)
3. [The Warrior](https://www.victoriascott.com/the-warrior/)

## Adding a Book

Edit `lib/books.ts` and add a new `Book` object to the `books` array. Add the slug to the appropriate section array in `app/page.tsx` to show it on the home page. The detail page generates automatically.

## Deployment

The build outputs a fully static site to `/out`. Deploy that directory to any static host.

```bash
npm run build
# Deploy the /out directory
```
