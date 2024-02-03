import Image from "next/image";
import { ConditionBadge, Heart } from "@/micro-components";
import Link from "next/link";

const BookCard = ({ book }: { book: any }) => {
  const Frame = () => (
    <Link href={`books/${book.slug}`} target="_blank">
      <figure className="relative h-48 w-full rounded-t-md bg-base-300">
        <Image
          src={book.images[0]}
          alt="Book"
          fill
          className="object-contain object-top"
          sizes="50vw"
          loading="lazy"
        />
        <div
          className={`absolute top-0 left-0 rounded-md p-3.5 badge badge-primary font-bold`}
        >
          25%
        </div>
      </figure>
    </Link>
  );

  const Title = ({ title }: { title: string }) => (
    <Link
      href={`books/${book.slug}`}
      target="_blank"
      className="hover:underline"
    >
      <h2 className="card-title text-base leading-normal line-clamp-1">
        {title}
      </h2>
    </Link>
  );

  const Author = () => (
    <Link
      href={`authors/${book.authors[0].slug}`}
      target="_blank"
      className="hover:underline flex-1 mb-2"
    >
      <p className="truncate text-sm leading-tight text-secondary-content">
        {book.authors[0].name}
      </p>
    </Link>
  );

  const Price = () => (
    <div className="flex items-baseline">
      <span className="text-primary font-bold text-base">{`${book.sell_price} ৳`}</span>
      <span className="ml-2 line-through text-sm text-secondary-content">{`${book.regular_price} ৳`}</span>
    </div>
  );

  const ActionButtons = () => (
    <div className="card-actions justify-between mt-2">
      <button className="btn btn-primary btn-sm flex-1">Add to Cart</button>
      <Heart />
    </div>
  );

  return (
    <div className="card w-full bg-base-200 shadow-sm rounded-md">
      <Frame />

      <div className="card-body p-3 gap-0.5 justify-between">
        <Title title={book.name} />
        <Author />
        <Price />
        <ConditionBadge condition={book.condition} />
        <ActionButtons />
      </div>
    </div>
  );
};

export default BookCard;
