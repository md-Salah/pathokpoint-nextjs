import Image from "next/image";

import { Book } from "@/interface";
import { ConditionBadge } from "@/micro-components";
import { isEnglish } from "@/utils";

const TableRow = ({ book }: { book: Book }) => {
  const defaultSrc = "/default/book.png";

  return (
    <tr>
      <td>
        <div className="flex gap-4">
          <figure className="w-24 h-24 relative rounded border">
            <Image
              src={book.images[0].src || defaultSrc}
              alt={book.name}
              fill
              className="object-contain rounded"
              placeholder="blur"
              blurDataURL={defaultSrc}
            />
          </figure>

          <div className="flex flex-col gap-2">
            <span
              className={`text-sm md:text-base font-semibold text-black02 ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
            </span>
            <span
              className={`text-xxs md:text-xs text-black04 truncate ${
                !isEnglish(book.authors[0].name) && "font-bn"
              }`}
            >
              {"by " + book.authors[0].name}
            </span>
            <ConditionBadge condition="Old-like-New" />
          </div>
        </div>
      </td>
      <td className="text-sm">$250</td>
      <td className="text-sm">$250</td>
      <td className="text-sm">1x</td>
      <td className="text-sm">$250</td>
    </tr>
  );
};

export default TableRow;
