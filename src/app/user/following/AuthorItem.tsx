import { Author } from "@/interface";
import { isEnglish } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const AuthorItem = ({ author }: { author: Author }) => {
  const defaultSrc = "/default/avatar.png";

  return (
    <div className="flex py-2 justify-between items-center border-t border-black06">
      <div className="flex items-center gap-4">
        <div className="bg-black05 mask mask-squircle p-0.5 block w-14 h-14">
          <figure className="relative mask mask-squircle w-full h-full text-center">
            <Image
              src={author.image?.src || defaultSrc}
              alt={author.name}
              fill
              className="object-cover object-center"
              loading="lazy"
              placeholder="blur"
              blurDataURL={defaultSrc}
              sizes="(max-width: 768px) 33vw, 10vw"
            />
          </figure>
        </div>

        <div className="text-sm space-y-1">
          <Link
            href={`authors/${author.slug}`}
            className={`${
              !isEnglish(author.name) && "font-bn"
            } block hover:underline`}
          >
            {author.name}
          </Link>
          <p>125k followers</p>
        </div>
      </div>

      <button className="btn btn-outline btn-primary btn-sm bg-[#FF820014]">
        Unfollow
      </button>
    </div>
  );
};

export default AuthorItem;
