import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

import { Coupon } from '@/interface';
import { applyCoupon } from '@/redux/features/admin-cart-slice';
import { AppDispatch } from '@/redux/store';
import { fetcher } from '@/utils/axiosConfig';

import Voucher from './Voucher';

const ApplyCoupon = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  const { data: coupons }: { data: Coupon[] } = useSWR(
    "/cart/suggested-coupons",
    fetcher
  );

  const handleCoupon = async (code: string) => {
    const trimmedCode = code.trim();
    if (trimmedCode === "") return;

    setIsLoading(true);
    const action = await dispatch(applyCoupon(trimmedCode));
    if (applyCoupon.rejected.match(action)) {
      setErr(action.payload as string);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Suggestions */}
      {coupons && coupons.length > 0 && (
        <div className="rounded border border-primary">
          {coupons.map((coupon: Coupon, index: number) => (
            <div key={coupon.code}>
              <Voucher
                code={coupon.code}
                description={coupon.short_description || ""}
                handleCoupon={handleCoupon}
              />
              {index !== coupons.length - 1 && (
                <div className="border-b border-dashed border-b-black05"></div>
              )}
            </div>
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
        {err && <p className="text-highlight text-sm mt-4">{err}</p>}
      </div>
    </>
  );
};

export default ApplyCoupon;
