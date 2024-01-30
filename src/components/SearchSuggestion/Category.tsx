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
        <div className="flex items-center gap-3 mt-2 shadow-md rounded-md group bg-white hover:bg-gray-50 p-1">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 bg-primary text-2xl text-center">
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
            <div className="font-bold group-hover:underline">
              {category.name}
            </div>
            <div className="text-sm opacity-50">{category.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
