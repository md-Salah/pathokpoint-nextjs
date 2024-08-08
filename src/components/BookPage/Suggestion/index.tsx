"use client";
import useSWR from "swr";

import { Carousel, BookCard, CategoryCard } from "@/components";
import { Book, Category } from "@/interface";
import { fetcher } from "@/utils/axiosConfig";

const Suggestion = ({ book }: { book: Book }) => {
  const { data: books, isLoading } = useSWR(`/book/all`, fetcher);
  const { data: categories, isLoading: isCatLoading } = useSWR(
    `/category/all`,
    fetcher
  );

  return (
    <div>
      <Carousel
        title="Similar Books"
        href={`/authors/${book.authors[0]?.slug}`}
        isLoading={isLoading}
      >
        {books &&
          books.map((book: Book) => <BookCard key={book.id} book={book} />)}
      </Carousel>
      <Carousel title="Related Categories" isLoading={isCatLoading}>
        {categories &&
          categories.map((category: Category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </Carousel>
    </div>
  );
};

export default Suggestion;
