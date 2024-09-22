"use client";
import useSWR from 'swr';

import { PaginationHandler } from '@/components';
import { useToken } from '@/hooks';
import { Transaction } from '@/interface';
import { DataCount } from '@/micro-components';
import { Error, SearchBar, Tabs } from '@/micro-components/Admin';
import { fetchWithTokenAndHeader } from '@/utils/axiosConfig';

import Trnx from './Trnx';

interface Props {
  tabOptions: {
    label: string;
    value: string;
  }[];
  searchParams?: any;
}

const Transactions = ({ tabOptions, searchParams }: Props) => {
  const params = new URLSearchParams(searchParams);
  const query = params.toString();
  const { token } = useToken();

  const { data, isLoading, error } = useSWR(
    [`/transaction/all?order_by=-created_at&${query}`, token],
    ([url, token]) => fetchWithTokenAndHeader(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <div className="admin-container bg-white">
      <div className="flex justify-between h-14">
        <div>
          <h1 className="text-lg sm:text-2xl font-medium mb-1">Transactions</h1>
          {data && (
            <DataCount
              currentPage={parseInt(data.headers["x-current-page"])}
              perPage={parseInt(data.headers["x-per-page"])}
              totalCount={parseInt(data.headers["x-total-count"])}
            />
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mt-4 flex overflow-x-scroll pb-2 gap-2">
        <div className="max-w-72">
          <SearchBar placeholder="TrxID, Phone or Reference" />
        </div>
      </div>

      {/* <Tabs tabOptions={tabOptions} name="role" /> */}

      {/* Table */}
      {isLoading ? (
        <div className="mt-4 skeleton h-96"></div>
      ) : (
        <>
          {data?.data.length === 0 ? (
            <p className="text-black04 py-10 text-center mt-4">
              No result found
            </p>
          ) : (
            <div className="overflow-x-auto overflow-y-hidden pt-6">
              <table className="table w-full text-xs sm:text-sm">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Date</th>
                    <th>Gateway</th>
                    <th>Amount</th>
                    <th>TrxID</th>
                    <th>Reference</th>
                    <th>Verified by</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.map((trnx: Transaction) => (
                    <Trnx key={trnx.id} trnx={trnx} />
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

export default Transactions;
