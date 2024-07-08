import Image from "next/image";
import Link from "next/link";

import { ConditionBadge } from "@/micro-components";
import { Book as BookInterface } from "@/interface";
import { isEnglish } from "@/utils";

interface Props {
  books: BookInterface[];
}

const VariationSlider = ({ books }: Props) => {
  return (
    <div className="sm:ml-3 h-full">
      <div className="bg-white h-full">
        <h1 className="p-4 font-semibold border-b">Variation</h1>
        <div className="carousel carousel-vertical">
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariationSlider;

const Book = ({ book }: { book: BookInterface }) => {
  const defaultSrc = "/default/book.png";

  return (
    <div className="w-full group carousel-item px-4 py-2 border-b">
      <Link href={`/books/${book.slug}`} className="w-full">
        <div className="flex w-full overflow-hidden">
          <figure className="min-w-16 w-16 h-[74px] sm:h-24 relative group-hover:opacity-80 rounded">
            <Image
              src={book.images[0].src || defaultSrc}
              alt={book.name}
              fill
              sizes="10vw"
              className="object-cover object-top rounded"
              placeholder="blur"
              blurDataURL={defaultSrc}
            />
          </figure>

          {/* Name, Publisher & Price */}
          <div className="flex flex-1 flex-col ml-2">
            <h1
              className={`text-base font-medium truncate group-hover:underline ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
            </h1>
            {book.publisher && (
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-black04 whitespace-nowrap">
                  {book.publisher.name}
                </h3>
                <div className="sm:hidden">
                  <ConditionBadge condition={book.condition} />
                </div>
              </div>
            )}
            <div className="mt-1 hidden sm:block">
              <ConditionBadge condition={book.condition} />
            </div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-base text-[#2B2B2B] font-medium">
                ৳{book.sale_price}
              </span>
              {book.regular_price > book.sale_price && (
                <span className="text-xs line-through text-black04 ml-1">
                  ৳{book.regular_price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
