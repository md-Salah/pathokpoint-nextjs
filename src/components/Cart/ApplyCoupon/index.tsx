import { useState } from 'react';
import useSWR from 'swr';

import { Coupon } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

import Voucher from './Voucher';

interface Props {
  handleCoupon: (code: string) => void;
  isLoading: boolean;
}

const ApplyCoupon = ({ handleCoupon, isLoading }: Props) => {
  const [value, setValue] = useState<string>("");

  const { data: coupons }: { data: Coupon[] } = useSWR(
    "/cart/suggested-coupons",
    fetcher
  );

  return (
    <>
      {/* Suggestions */}
      {coupons && coupons.length > 0 && (
        <div className="mt-10 rounded border border-primary">
          {coupons.map((coupon: Coupon, index: number) => (
            <>
              <Voucher
                code={coupon.code}
                description={coupon.short_description || ""}
                handleCoupon={handleCoupon}
              />
              {index !== coupons.length - 1 && (
                <div className="border-b border-dashed border-b-black05"></div>
              )}
            </>
          ))}
        </div>
      )}

      {/* Apply code */}
      <div className="mt-5">
        <h3 className="font-medium text-sm">Promo code</h3>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className="input input-sm min-w-0 w-full h-11 border border-black05"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="btn btn-sm h-11 btn-error min-w-20"
            onClick={() => handleCoupon(value)}
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Apply"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyCoupon;
