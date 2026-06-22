import type { MetadataRoute } from 'next';
import { books } from '@/lib/books';

const BASE_URL = 'https://www.victoriascott.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const bookPages = books.map((book) => ({
    url: `${BASE_URL}/${book.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...bookPages,
  ];
}
