import { Book } from '@/interface';

import type { MetadataRoute } from "next";

const productPerSitemap = 10000;

export async function generateSitemaps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/book/all?page=1`
  );
  const totalBooks = parseInt(response.headers.get("X-Total-Count") || "10");
  const numberOfSitemaps = Math.ceil(totalBooks / productPerSitemap);

  return Array.from({ length: numberOfSitemaps }, (_, index) => ({
    id: index,
  }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const productUrls: MetadataRoute.Sitemap = [];
  let totalPages = Infinity;
  let page = id * Math.ceil(productPerSitemap / 100) + 1;
  let totalFetchedBooks = 0;

  while (totalFetchedBooks < productPerSitemap && page <= totalPages) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/book/all?page=${page}&per_page=100`
    );
    const books = await response.json();
    totalPages = parseInt(response.headers.get("X-Total-Pages") || "1");

    books.forEach((book: Book) => {
      if (totalFetchedBooks < productPerSitemap) {
        productUrls.push({
          url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/books/${book.public_id}/${book.slug}`,
          lastModified: new Date(book.updated_at || ""),
          changeFrequency: "weekly",
          priority: 0.8,
        });
        totalFetchedBooks += 1;
      }
    });

    page += 1;
  }

  return [
    ...productUrls,
  ];
}
