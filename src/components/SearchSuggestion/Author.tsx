import Image from "next/image";
import { books } from "@/constants";
import { AvatarPlaceholder } from "@/micro-components";
import Link from "next/link";

interface Props {
  author: (typeof books)[0]["authors"][0];
}

const Author = ({ author }: Props) => {
  return (
    <div>
      <Link href={`/author/${author.slug}`}>
        <div className="flex items-center gap-3 mt-0 border-b-2 border-base-300 group bg-white hover:bg-gray-50 p-1 pl-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 bg-primary text-2xl text-center group-hover:opacity-80">
              {author.src ? (
                <Image
                  src={author.src}
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
            <div className="font-bold group-hover:underline">{author.name}</div>
            <div className="text-sm opacity-50">
              {Math.round(Math.random() * 100) + " টি বই আছে"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Author;
