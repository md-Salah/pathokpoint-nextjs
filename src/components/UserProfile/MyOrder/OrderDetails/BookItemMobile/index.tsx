import Image from "next/image";

import { Book } from "@/interface";
import { isEnglish } from "@/utils";

const BookItemMobile = ({ book }: { book: Book }) => {
  const defaultSrc = "/default/book.png";

  return (
    <div className="flex items-center justify-between w-full py-3 border-b border-b-black06">
      <div className="flex items-start h-fit gap-3">
        {/* Image */}
        <div className="relative">
          <figure className="w-16 h-20 relative rounded">
            <Image
              src={book.images[0].src || defaultSrc}
              alt={book.name}
              fill
              className="object-cover rounded"
              placeholder="blur"
              blurDataURL={defaultSrc}
            />
          </figure>
          <div className="absolute -bottom-1 -right-2 bg-white py-[3px] px-[5px] rounded-full border border-black06 text-xxs text-[#2B2B2B] text-center font-bold">
            <span>x2</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className={`text-sm md:text-base font-semibold text-black02 ${!isEnglish(book.name) && "font-bn"}`}>
            {book.name}
          </span>
          <span className="text-xxs md:text-xs text-black04 font-normal max-w-32 truncate">
            by Bibhutibushan Bandapaddhay
          </span>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-base text-[#2B2B2B]">৳500</span>
            <span className="font-medium text-xs text-secondary-content line-through">
              ৳600
            </span>
          </div>
        </div>
      </div>


      <div className="space-y-2">
        <div className="flex items-center space-x-1">
          <span className="text-xs text-secondary-content">Total:</span>
          <span className="font-semibold text-base text-[#2B2B2B]">৳500</span>
        </div>
        <div className="p-[3px] bg-[#EDAB1526] text-[#EDAB15] text-xs rounded-full font-semibold">
          <span>Old-Readable</span>
        </div>
      </div>
    </div>
  );
};

export default BookItemMobile;
