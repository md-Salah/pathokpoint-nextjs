import { Suspense } from 'react';

import { BookCard, Filter, FilterInMobile, OnPageSearchBar, PaginationHandler } from '@/components';
import { Book } from '@/interface';
import { DataCount } from '@/micro-components';
import { getBooksAndPagination } from '@/utils/api';

import Sort from './Sort';

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
  params.set(
    "order_by",
    ["-in_stock", params.get("order_by") || ""].filter(Boolean).join(",")
  );
  params.set("per_page", "20");
  const query = params.toString();

  const {
    books,
    currentPage,
    perPage,
    totalCount,
    totalPages,
  }: {
    books: Book[];
    totalPages: number;
    currentPage: number;
    perPage: number;
    totalCount: number;
  } = await getBooksAndPagination(`${query}&`);

  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile />
      </div>

      <section className="layout-container grid grid-cols-12 gap-3 mt-3">
        <aside className="hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <Filter />
        </aside>
        <div className="layout-p sm:p-4 bg-white flex flex-col justify-between col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="w-full overflow-hidden">
            <DataCount
              currentPage={currentPage}
              perPage={perPage}
              totalCount={totalCount}
              context="books"
            />
            <div className="mt-3 flex justify-between gap-2">
              <div className="grow max-w-52 md:max-w-60">
                <OnPageSearchBar placeholder="Search on this page..." />
              </div>
              <div className="w-36 md:w-40">
                <Sort />
              </div>
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
                <p>No books found</p>
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
