import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { OrderItem } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';

const ItemInMobile = ({ item }: { item: OrderItem }) => {
  return (
    <div className="flex items-center justify-between w-full py-3 border-b border-b-black06">
      <div className="flex items-start h-fit gap-3">
        {/* Image */}
        <div className="relative">
          <figure className="w-16 h-20 relative rounded">
            <Image
              src={item.book.images[0]?.src || defaultSrc.book}
              alt={item.book.name}
              fill
              className="object-cover rounded"
            />
          </figure>
          <div className="absolute -bottom-1 -right-2 bg-white py-[3px] px-[5px] rounded-full border border-black06 text-xxs text-[#2B2B2B] text-center font-bold">
            <span>x{item.quantity}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Link
            href={`/books/${item.book.public_id}/${item.book.slug}`}
            className="w-full hover:underline"
            target="_blank"
          >
            <span
              className={`text-sm md:text-base font-semibold text-black02 ${
                !isEnglish(item.book.name) && "font-bn"
              }`}
            >
              {item.book.name}
            </span>
          </Link>
          {item.book.authors.length > 0 && (
            <span
              className={`text-xxs md:text-xs text-black04 font-normal max-w-32 truncate ${
                !isEnglish(item.book.name) && "font-bn"
              }`}
            >
              by {item.book.authors.map((author) => author.name).join(", ")}
            </span>
          )}
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-base text-[#2B2B2B]">
              ৳{item.sold_price}
            </span>
            {item.regular_price !== item.sold_price && (
              <span className="font-medium text-xs text-black04 line-through">
                ৳{item.regular_price}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-end space-x-1">
          <span className="text-xs text-black04">Total:</span>
          <span className="font-semibold text-base text-[#2B2B2B]">
            ৳{item.sold_price * item.quantity}
          </span>
        </div>
        <div className="flex justify-end">
          <ConditionBadge condition={item.book.condition} />
        </div>
      </div>
    </div>
  );
};

export default ItemInMobile;
