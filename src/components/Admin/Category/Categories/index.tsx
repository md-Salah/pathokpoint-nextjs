"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { SearchBar } from '@/components/Admin';
import { defaultSrc } from '@/constants';
import { useToken } from '@/hooks';
import { Category, CatParent } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error } from '@/micro-components/Admin';
import { isEnglish } from '@/utils';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const Categories = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/category/all?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Categories</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link
          href="/admin/categories/add-category"
          className="btn btn-secondary btn-sm lg:h-11"
        >
          <FiPlus size={20} className="inline-block" />
          Add Category
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
                    <th>Image</th>
                    <th>Name</th>
                    <th>Show In Menu</th>
                    <th>Parent</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((category: Category) => (
                    <tr key={category.id}>
                      <td>
                        <figure className="w-12">
                          <Image
                            src={category.image?.src || defaultSrc.category}
                            alt=""
                            width={237}
                            height={181}
                          />
                        </figure>
                      </td>
                      <td className="min-w-48">
                        <Link
                          href={`/categories/${category.slug}`}
                          className="hover:underline"
                          target="_blank"
                        >
                          <div
                            className={`line-clamp-1 ${
                              !isEnglish(category.name) && "font-bn"
                            }`}
                          >
                            {category.name}
                          </div>
                        </Link>
                        <div className="mt-1 text-xs line-clamp-1 text-black04">
                          {category.slug}
                        </div>
                      </td>
                      <td>{category.is_in_menu ? "Yes" : "No"}</td>
                      <td>
                        {category.parent?.map((parent: CatParent) => (
                          <div
                            key={parent.id}
                            className={`line-clamp-1 ${
                              !isEnglish(parent.name) && "font-bn"
                            }`}
                          >
                            {parent.name}
                          </div>
                        ))}
                      </td>
                      <td>
                        <Link
                          href={`/admin/categories/edit/${category.id}`}
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

export default Categories;
