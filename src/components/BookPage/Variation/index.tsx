"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { defaultSrc } from '@/constants';
import { Book as BookInterface } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

interface Props {
  book: BookInterface;
}

const Variation = ({ book }: Props) => {
  const [books, setBooks] = useState<BookInterface[]>([]);

  const authorIds = book.authors.map((athr) => athr.id).join(",");
  const { data, isLoading } = useSWR(
    `/book/all?name=${book.name}&author__id__in=${authorIds}`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      setBooks(data.filter((b: BookInterface) => b.id !== book.id));
    }
  }, [data]);

  if (isLoading) return <div className="skeleton h-full sm:ml-3"></div>;

  return (
    <div className="sm:ml-3 h-full">
      <div className="bg-white h-full">
        <h1 className="p-4 font-semibold border-b">Variation</h1>
        {books.length > 0 ? (
          <div className="carousel carousel-vertical">
            {books.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center text-sm my-10 text-black04">
            No other condition available
          </div>
        )}
      </div>
    </div>
  );
};

export default Variation;

const Book = ({ book }: { book: BookInterface }) => {
  return (
    <div className="w-full group carousel-item px-4 py-2 border-b">
      <Link href={`/books/${book.public_id}/${book.slug}`} className="w-full">
        <div className="flex w-full overflow-hidden">
          <figure className="min-w-16 w-16 h-[74px] sm:h-24 relative group-hover:opacity-80 rounded">
            <Image
              src={book.images[0]?.src || defaultSrc.book}
              alt={book.name}
              fill
              sizes="10vw"
              className="object-cover object-top rounded"
            />
          </figure>

          {/* Name, Publisher & Price */}
          <div className="flex flex-1 flex-col ml-2">
            <h1
              className={`text-base font-medium truncate group-hover:underline ${
                !isEnglish(book.name) && "font-bn"
              }`}
            >
              {book.name}
            </h1>
            {book.publisher && (
              <div className="flex items-center justify-between">
                <h3
                  className={`text-xs text-black04 whitespace-nowrap ${
                    !isEnglish(book.publisher.name) && "font-bn"
                  }`}
                >
                  {book.publisher.name}
                </h3>
                <div className="sm:hidden">
                  <ConditionBadge condition={book.condition} />
                </div>
              </div>
            )}
            <div className="mt-1 hidden sm:block">
              <ConditionBadge condition={book.condition} />
            </div>
            <div className="mt-0.5 sm:mt-1">
              <span className="text-base text-[#2B2B2B] font-medium">
                ৳{book.sale_price}
              </span>
              {book.regular_price > book.sale_price && (
                <span className="text-xs line-through text-black04 ml-1">
                  ৳{book.regular_price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
