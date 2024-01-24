"use client";
import Image from "next/image";
import { IoMdShareAlt } from "react-icons/io";
import Heart from "./Heart";

const BookCard = ({ book }: { book: any }) => {
  const handleShare = async () => {};

  return (
    <div className="card card-compact w-64 bg-base-100 shadow-sm rounded-md">
      <figure className="relative h-52 w-full">
        <Image
          src={book.images[0]}
          alt="Book"
          fill
          className="object-cover object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.name}</h2>
        <p>{book.authors[0]}</p>
        {/* Price */}
        <p>
          <span className="line-through">{`${book.regular_price} ৳`}</span>
          <span className="ml-2 text-primary font-bold text-lg">{`${book.sell_price} ৳`}</span>
          <div className="badge badge-warning ml-3">{book.condition}</div>
        </p>

        {/* Buttons */}
        <div className="card-actions justify-between mt-2">
          <button className="btn btn-primary btn-sm flex-1">Add to Cart</button>
          <Heart />
          <button className="btn btn-sm" onClick={handleShare}>
            <IoMdShareAlt className="inline-block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
