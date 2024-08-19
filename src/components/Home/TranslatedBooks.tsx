"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const TranslatedBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?is_translated=true&in_stock=true",
    fetcher
  );
  return (
    <Carousel
      title="অনুবাদ কালেকশন"
      isLoading={isLoading}
      href="/books?is_translated=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default TranslatedBooks;
