import Image from "next/image";
import { IoMdShareAlt } from "react-icons/io";
import Heart from "./Heart";
import Link from "next/link";

const BookCard = ({ book }: { book: any }) => {
  return (
    <div className="card card-compact w-64 bg-white shadow-sm">
      {/* Image */}
      <Link href={`books/${book.slug}`}>
        <figure className="relative h-60 w-full rounded-t-md">
          <Image
            src={book.images[0]}
            alt="Book"
            fill
            className="object-cover object-top"
            sizes="100%"
            loading="lazy"
          />
          <div
            className={`absolute top-0 left-0 rounded-md p-3.5 badge badge-primary font-bold`}
          >
            25%
          </div>
        </figure>
      </Link>

      {/* Content */}
      <div className="card-body">
        {/* Title */}
        <Link href={`books/${book.slug}`} className="hover:underline">
          <h2 className="card-title">{book.name}</h2>
        </Link>

        {/* Author */}
        <Link
          href={`authors/${book.authors[0].slug}`}
          className="hover:underline"
        >
          <p>{book.authors[0].name}</p>
        </Link>

        {/* Condition */}
        <div
          className={`badge badge-outline ${
            book.condition.toLowerCase() == "new"
              ? "badge-secondary"
              : "badge-accent"
          }`}
        >
          {book.condition}
        </div>

        {/* Price */}
        <div className="">
          <span className="line-through">{`${book.regular_price} ৳`}</span>
          <span className="ml-2 text-primary font-bold text-lg">{`${book.sell_price} ৳`}</span>
        </div>

        {/* Buttons */}
        <div className="card-actions justify-between mt-2">
          <button className="btn btn-primary btn-sm flex-1">Add to Cart</button>
          <Heart />
          <button className="btn btn-sm bg-gray-200">
            <IoMdShareAlt className="inline-block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
