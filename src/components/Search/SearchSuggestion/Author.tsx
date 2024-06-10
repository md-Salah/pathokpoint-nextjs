import Image from "next/image";
import Link from "next/link";

import { AvatarPlaceholder } from "@/micro-components";
import { Author as AuthorInterface } from "@/interface";

const Author = ({ author }: { author: AuthorInterface }) => {
  return (
    <div>
      <Link href={`/author/${author.slug}`}>
        <div className="flex items-center gap-3 mt-0 border-b border-base-300 group bg-base-200 p-1 pl-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 text-2xl text-center group-hover:opacity-80">
              {author.image?.src ? (
                <Image
                  src={author.image.src}
                  alt={author.name[0]}
                  width={48}
                  height={48}
                />
              ) : (
                <AvatarPlaceholder letter={author.name[0]} />
              )}
            </div>
          </div>
          <div>
            <div className="tracking-wide group-hover:underline">
              {author.name}
            </div>
            <div className="text-sm opacity-50 mt-1">
              {Math.round(Math.random() * 100) + " টি বই আছে"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Author;
