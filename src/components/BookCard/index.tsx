"use client";

import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Book } from '@/interface';
import { ConditionBadge, WishlistButton } from '@/micro-components';
import { isEnglish } from '@/utils';

import AddToCart from './AddToCart';

const BookCard = ({ book, fixW = true }: { book: Book; fixW?: boolean }) => {
  return (
    // Standard: w-[163px] md:w-[236px] md:min-w-[212px]
    <div
      className={`card relative bg-base-200 border border-black06 hover:shadow-lg hover:cursor-pointer ${
        fixW ? "w-[163px] md:w-[237px]" : "w-full"
      }`}
    >
      <Frame book={book} />
      <Discount
        regular_price={book.regular_price}
        sale_price={book.sale_price}
      />

      <div className="card-body px-3 pb-3 md:px-5 pt-3 gap-1 justify-between bg-white">
        <div className="">
          <Title name={book.name} public_id={book.public_id} slug={book.slug} />
          {book.authors.length > 0 && (
            <Author name={book.authors[0].name} slug={book.authors[0].slug} />
          )}
        </div>
        <ConditionBadge condition={book.condition} />
        <Price
          regular_price={book.regular_price}
          sale_price={book.sale_price}
        />
        {/* Action buttons */}
        <div className="card-actions justify-between mt-1">
          <AddToCart book={book} />
          <div className="hidden md:block h-9 w-10">
            <WishlistButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

const Frame = ({ book }: { book: Book }) => (
  <Link href={`/books/${book.public_id}/${book.slug}`} target="_blank">
    <figure className="relative h-[130px] md:h-[188px] w-full rounded-t bg-[#F1F2F4]">
      <Image
        src={book.images[0]?.src || defaultSrc.book}
        alt="Book"
        fill
        className="object-contain object-top"
        sizes="50vw"
        loading="lazy"
      />
    </figure>
  </Link>
);

const Discount = ({
  regular_price,
  sale_price,
}: {
  regular_price: number;
  sale_price: number;
}) => (
  <>
    {regular_price > sale_price && (
      <div
        className={`absolute top-3 right-3 w-8 md:w-11 h-8 md:h-11 bg-[#F2213A] rounded-[7px] rotate-45 justify-center items-center flex`}
      >
        <h4 className="-rotate-45 text-white font-extrabold text-xs md:text-base">
          {`${Math.floor(
            ((regular_price - sale_price) / regular_price) * 100
          )}`}
          <span className="text-[0.5rem] md:text-[0.875rem]">%</span>
        </h4>
      </div>
    )}
  </>
);

const Title = ({
  name,
  public_id,
  slug,
}: {
  name: string;
  public_id: number;
  slug: string;
}) => {
  return (
    <Link
      href={`/books/${public_id}/${slug}`}
      target="_blank"
      className="hover:underline"
    >
      <h2
        className={`card-title text-sm md:text-base font-semibold line-clamp-1 ${
          isEnglish(name) ? "" : "font-bn"
        }`}
      >
        {name}
      </h2>
    </Link>
  );
};

const Author = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link href={`/authors/${slug}`} target="_blank">
      <p
        className={`truncate text-xs leading-tight text-black04 hover:underline mb-1 ${
          isEnglish(name) ? "" : "font-bn"
        }`}
      >
        {"by " + name}
      </p>
    </Link>
  );
};

const Price = ({
  regular_price,
  sale_price,
}: {
  regular_price: number;
  sale_price: number;
}) => (
  <div className="flex items-baseline mt-2">
    <span className="font-bold text-sm md:text-base">{`${sale_price}৳`}</span>
    {regular_price > sale_price && (
      <span className="ml-2 line-through text-black04 font-medium text-xxs md:text-xs">{`${regular_price} ৳`}</span>
    )}
  </div>
);
