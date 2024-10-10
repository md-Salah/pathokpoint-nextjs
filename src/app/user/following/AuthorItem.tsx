import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { defaultSrc } from '@/constants';
import { useToken } from '@/hooks';
import { Author } from '@/interface';
import { isEnglish } from '@/utils';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

interface Props {
  author: Author;
  refresh: () => void;
}

const AuthorItem = ({ author, refresh }: Props) => {
  const { token } = useToken();
  const [loading, setLoading] = useState<boolean>(false);

  const handleUnfollow = async () => {
    setLoading(true);
    try {
      await axiosInstance.post(`/author/unfollow/${author.id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      refresh();
    } catch (error) {
      console.log(extractAxiosErr(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex py-2 justify-between items-center border-t border-black06">
      <div className="flex items-center gap-4">
        <div className="bg-black05 mask mask-squircle p-0.5 block w-14 h-14">
          <figure className="relative mask mask-squircle w-full h-full text-center">
            <Image
              src={author.image?.src || defaultSrc.author}
              alt={author.name}
              fill
              className="object-cover object-center"
              loading="lazy"
              sizes="(max-width: 768px) 33vw, 10vw"
            />
          </figure>
        </div>

        <div className="text-sm space-y-1">
          <Link
            href={`/authors/${author.slug}`}
            className={`${
              !isEnglish(author.name) && "font-bn"
            } block hover:underline`}
          >
            {author.name}
          </Link>
          <p className="text-black04">{author.followers_count} followers</p>
        </div>
      </div>

      <button
        className="btn btn-outline btn-primary btn-sm"
        onClick={handleUnfollow}
        disabled={loading}
      >
        {loading && <div className="loading loading-spinner"></div>}
        Unfollow
      </button>
    </div>
  );
};

export default AuthorItem;
