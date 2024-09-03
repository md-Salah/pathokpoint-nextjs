import Image from 'next/image';

import { Author } from '@/interface';
import { isEnglish } from '@/utils';

const AuthorInfo = ({ author }: { author: Author }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="flex flex-col items-center">
          <Frame name={author.name} src={author.image?.src} />
          {/* <h4 className="text-center font-medium text-sm mt-6">
            <span className="font-semibold">128k</span> Follower
          </h4>
          <button className="btn btn-sm btn-primary w-28 mt-2">Follow</button> */}
        </div>

        <div className="mt-6 lg:mt-0 lg:ml-8">
          <h2
            className={`${
              !isEnglish(author.name) && "font-bn"
            } text-center lg:text-left text-black02 text-sm lg:text-lg font-medium`}
          >
            {author.name}
          </h2>

          {author.description ? (
            <p className="text-justify font-bn text-xs lg:text-sm mt-6 lg:mt-4 leading-5">
              {author.description}
            </p>
          ) : (
            <p className="text-sm mt-6 lg:mt-4 text-black04 text-center lg:text-left">
              No description found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;

const Frame = ({ name, src }: { name: string; src?: string | null }) => {
  const defaultSrc = "/default/author.png";

  return (
    <div className="bg-black05 mask mask-squircle p-[4px] w-24 sm:w-32 h-24 sm:h-32 block mx-auto">
      <figure className="relative mask mask-squircle w-full h-full text-center">
        <Image
          src={src || defaultSrc}
          alt={name}
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
