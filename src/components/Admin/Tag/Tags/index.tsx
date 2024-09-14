"use client";
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { SearchBar } from '@/components/Admin';
import { useToken } from '@/hooks';
import { Tag } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error } from '@/micro-components/Admin';
import { isEnglish } from '@/utils';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const Tags = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/tag/all?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Tags</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link
          href="/admin/tags/add-tag"
          className="btn btn-secondary btn-sm lg:h-11"
        >
          <FiPlus size={20} className="inline-block" />
          Add Tag
        </Link>
      </div>

      <div className="mt-4">
        <div className="max-w-72">
          <SearchBar />
        </div>
      </div>

      {isLoading ? (
        <div className="mt-4 skeleton h-96"></div>
      ) : (
        <>
          {data?.data.length === 0 ? (
            <p className="text-black04 py-10 text-center mt-4">
              No result found
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto min-h-64">
              <table className="table w-full text-xs sm:text-sm table-pin-rows">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Public</th>
                    <th>Show In Menu</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((tag: Tag) => (
                    <tr key={tag.id}>
                      <td className="min-w-48">
                        <Link
                          href={`/books?tag__slug__in=${tag.slug}`}
                          className="hover:underline"
                          target="_blank"
                        >
                          <div
                            className={`line-clamp-1 ${
                              !isEnglish(tag.name) && "font-bn"
                            }`}
                          >
                            {tag.name}
                          </div>
                        </Link>
                        <div className="mt-1 text-xs line-clamp-1 text-black04">
                          {tag.slug}
                        </div>
                      </td>
                      <td>{tag.private ? "No" : "Yes"}</td>
                      <td>{tag.is_in_menu ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          href={`/admin/tags/edit/${tag.id}`}
                          className="btn btn-outline btn-primary btn-sm w-16"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Pagination */}
      {data && (
        <div className="mt-8 flex justify-end">
          <PaginationHandler totalPages={data.headers["x-total-pages"]} />
        </div>
      )}
    </div>
  );
};

export default Tags;
