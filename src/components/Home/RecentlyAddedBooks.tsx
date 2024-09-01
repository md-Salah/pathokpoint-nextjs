"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const RecentlyAddedBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?order_by=-created_at&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="Recently Added Books"
      isLoading={isLoading}
      href="/books?order_by=-created_at&in_stock=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default RecentlyAddedBooks;
