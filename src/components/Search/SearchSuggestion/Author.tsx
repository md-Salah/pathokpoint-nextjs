import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Author as AuthorInterface } from '@/interface';
import { isEnglish } from '@/utils';

const Author = ({ author }: { author: AuthorInterface }) => {
  return (
    <Link href={`/authors/${author.slug}`}>
      <div className="flex items-center gap-3 border-b border-black06 p-2 bg-white hover:bg-gray-100">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12 text-2xl text-center">
            <Image
              src={author.image?.src || defaultSrc.author}
              alt={author.name[0]}
              width={48}
              height={48}
            />
          </div>
        </div>
        <h1
          className={`text-sm font-semibold line-clamp-2 ${
            !isEnglish(author.name) && "font-bn"
          }`}
        >
          {author.name}
        </h1>
      </div>
    </Link>
  );
};

export default Author;
