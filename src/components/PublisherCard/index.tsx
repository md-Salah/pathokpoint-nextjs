import Image from "next/image";
import Link from "next/link";
import { Publisher } from "@/interface";

const PublisherCard = ({ publisher }: { publisher: Publisher }) => {
  return (
    <Link
      href={`publishers/${publisher.slug}`}
      className="card w-[140px] sm:w-[236px] h-[146px] sm:h-[247px] bg-white text-black02 border border-black06 hover:shadow-lg group"
    >
      <Frame name={publisher.name} src={publisher.image?.src || null} />

      <div className="card-body p-3 items-center justify-center border-t border-[#F1F2F4]">
        <Title title={publisher.name} />
      </div>
    </Link>
  );
};

export default PublisherCard;

const Frame = ({ name, src }: { name: string; src: string | null }) => {
  const defaultSrc = "/default/publisher.png";
  return (
    <figure className="relative w-full h-[181px] rounded-t bg-[#F1F2F4] text-center">
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
  );
};

const Title = ({ title }: { title: string }) => {
  const isEnglish = /^[A-Za-z0-9 ]*$/.test(title);

  return (
    <h1
      className={`card-title text-xs sm:text-base font-normal group-hover:underline truncate ${
        isEnglish ? "" : "font-bn"
      }`}
    >
      {title}
    </h1>
  );
};
