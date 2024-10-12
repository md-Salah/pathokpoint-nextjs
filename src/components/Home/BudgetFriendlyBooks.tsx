"use client";
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const BudgetFriendlyBooks = () => {
  const { data, isLoading } = useSWR(
    "book/all?per_page=20&sale_price__lte=100&sale_price__gte=70&order_by=-in_stock,sale_price",
    fetcher
  );

  return (
    <Carousel
      title="Budget Friendly Books"
      isLoading={isLoading}
      href="/books?order_by=-created_at&in_stock=true"
    >
      {data && data.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default BudgetFriendlyBooks;
