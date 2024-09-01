"use client";
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

import { BookCard, Carousel } from '@/components';
import { Book } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import Timer from './Timer';

const BigSale = () => {
  const { data, isLoading } = useSWR(
    "book/all?is_featured=true&in_stock=true",
    fetcher
  );

  return (
    <div
      className={`layout-container layout-mt layout-p lg:pt-[1.625rem] lg:pb-6 bg-[#32012F] border-none`}
    >
      <div className="flex flex-col lg:flex-row items-center">
        {/* Big Sale */}
        <Link
          href="/books?is_big_sale=true"
          className="max-w-[512px] pr-0 lg:pr-10 mb-10 lg:mb-0 flex flex-col items-center justify-center "
        >
          <Image
            src="/default/discount-75.png"
            alt="Big Sale"
            className="text-5xl text-center font-bold"
            width="424"
            height="288"
          />
          <Timer />
        </Link>

        <Carousel isLoading={isLoading}>
          {data &&
            data.map((book: Book) => (
              <div key={book.id} className="carousel-item">
                <BookCard book={book} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BigSale;
