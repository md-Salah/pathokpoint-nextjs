import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Book as BookInterface } from '@/interface';
import { ConditionBadge, InStockBadge } from '@/micro-components';
import { isEnglish } from '@/utils';

const Book = ({ book }: { book: BookInterface }) => {
  return (
    <div className="w-full bg-white hover:bg-gray-100 border-b border-black06 group">
      <Link href={`/books/${book.public_id}/${book.slug}`} className="w-full">
        <div className="flex px-4 py-3 gap-3">
          {/* Image */}
          <div className="h-[68px] min-w-14 relative">
            <Image
              src={book.images[0]?.src || defaultSrc.book}
              alt={book.name[0]}
              fill
              sizes="10vw"
              className="object-cover object-center group-hover:opacity-90"
            />
          </div>

          {/* Name, Author & Price */}
          <div className="flex flex-col w-full justify-between">
            <div className="flex justify-between w-full">
              <div className={`${!isEnglish(book.name) && "font-bn"}`}>
                <h1 className="text-sm font-semibold line-clamp-1 group-hover:underline">
                  {book.name}
                </h1>
                {book.authors.length > 0 && (
                  <p className="mt-0.5 text-xs text-black04 line-clamp-1">
                    {book.authors[0].name}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-20 items-end">
                <span className="text-primary font-bold text-sm">{`${book.sale_price}৳`}</span>
                {book.regular_price > book.sale_price && (
                  <span className="mt-1 text-black04 font-medium text-xs line-through">{`${book.regular_price}৳`}</span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-end mt-1 w-full">
              <ConditionBadge condition={book.condition} />
              <InStockBadge inStock={book.in_stock && book.quantity > 0} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
