import useSWR from 'swr';

import { SubMenuItem } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import Item from '../Item';

interface Props {
  query: string;
  hrefPrefix: string;
  filter: string;
  handleClose: () => void;
}

const SubMenu = ({ query, hrefPrefix, filter, handleClose }: Props) => {
  const { data, isLoading } = useSWR(query, (url) => fetcher(url));

  return (
    <>
      {isLoading && (
        <div className="my-4 mx-4 flex w-52 flex-col gap-4 border-l pl-2">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
      {!isLoading && data && data.length === 0 && (
        <div className="text-black04 border-l mx-4 text-center h-32 pt-10">
          No items found
        </div>
      )}
      {!isLoading && data && data.length > 0 && (
        <div className="h-64 overflow-y-scroll" onClick={handleClose}>
          <ul className="mr-4">
            {data.map((item: SubMenuItem) => (
              <Item
                key={item.id}
                name={item.name}
                href={hrefPrefix + item.slug + filter}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SubMenu;
