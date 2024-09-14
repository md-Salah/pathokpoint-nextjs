import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Category } from '@/interface';
import { isEnglish } from '@/utils';

interface Props {
  category: Category;
  fixW?: boolean;
}

const CategoryCard = ({ category, fixW = true }: Props) => {
  return (
    <Link
      href={`categories/${category.slug}`}
      className={`card h-[146px] sm:h-[247px] bg-secondary text-white shadow-sm hover:shadow-lg group 
        ${fixW ? "w-[140px] sm:w-[236px]" : "w-full"}
        `}
    >
      <Frame name={category.name} src={category.image?.src || null} />

      <div className="card-body p-3 items-center justify-center">
        <Title title={category.name} />
      </div>
    </Link>
  );
};

export default CategoryCard;

const Frame = ({ name, src }: { name: string; src: string | null }) => {
  return (
    <figure className="relative w-full h-[181px] rounded-t text-center">
      <Image
        src={src || defaultSrc.category}
        alt={name[0]}
        fill
        className="object-cover object-center"
        loading="lazy"
        sizes="50vw"
      />
    </figure>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <div
      className={`card-title text-xs sm:text-base font-bold group-hover:underline truncate w-full ${
        isEnglish(title) ? "" : "font-bn"
      }`}
    >
      <h1 className="text-center w-full">{title}</h1>
    </div>
  );
};
