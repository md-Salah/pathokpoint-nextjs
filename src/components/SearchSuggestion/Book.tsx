import { books } from "@/constants";
import { ConditionBadge } from "@/micro-components";
import Image from "next/image";
import Link from "next/link";

const Book = ({ book }: { book: (typeof books)[0] }) => {
  const Price = () => (
    <div className="flex flex-col min-w-16 items-end">
      <span className="text-primary font-bold text-base">{`${book.sell_price} ৳`}</span>
      <span className="text-sm">{`(${
        Math.round((book.sell_price / book.regular_price) * 100)
      }% off)`}</span>
    </div>
  );

  return (
    <div className="mt-1 w-full bg-white shadow-md rounded-md group hover:bg-gray-50">
      <Link href={`/books/${book.slug}`}>
        <div className="card card-side card-compact">
          {/* Image */}
          <div className="w-20 min-w-20 relative">
            <Image
              src={book.images[0]}
              alt={book.name}
              fill
              className="object-cover object-top rounded-l-md"
            />
          </div>

          {/* Name & Author */}
          <div className="flex flex-row card-body justify-between ">
            <div>
              <h1 className="card-title text-base line-clamp-2 group-hover:underline">
                {book.name}
              </h1>
              <p className="text-sm line-clamp-1">{book.authors[0].name}</p>
              <ConditionBadge condition={book.condition} />
            </div>
            <Price />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
