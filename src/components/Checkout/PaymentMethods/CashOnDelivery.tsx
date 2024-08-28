import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { settings } from '@/constants';
import { setCashOnDelivery, toggleCashOnDelivery } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const CashOnDelivery = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isCashOnDelivery, grandTotal } = useSelector(
    (state: RootState) => state.cart
  );
  const [codDisabled, setCodDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (grandTotal < settings.minAdvancePayment) {
      dispatch(setCashOnDelivery(false));
      setCodDisabled(true);
    } else {
      setCodDisabled(false);
    }
  }, [grandTotal]);

  return (
    <div className="mt-4 sm:mt-6 form-control">
      <label
        className={`flex items-center gap-2 ${
          codDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-primary"
          checked={isCashOnDelivery}
          disabled={codDisabled}
          onChange={() => dispatch(toggleCashOnDelivery())}
        />
        <span
          className={`font-medium ${
            codDisabled ? "text-black04" : "label-text"
          }`}
        >
          Cash on delivery
        </span>
      </label>
      {isCashOnDelivery && (
        <label className="mt-2 ml-6 text-xs font-bn text-black03 tracking-wide">
          অর্ডারটি কনফার্ম করতে
          <span className="font-semibold font-en mx-1">
            {settings.minAdvancePayment}৳
          </span>
          অগ্রিম পেমেন্ট করুন, বাকী
          <span className="font-semibold font-en mx-1">
            {grandTotal - settings.minAdvancePayment}৳
          </span>
          বই হাতে পেয়ে পরিশোধ করুন।
        </label>
      )}
      {codDisabled && (
        <label className="mt-2 ml-6 text-xs font-bn text-black03 tracking-wide">
          <span className="font-semibold font-en mx-1">
            {settings.minAdvancePayment}৳
          </span>
          টাকার নিচে ক্যাশ অন ডেলিভারি অপশন নেই।
        </label>
      )}
    </div>
  );
};

export default CashOnDelivery;
