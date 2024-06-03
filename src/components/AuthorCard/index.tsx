import Image from "next/image";
import Link from "next/link";

import { Author } from "@/interface";
import { isEnglish } from "@/utils";

const AuthorCard = ({ author }: { author: Author }) => {
  return (
    <Link
      href={`authors/${author.slug}`}
      className="card w-[140px] sm:w-[194px] h-[176px] sm:h-[247px] bg-white shadow-sm group border border-black06 hover:shadow-lg"
    >
      <Frame name={author.name} src={author.image?.src || null} />
      <div className="card-body p-0 w-4/5 mx-auto items-center justify-center">
        <Title title={author.name} />
      </div>
    </Link>
  );
};

export default AuthorCard;

const Frame = ({ name, src }: { name: string; src: string | null }) => {
  const defaultSrc = "/default/author.png";

  return (
    <div className="bg-black05 mask mask-squircle p-[4px] w-24 sm:w-32 h-24 sm:h-32 block mt-[30px] sm:mt-[42px] mx-auto">
      <figure className="relative mask mask-squircle w-full h-full text-center">
        <Image
          src={src || defaultSrc}
          alt={name[0]}
          fill
          className="object-cover object-center"
          loading="lazy"
          placeholder="blur"
          blurDataURL={defaultSrc}
          sizes="(max-width: 768px) 33vw, 10vw"
        />
      </figure>
    </div>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <h1
      className={`card-title text-xs sm:text-base text-black02 text-center line-clamp-2 group-hover:underline ${
        isEnglish(title) ? "" : "font-bn"
      }`}
    >
      {title}
    </h1>
  );
};
