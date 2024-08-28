import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Category as CategoryInterface } from '@/interface';
import { isEnglish } from '@/utils';

const Category = ({ category }: { category: CategoryInterface }) => {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="flex items-center gap-3 border-b border-black06 bg-white hover:bg-gray-100 p-2 group">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12 text-2xl text-center">
            <Image
              src={category.image?.src || defaultSrc.category}
              alt={category.name[0]}
              width={48}
              height={48}
              className='group-hover:opacity-90'
            />
          </div>
        </div>
        <h1
          className={`text-sm font-semibold line-clamp-2 group-hover:underline ${
            !isEnglish(category.name) && "font-bn"
          }`}
        >
          {category.name}
        </h1>
      </div>
    </Link>
  );
};

export default Category;
