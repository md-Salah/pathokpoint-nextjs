import { MobileHeader } from '@/components/UserProfile';
import { Book } from '@/interface';
import { getBooks } from '@/utils/api';

import BookItem from './BookItem';

const Wishlist = async () => {
  const books: Book[] = await getBooks();
  return (
    <div className="bg-white">
      <MobileHeader title="Wishlist" />
      <div className="p-4 md:p-6 lg:p-10">
        <h4 className="text-black02 font-semibold text-lg hidden md:block">
          Wishlist
        </h4>
        <div className="space-y-4 mt-4 md:mt-6 lg:mt-10">
          <h4 className="text-black04 font-semibold text-xs pb-2 border-b border-b-black06">
            TOTAL ITEMS: 3
          </h4>
          {books.slice(0, 4).map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
