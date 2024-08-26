import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { CartItem as CartItemType } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';

const ProductDetails = ({ book }: { book: CartItemType }) => {
  return (
    <div className="w-full">
      <div className="flex w-full overflow-hidden">
        <Link href={`/books/${book.public_id}/${book.slug}`}>
          <figure className="h-full w-16 sm:min-w-24 sm:w-24 hover:opacity-80 relative rounded">
            <Image
              src={book.images[0]?.src || defaultSrc.book}
              alt={book.name}
              fill
              sizes="(min-width: 640px) 24rem, 16rem"
              className="object-contain rounded"
            />
          </figure>
        </Link>

        {/* Name, Publisher & Price */}
        <div className="flex flex-col ml-3">
          <Link
            href={`/books/${book.public_id}/${book.slug}`}
            className="w-full"
          >
            <h1
              className={`font-semibold hover:underline ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
              {book.cover && (
                <span className="ml-1 text-xs text-black02 font-normal">
                  ({book.cover})
                </span>
              )}
            </h1>
          </Link>
          {book.authors.length > 0 && (
            <h3
              className={`mt-1.5 text-xs text-black04 ${
                !isEnglish(book.authors[0].name) && "font-bn"
              }`}
            >
              {"by " + book.authors[0]?.name}
            </h3>
          )}

          <div className="mt-2">
            <ConditionBadge condition={book.condition} />
          </div>

          <h3 className="mt-1.5 text-highlight text-xs">
            {book.in_stock && book.quantity > 0
              ? book.quantity + " Items in stock"
              : "Out of stock"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
