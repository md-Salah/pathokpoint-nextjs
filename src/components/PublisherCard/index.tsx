import Image from "next/image";
import Link from "next/link";
import { Publisher } from "@/interface";
import { isEnglish } from "@/utils";

const PublisherCard = ({ publisher }: { publisher: Publisher }) => {
  return (
    <Link
      href={`publishers/${publisher.slug}`}
      className="card w-[140px] sm:w-[237px] h-[146px] sm:h-[247px] bg-white text-black02 border border-black06 hover:shadow-lg group"
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
  const defaultSrc = "/default/publisher.png";
  return (
    <div className="w-full h-[181px] rounded-t bg-[#F1F2F4] text-center p-6">
      <figure className="relative w-full h-full">
        <Image
          src={src || defaultSrc}
          alt={name}
          fill
          className="object-contain object-center"
          loading="lazy"
          placeholder="blur"
          blurDataURL={defaultSrc}
          sizes="50vw"
        />
      </figure>
    </div>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <h1
      className={`card-title text-xs sm:text-base font-normal group-hover:underline truncate ${
        isEnglish(title) ? "" : "font-bn"
      }`}
    >
      {title}
    </h1>
  );
};
