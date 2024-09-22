"use client";
import Link from 'next/link';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';

import PaginationHandler from '@/components/PaginationHandler';
import { useToken } from '@/hooks';
import { Courier } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error } from '@/micro-components/Admin';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

interface Props {
  searchParams?: any;
}

const AdminCouriers = ({ searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();

  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/courier/all?order_by=-created_at&per_page=20&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;

  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">
            Shipping Methods
          </h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
        <Link href="#" className="btn btn-primary btn-sm lg:h-11">
          <FiPlus size={20} className="inline-block" />
          New Method
        </Link>
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
            <div className="overflow-y-hidden overflow-x-auto relative pt-6 min-h-72">
              <table className="table w-full text-xs sm:text-sm table-pin-rows">
                <thead className="bg-base-200">
                  <tr>
                    <th>Method Name</th>
                    <th>Company</th>
                    <th>Delivery Charge</th>
                    <th>
                      Weight Charge/
                      <span className="text-xxs text-black04">kg</span>
                    </th>
                    <th>COD</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((item: Courier) => (
                    <tr key={item.id}>
                      <td>{item.method_name}</td>
                      <td>{item.company_name}</td>
                      <td>{item.base_charge}</td>
                      <td>{item.weight_charge_per_kg}</td>
                      <td>{item.allow_cash_on_delivery ? "Yes" : "No"}</td>
                      <td>
                        <Link
                          href="#"
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

export default AdminCouriers;
