import { Book } from '@/interface';

import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productUrls: MetadataRoute.Sitemap = [];
  let page = 1;
  let hasMoreProducts = true;

  while (hasMoreProducts) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/book/all?page=${page}&per_page=100`
    );
    const books = await response.json();

    books.forEach((book: Book) => {
      productUrls.push({
        url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/books/${book.public_id}/${book.slug}`,
        lastModified: new Date(book.updated_at || ""),
        changeFrequency: "daily",
        priority: 0.8,
      });
    });

    page += 1;
    if (books.length < 100) {
      hasMoreProducts = false;
    }
  }

  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/books`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/authors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/publishers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productUrls,
  ];
}
