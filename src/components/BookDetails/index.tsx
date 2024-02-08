import { Book } from "@/interface";
import { books } from "@/constants";
import { AddToBooklist, ShareThisBook } from "@/micro-components";
import Link from "next/link";
import Frame from "./Frame";
import Condition from "./Condition";
import { VariationSlider } from "@/components";

interface Props {
  book: (typeof books)[0];
}

const BookDetails = ({ book }: Props) => {
  const copyText = `${book.name} (${book.condition}) by ${book.authors[0].name}, ${book.sell_price} Tk`;

  const InfoCard = () => {
    return (
      <div className="card-body w-full overflow-hidden">
        <div>
          {/* Title */}
          <h2 className="card-title">{book.name}</h2>
          {/* Short Description */}
          {book.short_description && (
            <div>
              <p className="text-secondary-content">{book.short_description}</p>
            </div>
          )}

          {/* Author */}
          {book.authors.length > 0 && (
            <div>
              by
              <Link href={"#"} className="hover:underline ml-1 text-info">
                {book.authors[0].name}
              </Link>
            </div>
          )}
        </div>

        {/* Subject, Publisher & Conditon */}
        <div className="mt-4">
          {book.publisher && (
            <div>
              <p className="w-20 inline-block">প্রকাশনী:</p>
              <Link href={"#"} className="hover:underline">
                {book.publisher.name}
              </Link>
            </div>
          )}
          {book.categories.length > 0 && (
            <div>
              <p className="w-20 inline-block">বিষয়:</p>
              <Link href={"#"} className="hover:underline">
                {book.categories[0].name}
              </Link>
            </div>
          )}
          {book.condition && <Condition condition={book.condition} />}
        </div>

        {/* Price & Discount */}
        <div className="mt-4">
          {book.sell_price > 0 && book.regular_price > book.sell_price ? (
            <div>
              <div className="flex gap-4 items-baseline">
                <span className="text-3xl text-primary font-bold">
                  {book.sell_price} ৳
                </span>
                <span className="text-secondary-content line-through">
                  {book.regular_price} ৳
                </span>
              </div>
              <div className="">
                <span className="font-semibold">{`${
                  book.regular_price - book.sell_price
                } `}</span>
                <span className="mr-2">টাকা সাশ্রয় হচ্ছে</span>
                <span className="badge badge-accent badge-outline">{`${
                  100 - Math.round((book.sell_price / book.regular_price) * 100)
                }% ছাড়`}</span>
              </div>
            </div>
          ) : (
            <span className="text-3xl text-primary font-bold">
              {book.regular_price} ৳
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="mt-4">
          {book.quantity > 0 ? (
            <span className="text-success">{`${book.quantity} in stock`}</span>
          ) : (
            <span className="text-error">Out of Stock</span>
          )}
        </div>

        {/*  Buttons */}
        <div className="card-actions">
          <div className="w-full">
            {book.quantity > 0 ? (
              <button className="btn btn-primary w-48">Add to Cart</button>
            ) : (
              <button className="btn btn-accent w-48">
                Get email when available
              </button>
            )}
          </div>
          <div className="mt-2 flex gap-x-5 text-secondary-content flex-wrap">
            <AddToBooklist />
            <ShareThisBook text={copyText} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="card-mt w-full">
      <div className="card lg:flex-row">
        <div className="flex flex-col flex-1 bg-base-200 rounded-md lg:rounded-r-none shadow-sm sm:flex-row">
          <div className="mx-auto w-11/12 sm:w-72">
            <Frame images={book.images} />
          </div>
          <div className="min-w-96 flex-1">
            <InfoCard />
          </div>
        </div>
        <div className="w-full bg-base-200 lg:bg-gray-50 rounded-md mt-2 lg:mt-0 lg:rounded-l-none lg:max-w-96 shadow-sm">
          <VariationSlider />
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
