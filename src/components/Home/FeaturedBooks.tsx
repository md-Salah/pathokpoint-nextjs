"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const FeaturedBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?per_page=20&is_featured=true&in_stock=true",
    fetcher
  );

  return (
    <Carousel
      title="Featured Books"
      isLoading={isLoading}
      href="/books?is_featured=true&in_stock=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default FeaturedBooks;
