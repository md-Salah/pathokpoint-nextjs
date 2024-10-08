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
      <div className="w-full overflow-x-scroll pb-1">
        <div className="flex items-center gap-2 p-1 border rounded text-sm w-fit">
          {dateOptions.map((option) => (
            <div
              className={`px-4 py-2 text-sm rounded cursor-pointer hover:bg-[#F0F1F3] whitespace-nowrap ${
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
      </div>
      {isLoading ? (
        <div className="w-full h-32 flex justify-center items-center">
          <div className="loading loading-dots"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Box title="Order" value={data.total_order} />
          <Box
            title="Sale"
            value={data.order_value}
            currency="৳"
            tooltip={`
            OLD: ${data.order_value_old_book.toLocaleString("en-IN")},
            NEW: ${data.order_value_new_book.toLocaleString("en-IN")}
            `}
          />
          <Box
            title="Shipping"
            value={data.shipping_charge + data.weight_charge}
            currency="৳"
            tooltip={`Shipping: ${data.shipping_charge.toLocaleString(
              "en-IN"
            )}, Weight: ${data.weight_charge.toLocaleString("en-IN")}`}
          />
          <Box
            title="COG"
            value={data.cog_new_book + data.cog_old_book}
            currency="৳"
            tooltip={`OLD: ${data.cog_old_book.toLocaleString(
              "en-IN"
            )}, NEW: ${data.cog_new_book.toLocaleString("en-IN")}`}
          />
        </div>
      )}
    </>
  );
};

export default OrderSummary;
