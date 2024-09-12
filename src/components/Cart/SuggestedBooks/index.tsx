import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book, CartItem } from '@/interface';
import { RootState } from '@/redux/store';
import { fetcher } from '@/utils/axiosConfig';

const SuggestedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const categorySlugs = cartItems.map((item) => item.categories[0]?.slug).join(",");
  const { data, isLoading } = useSWR(
    `/book/all?page=1&per_page=20&category__slug__in=${categorySlugs}&in_stock=true`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setBooks(
        data.filter(
          (book: Book) =>
            !cartItems.some((item: CartItem) => item.id === book.id)
        )
      );
    }
  }, [data, cartItems]);

  if (books.length === 0) return null;
  return (
    <Carousel title="Books you may love" isLoading={isLoading}>
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Carousel>
  );
};

export default SuggestedBooks;
