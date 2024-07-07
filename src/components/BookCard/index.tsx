import Image from "next/image";
import { ConditionBadge, WishlistButton } from "@/micro-components";
import Link from "next/link";
import { Book } from "@/interface";
import { isEnglish } from "@/utils";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex flex-grow">
      <div className="card relative w-full min-w-[163px] md:min-w-[236px] bg-base-200 border border-black06 hover:shadow-lg hover:cursor-pointer">
        <Frame book={book} />
        <Discount
          regular_price={book.regular_price}
          sale_price={book.sale_price}
        />

        <div className="card-body px-3 pb-3 md:px-5 pt-3 gap-1 justify-between bg-white">
          <Title name={book.name} slug={book.slug} />
          <Author name={book.authors[0].name} slug={book.authors[0].slug} />
          <ConditionBadge condition={book.condition} />
          <Price
            regular_price={book.regular_price}
            sale_price={book.sale_price}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default BookCard;

const Frame = ({ book }: { book: Book }) => (
  <Link href={`/books/${book.slug}`} target="_blank">
    <figure className="relative h-[130px] md:h-[188px] w-full rounded-t bg-[#F1F2F4]">
      <Image
        src={book.images[0].src}
        alt="Book"
        fill
        className="object-contain object-top"
        sizes="50vw"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/default/book.png"
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

const Title = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <Link href={`/books/${slug}`} target="_blank" className="hover:underline">
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
        className={`truncate text-xs leading-tight text-secondary-content hover:underline mb-1 ${
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

const ActionButtons = () => (
  <div className="card-actions justify-between mt-1">
    <button className="btn btn-primary btn-sm flex-1 text-xs md:text-sm lg:text-base font-bold h-8 md:h-9">
      Add to cart
    </button>
    <div className="hidden sm:block h-9 w-10">
      <WishlistButton />
    </div>
  </div>
);
