import Image from "next/image";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";

import { CartItem as CartItemType } from "@/interface";
import { ConditionBadge, NumberInput } from "@/micro-components";
import { isEnglish } from "@/utils";

const CartItem = ({
  book,
  handleCountChange,
  removeItem,
}: {
  book: CartItemType;
  handleCountChange: (id: string, count: number) => void;
  removeItem: (id: string) => void;
}) => {
  const setValue = (value: number) => {
    handleCountChange(book.id, value);
  };

  return (
    <tr>
      <td>
        <ProductDetails book={book} />
      </td>
      <td>
        <div className="flex flex-col lg:flex-row md:justify-between gap-4">
          <div className="flex lg:flex-col items-baseline justify-end lg:justify-center gap-1">
            <span className="block text-sm">৳{book.sale_price}</span>
            <span className="line-through text-xs text-black04">
              ৳{book.regular_price}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <NumberInput
              min={1}
              max={book.quantity}
              size="xxs"
              value={book.count}
              setValue={setValue}
            />
            <div className="flex items-center justify-end gap-5 lg:gap-7">
              <div className="font-semibold text-primary">
                ৳{book.sale_price * book.count}
              </div>
              <FaRegTrashCan
                className="w-4 h-4 cursor-pointer"
                onClick={() => removeItem(book.id)}
              />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;

const ProductDetails = ({ book }: { book: CartItemType }) => {
  const defaultSrc = "/default/book.png";

  return (
    <div className="w-full group">
      <Link href={`/books/${book.slug}`} className="w-full">
        <div className="flex w-full overflow-hidden">
          <figure className="w-16 sm:min-w-24 sm:w-24 relative group-hover:opacity-80 sm:border rounded">
            <Image
              src={book.images[0].src || defaultSrc}
              alt={book.name}
              fill
              className="object-contain rounded"
              placeholder="blur"
              blurDataURL={defaultSrc}
            />
          </figure>

          {/* Name, Publisher & Price */}
          <div className="flex flex-col ml-3">
            <h1
              className={`font-semibold group-hover:underline ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
              {book.cover && (
                <span className="ml-1 text-xs text-black02 font-normal">
                  ({book.cover})
                </span>
              )}
            </h1>
            <h3
              className={`mt-1.5 text-xs text-black04 ${
                !isEnglish(book.authors[0].name) && "font-bn"
              }`}
            >
              {"by " + book.authors[0].name}
            </h3>

            <div className="mt-2">
              <ConditionBadge condition={book.condition} />
            </div>

            <h3 className="mt-1.5 text-highlight text-xs">
              {book.quantity > 0
                ? book.quantity + " Items in stock"
                : "Out of stock"}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
