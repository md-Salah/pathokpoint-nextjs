"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { PiSealPercentFill } from 'react-icons/pi';
import { useDispatch } from 'react-redux';

import { defaultSrc } from '@/constants';
import { Book } from '@/interface';
import {
    ConditionBadge, ConditionExplain, NumberInput, Share, WishlistButton
} from '@/micro-components';
import { addItemToCart } from '@/redux/features/cart-slice';
import { AppDispatch } from '@/redux/store';
import { isEnglish } from '@/utils';

interface Props {
  book: Book;
}

const BookDetails = ({ book }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [qty, setQty] = useState<number>(Math.min(1, book.quantity));
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const copyText = `${book.name} (${book.condition}) by ${book.authors[0]?.name}, ${book.sale_price} Tk`;

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...book,
        selectedQuantity: qty,
      })
    );
    setIsAdded(true);
  };

  return (
    <div className="card sm:card-side rounded-none layout-mt pb-6 sm:px-7 sm:py-7 lg:py-12 bg-white">
      {/* Image */}
      <figure className="w-full sm:w-[453px] h-64 sm:h-[568px] relative bg-black07 sm:bg-white">
        <Image
          src={book.images[0]?.src || defaultSrc.book}
          alt="Book Image"
          fill
          className="w-full h-full object-contain object-top"
        />
      </figure>

      <div className="card-body layout-px mt-4 sm:mt-0 py-0 sm:ml-8 justify-between">
        {/* Title, Author, Category, Condition */}
        <div className="flex flex-col gap-2">
          <h1
            className={`card-title text-xl sm:text-3xl ${
              isEnglish(book.name) ? "" : "font-bn"
            }`}
          >
            {book.name}
          </h1>
          {book.short_description && (
            <p
              className={`text-black04 text-sm ${
                isEnglish(book.short_description) ? "" : "font-bn"
              }`}
            >
              {book.short_description}
            </p>
          )}

          {book.authors.length > 0 && (
            <div>
              by
              {book.authors.map((author, index) => (
                <LinkButton
                  key={author.id}
                  name={author.name}
                  href={"/authors/" + author.slug}
                  comma={index !== book.authors.length - 1}
                />
              ))}
            </div>
          )}

          {book.categories.length > 0 && (
            <div>
              <span className="font-bn">বিষয়:</span>
              {book.categories.map((cat, index) => (
                <LinkButton
                  key={cat.id}
                  name={cat.name}
                  href={"/categories/" + cat.slug}
                  comma={index !== book.categories.length - 1}
                />
              ))}
            </div>
          )}

          {book.condition && (
            <div className="flex items-center dropdown">
              <span className="mr-2 font-bn">কন্ডিশন:</span>
              <ConditionBadge condition={book.condition} />
              <ConditionExplain />
            </div>
          )}
        </div>

        {/* Price, Quantity, Stock */}
        <div className="mt-8 flex flex-col gap-2">
          <div>
            <span className="text-xl sm:text-2xl font-bold">
              {book.sale_price}৳
            </span>
            {book.regular_price > book.sale_price && (
              <span className="text-sm sm:text-base text-secondary-content line-through ml-2 font-normal sm:font-medium">
                {book.regular_price}৳
              </span>
            )}
          </div>

          <div className="flex items-center">
            <span className="mr-4">Quantity:</span>
            <NumberInput
              min={1}
              max={book.quantity}
              value={qty}
              setValue={setQty}
            />
          </div>

          <div>
            {book.quantity > 0 ? (
              <div>
                <IoIosCheckmarkCircle className="inline-block text-success w-[14px] h-[14px]" />
                <span className="text-success text-sm font-medium inline-block ml-[6px]">{`${book.quantity} Items in stock`}</span>
              </div>
            ) : (
              <div>
                <AiFillMinusCircle className="inline-block text-error w-[14px] h-[14px]" />
                <span className="text-error text-sm font-medium inline-block ml-[6px]">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Coupon & Buttons */}
        <div className="mt-8">
          <div className="flex items-start gap-[6px] text-sm font-medium">
            <div className="flex items-center gap-[6px] min-w-20">
              <PiSealPercentFill className="text-primary w-[14px] h-[14px]" />
              <span className="text-primary capitalize font-medium">
                FD-OLD:
              </span>
            </div>
            <span className="text-black04 font-bn">
              ৫৯৯ টাকার পুরাতন বই কিনলে ২৬ টাকায় ডেলিভারি
            </span>
          </div>

          {book.is_used && (
            <div className="mt-4 sm:mt-6 font-bn text-black04 text-sm">
              N.B: পুরাতন বই অর্ডার করে কন্ডিশন দেখতে Messenger/WhatsApp এ
              অর্ডার আইডি ইনবক্স করুন।
            </div>
          )}

          <div className="card-actions mt-7 h-[47px] sm:h-[52px]">
            {isAdded ? (
              <Link
                href="/cart"
                className="btn btn-error max-w-60 flex-1 h-full"
              >
                View Cart
              </Link>
            ) : (
              <button
                className={`btn btn-primary max-w-60 flex-1 h-full ${
                  book.quantity === 0 && "btn-disabled"
                }`}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
            <div className="w-[3.75rem] h-full">
              <WishlistButton />
            </div>
            <div className="w-[3.75rem] h-full">
              <Share text={copyText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

const LinkButton = ({
  name,
  href,
  comma,
}: {
  name: string;
  href: string;
  comma?: boolean;
}) => (
  <Link
    href={href}
    className={`btn btn-link btn-xs font-normal text-sm ml-1 text-black02 hover:text-primary ${
      isEnglish(name) ? "" : "font-bn"
    }`}
  >
    {name}
    {comma && ","}
  </Link>
);
