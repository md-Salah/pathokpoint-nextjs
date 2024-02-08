import Image from "next/image";
import Link from "next/link";

import { books } from "@/constants";
import { ConditionBadge } from "@/micro-components";

interface Props {
  variation: (typeof books)[3];
}

const VariationSlider = () => {
  const Book = ({ book }: any) => {
    return (
      <div className="w-full group carousel-item">
        <Link href={`/books/${book.slug}`} className="w-full">
          <div className="flex flex-row py-2">
            {/* Image */}
            <div className="min-h-16 min-w-14 w-16 relative group-hover:opacity-80">
              <Image
                src={book.images[0]}
                alt={book.name[0]}
                fill
                sizes="10vw"
                className="object-cover object-top"
                placeholder="blur"
                blurDataURL="/default/book.svg"
              />
            </div>

            {/* Name, Publisher & Price */}
            <div className="mx-3 flex-1">
              <div>
                <h1 className="text-base line-clamp-2 group-hover:underline leading-4">
                  {book.name}
                </h1>
                <div>
                  <span className="mr-2 text-primary font-semibold">
                    {book.sell_price} ৳
                  </span>
                  <span className="text-xs line-through text-secondary-content">
                    {book.regular_price} ৳
                  </span>
                </div>
                {book.publisher && (
                  <p className="text-sm line-clamp-1 text-secondary-content">
                    <span>প্রকাশনীঃ</span>
                    <span className="ml-2">{book.publisher.name}</span>
                  </p>
                )}
                <ConditionBadge condition={book.condition} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
      <div className="p-4">
        <h1 className="font-bold pb-2 text-lg border-b">Variation</h1>
        <div className="carousel carousel-vertical max-h-96">
          {books.slice(0, 6).map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
  );
};

export default VariationSlider;
