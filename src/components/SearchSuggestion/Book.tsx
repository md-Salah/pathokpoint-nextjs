import { books } from "@/constants";
import { ConditionBadge, InStockBadge } from "@/micro-components";
import Image from "next/image";
import Link from "next/link";

const Book = ({ book }: { book: (typeof books)[0] }) => {
  const PriceAndDiscountPercent = () => (
    <div className="flex flex-col w-20 items-end">
      <span className="text-primary font-bold text-base">{`${book.sell_price} ৳`}</span>
      <span className="text-sm">{`(${Math.round(
        (book.sell_price / book.regular_price) * 100
      )}% off)`}</span>
    </div>
  );

  return (
    <div className="w-full group border-b border-base-300 item-bg">
      <Link href={`/books/${book.slug}`} className="w-full">
        <div className="flex flex-row p-2">
          {/* Image */}
          <div className="h-full min-h-16 min-w-14 w-16 relative rounded-md group-hover:opacity-80">
            <Image
              src={book.images[0]}
              alt={book.name}
              fill
              sizes="10vw"
              className="object-cover object-top rounded-md"
            />
          </div>

          {/* Name, Author & Price */}
          <div className="mx-2 w-full flex-1 ">
            <div className="flex flex-row justify-between">
              <div className="">
                <h1 className="text-base line-clamp-2 text-secondary group-hover:underline leading-4">
                  {book.name}
                </h1>
                <p className="text-sm line-clamp-1 gray-subtitle">
                  {book.authors[0].name}
                </p>
              </div>
              <PriceAndDiscountPercent />
            </div>

            <div className="flex justify-between items-end ">
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
