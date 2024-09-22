"use client";
import useSWR from 'swr';

import PaginationHandler from '@/components/PaginationHandler';
import { imageFolders } from '@/constants/constants';
import { useToken } from '@/hooks';
import { Image } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error } from '@/micro-components/Admin';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import ImageContainer from './ImageContainer';

interface Props {
  searchParams?: any;
}

const Images = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/image/all?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Images</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12">
        {/* <div className="col-span-3 flex flex-col space-y-2 border-r min-h-screen p-6">
          {imageFolders.map((folder) => (
            <div
              className={`flex items-center space-x-2 hover:bg-[#E8E9EB] py-2 px-4 rounded-lg cursor-pointer text-sm ${
                true && "bg-[#E8E9EB] font-semibold"
              }`}
              key={folder.id}
              // onClick={() => handleFolderChange(folder.id)}
            >
              <CiFolderOn size={18} />
              <span>{folder.name}</span>
            </div>
          ))}
        </div> */}
        <div className="col-span-12">
          {isLoading ? (
            <div className="mt-4 skeleton h-96"></div>
          ) : (
            <>
              {data?.data.length === 0 ? (
                <p className="text-black04 py-10 text-center mt-4">
                  No result found
                </p>
              ) : (
                <div className="flex flex-wrap gap-4 gap-y-6">
                  {data?.data.map((img: Image) => (
                    <ImageContainer key={img.id} img={img} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      {data && (
        <div className="mt-8 flex justify-end">
          <PaginationHandler totalPages={data.headers["x-total-pages"]} />
        </div>
      )}
    </div>
  );
};

export default Images;
