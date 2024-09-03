import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const BooksBySameAuthor = ({ book }: { book: Book }) => {
  const { data: books, isLoading } = useSWR(
    `/book/all?author__name__in=${book.authors[0].name}&in_stock=true`,
    fetcher
  );

  if (!books || books.length === 0) return null;
  return (
    <Carousel
      title="Books by same author"
      href={`/authors/${book.authors[0].slug}?in_stock=true`}
      isLoading={isLoading}
    >
      {books &&
        books.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </Carousel>
  );
};

export default BooksBySameAuthor;
