"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const MustReadBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?is_must_read=true&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="মাস্ট রিড কালেকশন"
      isLoading={isLoading}
      href="/books?is_must_read=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default MustReadBooks;
