import Image from 'next/image';

import { Review } from '@/interface';
import { Description } from '@/micro-components';
import { isEnglish } from '@/utils';

import Rating from './Rating';

const ReviewCard = ({ review }: { review: Review }) => {
  const customer_name = review.user.first_name + " " + review.user.last_name;

  return (
    <div className="card w-80 sm:w-[300px] h-[300px] sm:h-[397px] overflow-y-scroll bg-white border border-black06 text-black02">
      <div className="card-body p-[18px] sm:p-7 pt-[22px] sm:pt-8">
        <div className="card-title mb-4 gap-0">
          <Avatar name={customer_name} src={review.images[0]?.src || null} />
          <div className="text-left ml-3 flex flex-col flex-1">
            <Rating rating={review.average_rating} />
            <h3 className={`text-sm sm:text-base text-black02 line-clamp-1 font-semibold mt-1 ${isEnglish(customer_name)? "": "font-bn"}`}>
              {customer_name}
            </h3>
            <h4 className="text-xxs sm:text-xs text-black04 font-normal leading-3 mt-1">
              {review.created_at}
            </h4>
          </div>
        </div>

        <Description
          text={review.comment}
          fullView={review.images.length === 0}
        />
      </div>

      <ReviewImages images={review.images} />
    </div>
  );
};

export default ReviewCard;

const Avatar = ({ name, src }: { name: string; src: string | null }) => {
  const defaultSrc = "/default/avatar.png";
  return (
    <div className="avatar">
      <div className="w-11 sm:w-16 h-11 sm:h-16 rounded-full relative text-3xl bg-black06">
        {src ? (
          <Image
            alt=""
            fill
            sizes="10vw"
            src={src || defaultSrc}
            className="rounded-full object-cover object-center text-center"
            placeholder="blur"
            blurDataURL={defaultSrc}
          />
        ) : (
          <div className="avatar placeholder w-full h-full">
            <div className="bg-black06 rounded-full w-24">
              <span className="text-3xl">{name[0]}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReviewImages = ({ images }: { images: { src: string }[] }) => {
  const defaultSrc = "/default/review.png";
  return (
    <figure className="h-64 relative overflow-clip">
      <Image
        src={images[0]?.src || defaultSrc}
        alt=" "
        sizes="(max-width: 640px) 100vw, 33vw"
        fill
        className="w-full object-cover object-bottom"
        placeholder="blur"
        blurDataURL={defaultSrc}
      />
    </figure>
  );
};
