import { Book } from '@/interface';
import { getBooks } from '@/utils/api';

import BookItemMobile from './BookItemMobile';
import BooksTable from './BooksTable';
import DeliveryDetailsSummary from './DeliveryDetailsSummary';
import PaymentItem from './PaymentItem';
import ProgressTracker from './ProgressTracker';
import TransactionsTable from './TransactionsTable';

const OrderDetails = async () => {
  const books: Book[] = await getBooks();

  return (
    <div className="">
      <div className="bg-white">
        {/* Header */}
        <div className="border-b border-black06 p-4 lg:p-7 flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <div className="text-base flex items-center space-x-1">
              <span className="text-[#2B2B2B]">Order ID</span>
              <span className="text-primary font-bold">#A125452</span>
            </div>
            <div className="flex items-center space-x-2 text-xxs">
              <span className="bg-black07 py-[3px] px-2 rounded">
                Oct 11, 2023
              </span>
              <span className="bg-black07 py-[3px] px-2 rounded">11:45 PM</span>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-2">
            {/* <span className="font-semibold text-sm text-end">Paid: 200৳, Due: 520৳</span> */}
            <button className="btn btn-outline btn-sm btn-primary px-4">
              Pay Now
            </button>
          </div>
        </div>

        <ProgressTracker />

        {/* Books */}
        <div className="flex flex-col p-4 lg:p-7 lg:hidden">
          {books.slice(0, 3).map((book) => (
            <BookItemMobile key={book.id} book={book} />
          ))}
        </div>
        <div className="hidden lg:block">
          <BooksTable />
        </div>
      </div>

      <DeliveryDetailsSummary />

      <div className="bg-white lg:hidden p-4 mt-4 flex flex-col space-y-4">
        <div className="font-bold">
          <h2>Payment Info</h2>
        </div>
        <div className="space-y-10 py-5">
          <PaymentItem />
          <PaymentItem />
        </div>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default OrderDetails;
