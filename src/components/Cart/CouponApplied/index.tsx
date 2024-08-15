"use client";
import { FaCircleCheck } from 'react-icons/fa6';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

interface Props {
  handleRemoveCoupon: () => void;
}

const CouponApplied = ({ handleRemoveCoupon }: Props) => {
  const { coupon, discount } = useSelector((state: RootState) => state.cart);

  return (
    <div className="mt-5">
      {/* <h3 className="font-medium text-sm">Voucher for your order</h3> */}
      <div className="mt-4 border border-black06 rounded px-2 py-3">
        <div className="flex items-center gap-2">
          <RiDiscountPercentFill className="w-6 h-6 text-primary" />
          <div className="font-semibold">
            <h3 className="text-xs">{coupon}</h3>
            <p className="text-primary text-xxs">-Tk {discount}</p>
          </div>
        </div>
        <div className="border-b border-dashed border-b-black05 my-2"></div>
        <div className="flex items-center justify-between">
          <h5 className="text-[#02BF6C] font-semibold text-xs flex items-center gap-1">
            <FaCircleCheck className="w-3.5 h-3.5" />
            Voucher applied!
          </h5>
          <button
            className="btn btn-link btn-xs font-semibold text-xs text-primary"
            onClick={handleRemoveCoupon}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponApplied;
