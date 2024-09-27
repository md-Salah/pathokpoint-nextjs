import { Book } from '@/interface';
import { NotFound } from '@/micro-components';

import AdditionalInfo from './AdditionalInfo';
import BookDetails from './BookDetails';
import Suggestion from './Suggestion';
import Variation from './Variation';

const BookPage = ({ book }: { book: Book | null }) => {
  if (!book)
    return (
      <NotFound>
        দুঃখিত! <br />
        বইটি পাওয়া যায়নি
      </NotFound>
    );

  return (
    <div>
      <div className="grid grid-cols-8 layout-container">
        <div className="col-span-8 lg:col-span-6">
          <BookDetails book={book} />
        </div>
        <div className="col-span-8 sm:col-span-5 lg:col-span-8 lg:order-1">
          <AdditionalInfo book={book} />
        </div>
        <div className="layout-mt col-span-8 sm:col-span-3 lg:col-span-2">
          <Variation book={book} />
        </div>
      </div>
      <Suggestion book={book} />
    </div>
  );
};

export default BookPage;
