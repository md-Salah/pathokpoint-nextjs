import Image from "next/image";

import { ConditionBadge } from "@/micro-components";
import { BsTrash } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { Book } from "@/interface";
import { isEnglish } from "@/utils";

const BookItem = ({ book }: { book: Book }) => {
  const defaultSrc = "/default/book.png";

  return (
    <div className="flex justify-between pb-4 border-b border-b-black06">
      <div className="flex items-start space-x-3">
        <figure className="h-full w-16 sm:min-w-20 sm:w-20 relative group-hover:opacity-80">
          <Image
            src={book.images[0].src || defaultSrc}
            alt={book.name}
            fill
            className="object-contain object-left"
            placeholder="blur"
            blurDataURL={defaultSrc}
          />
        </figure>
        <div className="flex flex-col space-y-1 h-full justify-between">
          <span
            className={`text-sm md:text-base font-semibold text-black02 ${
              !isEnglish(book.name) && "font-bn"
            }`}
          >
            {book.name}
          </span>
          <span
            className={`text-xxs md:text-xs text-black04 max-w-28 lg:max-w-40 truncate ${
              !isEnglish(book.name) && "font-bn"
            }`}
          >
            by {book.authors[0].name}
          </span>
          <ConditionBadge condition="Old-like-New" />
          <span className="text-error text-xs">
            {book.quantity === 0 && "Out of stock"}
            {book.quantity === 1 && "Only 1 item left"}
            {book.quantity > 1 && book.quantity + " items in stock"}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-end lg:items-center justify-between">
        <div className="flex space-x-2 justify-end items-baseline">
          <span className="text-black04 text-xs lg:text-sm font-medium line-through">
            $550
          </span>
          <span className="text-black02 font-semibold lg:font-bold ">$550</span>
        </div>
        <div className="flex justify-end">
          <BsTrash size={20} className="cursor-pointer text-black04" />
        </div>
        <button className="btn btn-primary btn-sm px-5 lg:px-7 w-fit">
          <MdOutlineAddShoppingCart size={20} />
          <span className="hidden lg:block">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
