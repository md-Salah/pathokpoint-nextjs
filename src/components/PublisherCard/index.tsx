import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Publisher } from '@/interface';
import { isEnglish } from '@/utils';

interface Props {
  publisher: Publisher;
  fixW?: boolean;
}

const PublisherCard = ({ publisher, fixW = true }: Props) => {
  return (
    <Link
      href={`publishers/${publisher.slug}`}
      className={`card h-[146px] sm:h-[247px] bg-white text-black02 border border-black06 hover:shadow-lg group
        ${fixW ? "w-[140px] sm:w-[236px]" : "w-full"}
        `}
    >
      <Frame name={publisher.name} src={publisher.image?.src || null} />

      <div className="card-body p-3 items-center justify-center">
        <Title title={publisher.name} />
      </div>
    </Link>
  );
};

export default PublisherCard;

const Frame = ({ name, src }: { name: string; src: string | null }) => {
  return (
    <div className="w-full h-[181px] rounded-t bg-[#F1F2F4] text-center p-6">
      <figure className="relative w-full h-full">
        <Image
          src={src || defaultSrc.publisher}
          alt=""
          fill
          className="object-contain object-center"
          loading="lazy"
          sizes="50vw"
        />
      </figure>
    </div>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <div
      className={`card-title text-xs sm:text-base font-normal group-hover:underline truncate w-full ${
        isEnglish(title) ? "" : "font-bn"
      }`}
    >
      <h1 className="text-center w-full">{title}</h1>
    </div>
  );
};
