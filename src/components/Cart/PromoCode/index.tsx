"use client";
import { applyCoupon, removeCoupon } from "@/redux/features/cart-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const PromoCode = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { discount, coupon } = useSelector((state: RootState) => state.cart);
  const [value, setValue] = useState("");

  const applyVoucher = (code: string) => {
    dispatch(applyCoupon({ coupon: code }));
  };

  const removeVoucher = () => {
    dispatch(removeCoupon());
  };

  return (
    <div>
      {coupon ? (
        <div className="mt-5">
          <h3 className="font-medium text-sm">Voucher for your order</h3>
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
                onClick={removeVoucher}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Suggestions */}
          <div className="mt-10 rounded border border-primary">
            <Voucher
              code="COMEBACK"
              description="৳75 off over ৳299 purchase (Old book)"
              applyVoucher={applyVoucher}
            />
            <div className="border-b border-dashed border-b-black05"></div>
            <Voucher
              code="PATHOK101"
              description="৳200 off over ৳2000 purchase (New book)"
              applyVoucher={applyVoucher}
            />
            <div className="border-b border-dashed border-b-black05"></div>
            <Voucher
              code="NEWUSER"
              description="15% Off on first purchase"
              applyVoucher={applyVoucher}
            />
          </div>

          {/* Apply code */}
          <div className="mt-5">
            <h3 className="font-medium text-sm">Promo code</h3>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                className="input input-sm min-w-0 w-full h-11"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="btn btn-sm h-11 btn-error"
                onClick={() => applyVoucher(value.trim())}
              >
                Apply
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PromoCode;

const Voucher = ({
  code,
  description,
  applyVoucher,
}: {
  code: string;
  description: string;
  applyVoucher: (code: string) => void;
}) => (
  <div
    className="text-xs flex items-center p-2 cursor-pointer group"
    onClick={() => applyVoucher(code)}
  >
    <RiDiscountPercentFill className="min-w-3.5 min-h-3.5 inline-block text-primary mr-1" />
    <span className="text-primary group-hover:underline">{code}</span>
    <span className="mx-1 text-primary">:</span>
    <span className="text-black04">{description}</span>
  </div>
);
