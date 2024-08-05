import { Suspense } from "react";

import { FilterInMobile, Filter, BookCard } from "@/components";
import { Book, Category } from "@/interface";
import PaginationHandler from "./PaginationHandler";
import { getBooks, getCategories } from "@/utils/api";
import { getPagination } from "@/utils/api";

const Books = async ({
  query,
  category_q,
}: {
  query: string;
  category_q: string;
}) => {
  const books: Book[] = await getBooks(query);
  const { totalPages }: { totalPages: number } = await getPagination(query);
  const categories: Category[] = await getCategories(`q=${category_q}`);

  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile categories={categories} />
      </div>

      <section className="layout-container grid grid-cols-12 gap-3 mt-3">
        <aside className="hidden sm:block sm:col-span-4 lg:col-span-3 xl:col-span-2">
          <Filter categories={categories} />
        </aside>
        <div className="layout-p sm:p-4 bg-white flex flex-col justify-between col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
          <div className="w-full overflow-hidden">
            <div className="flex justify-between gap-2.5">
              <input
                type="text"
                placeholder={`Search in ${"xyz"}...`}
                className="input input-bordered input-sm font-bn max-w-44 md:max-w-60"
              />
              <select className="select select-bordered select-sm sm:max-w-36 md:max-w-max focus:border-primary focus:outline-none">
                {[
                  "Sort by",
                  "Bestseller",
                  "Price low to high",
                  "Price high to low",
                  "Discount high to low",
                  "Recently published",
                  "Rating",
                ].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 my-3">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} fixW={false} />
                ))}
              </div>
            </Suspense>
            {books.length === 0 && (
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
