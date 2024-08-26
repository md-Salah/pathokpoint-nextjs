import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Order } from '@/interface';
import { removeCoupon } from '@/redux/features/admin-cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

import ApplyCoupon from './ApplyCoupon';
import CouponApplied from './CouponApplied';
import OrderSummary from './OrderSummary';

interface Props {
  handlePlaceOrder: () => void;
}

const CouponAndSummary = ({ handlePlaceOrder }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLDialogElement>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const { coupon, err, isLoading } = useSelector(
    (state: RootState) => state.adminCart
  );

  return (
    <div className="admin-container admin-mt bg-white lg:p-10 grid lg:grid-cols-2 lg:gap-8">
      <div className="max-w-sm">
        {coupon ? (
          <CouponApplied
            handleRemoveCoupon={() => {
              dispatch(removeCoupon());
            }}
          />
        ) : (
          <ApplyCoupon />
        )}
      </div>
      <div className="mt-4 lg:mt-0 w-full max-w-96">
        <OrderSummary />

        <p className="text-highlight text-sm mt-8">{err}</p>
        <button
          className="mt-4 btn btn-primary w-full"
          onClick={handlePlaceOrder}
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CouponAndSummary;
