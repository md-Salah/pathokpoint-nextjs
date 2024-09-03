import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const SimilarBooks = ({ book }: { book: Book }) => {
  const query = `category__name__in=${book.categories
    .map((category) => category.name)
    .join(",")}&in_stock=true`;
  const { data: books, isLoading } = useSWR(`/book/all?${query}`, fetcher);

  if (!books || books.length === 0) return null;
  return (
    <Carousel
      title="Similar books"
      href={`/books?${query}`}
      isLoading={isLoading}
    >
      {books &&
        books.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default SimilarBooks;
