import Image from 'next/image';
import useSWR from 'swr';

import { defaultSrc } from '@/constants';
import { Book, OrderItem } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

const BookItemMobile = ({ item }: { item: OrderItem }) => {
  const { data: book, isLoading }: { data: Book; isLoading: boolean } = useSWR(
    `/book/id/${item.book.id}`,
    fetcher
  );
  if (isLoading) return <div className="skeleton w-full h-20"></div>;
  return (
    <div className="flex items-center justify-between w-full py-3 border-b border-b-black06">
      <div className="flex items-start h-fit gap-3">
        {/* Image */}
        <div className="relative">
          <figure className="w-16 h-20 relative rounded">
            <Image
              src={book.images[0]?.src || defaultSrc.book}
              alt={book.name}
              fill
              className="object-cover rounded"
            />
          </figure>
          <div className="absolute -bottom-1 -right-2 bg-white py-[3px] px-[5px] rounded-full border border-black06 text-xxs text-[#2B2B2B] text-center font-bold">
            <span>x{item.quantity}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span
            className={`text-sm md:text-base font-semibold text-black02 ${
              !isEnglish(book.name) && "font-bn"
            }`}
          >
            {book.name}
          </span>
          {book.authors.length > 0 && (
            <span
              className={`text-xxs md:text-xs text-black04 font-normal max-w-32 truncate ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              by {book.authors.map((author) => author.name).join(", ")}
            </span>
          )}
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-base text-[#2B2B2B]">
              ৳{item.sold_price}
            </span>
            <span className="font-medium text-xs text-secondary-content line-through">
              ৳{item.regular_price}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-end space-x-1">
          <span className="text-xs text-secondary-content">Total:</span>
          <span className="font-semibold text-base text-[#2B2B2B]">
            ৳{item.sold_price * item.quantity}
          </span>
        </div>
        <ConditionBadge condition={book.condition} />
      </div>
    </div>
  );
};

export default BookItemMobile;
