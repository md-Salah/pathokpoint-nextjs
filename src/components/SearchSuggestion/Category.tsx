import { books } from "@/constants";
import { AvatarPlaceholder } from "@/micro-components";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: (typeof books)[0]["categories"][0];
}

const Category = ({ category }: Props) => {
  return (
    <div>
      <Link href={`/categories/${category.slug}`}>
        <div className="flex items-center gap-3 mt-0 border-b border-base-300 bg-base-200 group p-1 pl-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 text-2xl text-center group-hover:opacity-80">
              {category.src ? (
                <Image
                  src={category.src}
                  alt={category.name[0]}
                  width={48}
                  height={48}
                />
              ) : (
                <AvatarPlaceholder letter={category.name[0]} />
              )}
            </div>
          </div>
          <div>
            <div className="tracking-wide group-hover:underline">
              {category.name}
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

export default Category;
