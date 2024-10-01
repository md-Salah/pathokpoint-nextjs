"use client";
import Link from 'next/link';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { useToken } from '@/hooks';
import { Coupon } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, SearchBar } from '@/micro-components/Admin';
import { dateTime, isEnglish } from '@/utils';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const AdminCoupon = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/coupon/all?order_by=-created_at&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Coupon</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link
          href="coupons/add-coupon"
          className="btn btn-primary btn-sm lg:h-11"
          target='_blank'
        >
          <FiPlus size={20} className="inline-block" />
          New Coupon
        </Link>
      </div>

      <div className="mt-4">
        <div className="max-w-72">
          <SearchBar placeholder="Search Coupon Code" />
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
            <div className="overflow-y-hidden overflow-x-auto mt-6 min-h-72">
              <table className="table w-full text-xs sm:text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Coupon Code</th>
                    <th>Description</th>
                    <th>Expiry Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item: Coupon) => (
                    <tr key={item.id}>
                      <td className="text-primary font-medium">
                        {item.code}
                      </td>
                      {item.short_description ? (
                        <td
                          className={`${
                            !isEnglish(item.short_description) && "font-bn"
                          } min-w-72 max-w-sm`}
                        >
                          {item.short_description}
                        </td>
                      ) : (
                        <td></td>
                      )}
                      <td>
                        {item.expiry_date
                          ? dateTime(item.expiry_date).datetime
                          : <span className='text-success'>Continue...</span>}
                      </td>
                      <td>
                        {item.expiry_date &&
                        new Date(item.expiry_date) < new Date() ? (
                          <span className="bg-[#FFD3D3] text-[#EE485C] py-1 px-3 text-xs w-fit rounded-full font-semibold">
                            Expired
                          </span>
                        ) : item.is_active ? (
                          <span className="bg-[#CEFFEA] text-success py-1 px-3 text-xs w-fit rounded-full font-semibold">
                            Active
                          </span>
                        ) : (
                          <span className="bg-[#FFD3D3] text-[#EE485C] py-1 px-3 text-xs w-fit rounded-full font-semibold">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td>
                        <Link
                          href={`coupons/edit/${item.id}`}
                          className="btn btn-outline btn-primary btn-sm w-16"
                          target="_blank"
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

export default AdminCoupon;
