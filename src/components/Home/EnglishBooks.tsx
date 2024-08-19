"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const EnglishBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?language=english&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="ইংরেজি ভাষার বিদেশি বই"
      isLoading={isLoading}
      href="/books?language=english"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default EnglishBooks;
