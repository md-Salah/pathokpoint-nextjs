import { FilterInMobile, Filter, BookCard } from "@/components";
import { Book, Category } from "@/interface";
import PaginationHandler from "./PaginationHandler";
import { getBooks, getCategories } from "@/utils/api";
import { Suspense } from "react";

const Books = async ({ query, category_q }: { query: string, category_q: string }) => {
  const books: Book[] = await getBooks(query);
  const categories: Category[] = await getCategories(`q=${category_q}`);

  return (
    <>
      <div className="flex sm:hidden mt-3 justify-end layout-container layout-px">
        <FilterInMobile categories={categories} />
      </div>

      <section className="layout-container flex gap-3 mt-3">
        <aside className="hidden sm:flex flex-1 min-w-[190px]">
          <Filter categories={categories} />
        </aside>
        <div className="layout-p sm:p-4 bg-white w-full sm:w-fit">
          <div className="flex justify-between gap-2.5">
            <input
              type="text"
              placeholder={`Search in ${"xyz"}...`}
              className="input input-bordered input-sm font-bn max-w-40 md:max-w-60"
            />
            <select className="select select-bordered select-sm w-32 text-black04">
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
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 my-3 w-full sm:w-fit">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </Suspense>
          {books.length === 0 && (
            <div className="py-20 text-center text-black04 w-10/12">No books found</div>
          )}
          <div className="text-right my-6">
            <PaginationHandler totalPages={20} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
