"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const SebaBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?per_page=20&publisher__name__in=সেবা প্রকাশনী&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="সেবা প্রকাশনীর বই"
      isLoading={isLoading}
      href="/books?publisher__name__in=সেবা প্রকাশনী"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default SebaBooks;
