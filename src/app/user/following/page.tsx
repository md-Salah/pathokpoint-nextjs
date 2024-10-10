"use client";
import { useState } from 'react';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { MobileHeader } from '@/components/UserProfile';
import { useToken } from '@/hooks';
import { Author } from '@/interface';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import AuthorItem from './AuthorItem';

interface Props {
  searchParams?: any;
}

const Following = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { token } = useToken();
  const [toggle, setToggle] = useState<boolean>(false);

  const refresh = () => {
    setToggle(!toggle);
  };

  const { data, isLoading, error } = useSWR(
    [`/author/following?per_page=20&${query}`, token, toggle],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  return (
    <div>
      <MobileHeader title="Following" />
      <div className="w-full flex flex-col bg-white p-4 md:p-6 lg:p-10 pb-10">
        <h4 className="text-black02 font-semibold text-lg hidden md:block">
          Following
        </h4>
        {error && (
          <div className="mt-4 md:mt-6 text-center text-error">{error}</div>
        )}
        {isLoading && (
          <div className="flex justify-center py-10 text-black04">
            <div className="loading loading-dots"></div>
          </div>
        )}
        <div className="mt-4 md:mt-6">
          {data?.data.map((author: Author) => (
            <AuthorItem key={author.id} author={author} refresh={refresh} />
          ))}
        </div>
        {data && (
          <div className="mt-8 flex justify-end">
            <PaginationHandler totalPages={data.headers["x-total-pages"]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Following;
