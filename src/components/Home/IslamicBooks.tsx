"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const IslamicBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?is_islamic=true&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="ইসলামিক কালেকশন"
      isLoading={isLoading}
      href="/books?is_islamic=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default IslamicBooks;
