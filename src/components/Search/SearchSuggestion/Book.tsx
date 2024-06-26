import Image from "next/image";
import Link from "next/link";

import { ConditionBadge, InStockBadge } from "@/micro-components";
import { Book as BookInterface } from "@/interface";

const Book = ({ book }: { book: BookInterface }) => {
  const PriceAndDiscountPercent = () => (
    <div className="flex flex-col w-20 items-end">
      <span className="text-primary font-bold text-base">{`${book.sale_price} ৳`}</span>
      <span className="text-sm text-secondary-content -mt-1">{`(${Math.round(
        (book.sale_price / book.regular_price) * 100
      )}% off)`}</span>
    </div>
  );

  return (
    <div className="w-full group border-b border-base-300 bg-base-200">
      <Link href={`/books/${book.slug}`} className="w-full">
        <div className="flex flex-row p-2">
          {/* Image */}
          <div className="h-full min-h-16 min-w-14 w-16 relative rounded-md group-hover:opacity-80">
            <Image
              src={book.images[0].src}
              alt={book.name[0]}
              fill
              sizes="10vw"
              className="object-cover object-top rounded-md"
            />
          </div>

          {/* Name, Author & Price */}
          <div className="mx-2 w-full flex-1 ">
            <div className="flex flex-row justify-between">
              <div className="">
                <h1 className="text-base line-clamp-2 group-hover:underline leading-4">
                  {book.name}
                </h1>
                <p className="text-sm line-clamp-1 text-secondary-content">
                  {book.authors[0].name}
                </p>
              </div>
              <PriceAndDiscountPercent />
            </div>

            <div className="flex justify-between items-end mt-1">
              <ConditionBadge condition={book.condition} />
              <InStockBadge inStock={book.quantity > 0} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
