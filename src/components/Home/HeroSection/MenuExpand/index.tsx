import React from 'react';
import useSWR from 'swr';

import { SubMenuItem } from '@/interface';
import { Divider } from '@/micro-components';
import { fetcher } from '@/utils/axiosConfig';

import Item from './Item';

interface Props {
  query: string;
  hrefPrefix: string;
  filter: string;
}

export const MenuExpand = ({ query, hrefPrefix, filter }: Props) => {
  const { data, isLoading } = useSWR(query, (url) => fetcher(url));

  return (
    <aside className="h-96 w-full p-10 min-w-0 bg-white shadow-sm text-sm overflow-hidden">
      {isLoading && (
        <div className="flex w-full h-full items-center justify-center">
          <div className="loading loading-bars text-black04"></div>
        </div>
      )}
      {data.length === 0 && (
        <div className="flex w-full h-full items-center justify-center">
          <p className="text-black04">No items found</p>
        </div>
      )}

      {!isLoading && (
        <div className="flex h-full">
          <ul className="min-w-20 w-40 max-w-40 overflow-hidden">
            {data &&
              data
                .slice(0, 10)
                .map((item: SubMenuItem) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    href={hrefPrefix + item.slug + filter}
                  />
                ))}
          </ul>

          {data && data.length > 10 && (
            <>
              <Divider />
              <ul className="min-w-20 w-40 max-w-40 overflow-hidden">
                {data.slice(10, 20).map((item: SubMenuItem) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    href={hrefPrefix + item.slug + filter}
                  />
                ))}
              </ul>
            </>
          )}

          {data && data.length > 20 && (
            <>
              <Divider className="hidden lg:block" />
              <ul className="min-w-20 w-40 max-w-40 overflow-hidden hidden lg:block">
                {data.slice(20, 30).map((item: SubMenuItem) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    href={hrefPrefix + item.slug + filter}
                  />
                ))}
              </ul>
            </>
          )}

          {data && data.length > 30 && (
            <>
              <Divider className="hidden lg:block" />
              <ul className="min-w-20 w-40 max-w-40 overflow-hidden hidden lg:block">
                {data.slice(30, 40).map((item: SubMenuItem) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    href={hrefPrefix + item.slug + filter}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </aside>
  );
};

export default MenuExpand;
