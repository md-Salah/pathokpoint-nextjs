"use client";
import { Book } from '@/interface';

import BooksBySameAuthor from './BooksBySameAuthor';
import SimilarBooks from './SimilarBooks';

const Suggestion = ({ book }: { book: Book }) => {
  return (
    <div>
      {book.categories.length > 0 && <SimilarBooks book={book} />}
      {book.authors.length > 0 && <BooksBySameAuthor book={book} />}
    </div>
  );
};

export default Suggestion;
