import Image from 'next/image';
import useSWR from 'swr';

import { defaultSrc } from '@/constants';
import { Book, OrderItem } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

const TableRow = ({ item }: { item: OrderItem }) => {
  const { data: book, isLoading }: { data: Book; isLoading: boolean } = useSWR(
    `/book/id/${item.book.id}`,
    fetcher
  );
  if (isLoading) return <tr className="skeleton w-full h-20"></tr>;

  return (
    <tr>
      <td>
        <div className="flex gap-4">
          <figure className="w-24 h-24 relative rounded border">
            <Image
              src={book.images[0]?.src || defaultSrc.book}
              alt={book.name}
              fill
              className="object-contain rounded"
            />
          </figure>

          <div className="flex flex-col gap-2">
            <span
              className={`text-sm md:text-base font-semibold text-black02 ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
            </span>
            {book.authors.length > 0 && (
              <span
                className={`text-xxs md:text-xs text-black04 max-w-32 truncate ${
                  !isEnglish(book.name) && "font-bn"
                }`}
              >
                by {book.authors.map((author) => author.name).join(", ")}
              </span>
            )}
            <ConditionBadge condition={book.condition} />
          </div>
        </div>
      </td>
      <td className="text-sm">৳{item.regular_price}</td>
      <td className="text-sm">৳{item.sold_price}</td>
      <td className="text-sm">{item.quantity}x</td>
      <td className="text-sm">৳{item.sold_price * item.quantity}</td>
    </tr>
  );
};

export default TableRow;
