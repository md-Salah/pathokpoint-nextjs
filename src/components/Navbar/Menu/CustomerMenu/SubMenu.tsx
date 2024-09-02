import useSWR from 'swr';

import { SubMenuItem } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import Item from '../Item';

interface Props {
  query: string;
  hrefPrefix: string;
}

const SubMenu = ({ query, hrefPrefix }: Props) => {
  const { data, isLoading } = useSWR(query, (url) => fetcher(url));

  return (
    <ul>
      {isLoading && (
        <div className="flex py-4 justify-center">
          <div className="loading loading-spinner text-black04"></div>
        </div>
      )}
      {data &&
        data.map((item: SubMenuItem) => (
          <Item key={item.id} name={item.name} href={hrefPrefix + item.slug} />
        ))}
    </ul>
  );
};

export default SubMenu;
