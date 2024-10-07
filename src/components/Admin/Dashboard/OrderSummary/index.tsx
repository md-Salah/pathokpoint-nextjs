import { useState } from 'react';
import useSWR from 'swr';

import { dateOptions } from '@/components/Admin/Dashboard/dateOptions';
import { useToken } from '@/hooks';
import { Error } from '@/micro-components/Admin';
import { fetchWithToken } from '@/utils/axiosConfig';

import Box from './Box';

const OrderSummary = () => {
  const { token } = useToken();
  const [activeOption, setActiveOption] = useState<(typeof dateOptions)[0]>(
    dateOptions[0]
  );
  const { data, isLoading, error } = useSWR(
    [
      `/dashboard/order?${
        activeOption.fromDate &&
        `from_date=${activeOption.fromDate.toISOString()}`
      }${
        activeOption.toDate && `&to_date=${activeOption.toDate.toISOString()}`
      }`,
      token,
    ],
    ([url, token]) => fetchWithToken(url, token)
  );

  if (error) return <Error err={error} />;
  return (
    <>
      <div className="flex items-center gap-2 p-1 border rounded text-sm w-fit">
        {dateOptions.map((option) => (
          <div
            className={`px-4 py-2 text-sm rounded cursor-pointer hover:bg-[#F0F1F3] ${
              activeOption.title === option.title &&
              "font-semibold bg-[#F0F1F3]"
            }`}
            key={option.title}
            onClick={() => setActiveOption(option)}
          >
            {option.title}
          </div>
        ))}
      </div>
      {isLoading ? (
        <div className="w-full h-32 flex justify-center items-center">
          <div className="loading loading-dots"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Box title="Order" value={data.total_order} />
          <Box title="Sale" value={data.order_value} currency="৳" />
          <Box
            title="Shipping"
            value={data.shipping_charge + data.weight_charge}
            currency="৳"
          />
          <Box title="Profit" value={data.profit} currency="৳" />
        </div>
      )}
    </>
  );
};

export default OrderSummary;
