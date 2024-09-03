import { PiSealPercentFill } from 'react-icons/pi';
import useSWR from 'swr';

import { Coupon } from '@/interface';
import { fetcher } from '@/utils/axiosConfig';

const SuggestedCoupon = () => {
  const { data: coupons }: { data: Coupon[] } = useSWR(
    "/cart/suggested-coupons",
    fetcher
  );

  if (!coupons || coupons.length === 0) return null;
  return (
    <div className="flex items-start gap-[6px] text-sm font-medium">
      <div className="flex items-center gap-[6px] min-w-fit">
        <PiSealPercentFill className="text-primary w-[14px] h-[14px]" />
        <span className="text-primary capitalize font-medium">{coupons[0].code}:</span>
      </div>
      <span className="text-black04 font-bn">
        {coupons[0].short_description}
      </span>
    </div>
  );
};

export default SuggestedCoupon;
