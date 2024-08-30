import Image from 'next/image';
import Link from 'next/link';

import { Category } from '@/interface';
import { isEnglish } from '@/utils';

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link
      href={`categories/${category.slug}`}
      className="card w-[140px] sm:w-[236px] h-[146px] sm:h-[247px] bg-secondary text-white shadow-sm hover:shadow-lg group"
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
  const defaultSrc = "/default/category.png";
  return (
    <figure className="relative w-full h-[181px] rounded-t text-center">
      <Image
        src={src || defaultSrc}
        alt={name[0]}
        fill
        className="object-cover object-center"
        loading="lazy"
        placeholder="blur"
        blurDataURL={defaultSrc}
        sizes="50vw"
      />
    </figure>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <h1
      className={`card-title text-xs sm:text-base font-bold group-hover:underline truncate ${
        isEnglish(title) ? "" : "font-bn"
      }`}
    >
      {title}
    </h1>
  );
};
