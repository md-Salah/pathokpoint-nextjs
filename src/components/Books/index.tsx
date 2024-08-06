import { Suspense } from "react";

import { FilterInMobile, Filter, BookCard } from "@/components";
import { Author, Book, Category, Publisher } from "@/interface";
import PaginationHandler from "./PaginationHandler";
import Search from "./Search";
import Sort from "./Sort";

import {
  getAuthors,
  getBooks,
  getPagination,
  getCategories,
  getPublishers,
} from "@/utils/api";


interface Props {
  searchParams?: any;
  authorSlug?: string;
  categorySlug?: string;
  publisherSlug?: string;
}

const Books = async ({
  searchParams,
  authorSlug,
  categorySlug,
  publisherSlug,
}: Props) => {
  const params = new URLSearchParams(searchParams);
  if (authorSlug) params.set("author__slug__in", authorSlug);
  else if (categorySlug) params.set("category__slug__in", categorySlug);
  else if (publisherSlug) params.set("publisher__slug__in", publisherSlug);
  const query = params.toString();

  const books: Book[] = await getBooks(query);
  const { totalPages }: { totalPages: number } = await getPagination(query);

  // Getting filter data
  const category_q = params.get("category_q") || "";
  const publisher_q = params.get("publisher_q") || "";
  const author_q = params.get("author_q") || "";
  const categories: Category[] = categorySlug
    ? []
    : await getCategories(`q=${category_q}`);
  const publishers: Publisher[] = publisherSlug
    ? []
    : await getPublishers(`q=${publisher_q}`);
  const authors: Author[] = authorSlug ? [] : await getAuthors(`q=${author_q}`);

  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile
          categories={categories}
          publishers={publishers}
          authors={authors}
        />
      </div>

      <section className="layout-container grid grid-cols-12 gap-3 mt-3">
        <aside className="hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <Filter
            categories={categories}
            publishers={publishers}
            authors={authors}
          />
        </aside>
        <div className="layout-p sm:p-4 bg-white flex flex-col justify-between col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="w-full overflow-hidden">
            <div className="flex justify-between gap-2.5">
              <Search />
              <Sort />
            </div>
            <Suspense
              fallback={<div className="skeleton w-full h-60 my-3"></div>}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 my-3">
                {books &&
                  books.map((book) => (
                    <BookCard key={book.id} book={book} fixW={false} />
                  ))}
              </div>
            </Suspense>
            {books && books.length === 0 && (
              <div className="py-20 text-center text-black04">
                No books found
              </div>
            )}
          </div>
          <div className="mt-6">
            <PaginationHandler totalPages={totalPages} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
