"use client";
import { useDispatch, useSelector } from 'react-redux';

import { toggleTermsAggreed } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const AcceptTerms = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { termsAggreed } = useSelector((state: RootState) => state.cart);

  return (
    <label className="cursor-pointer flex items-center gap-2">
      <input
        type="checkbox"
        className="checkbox checkbox-xs checkbox-primary"
        checked={termsAggreed}
        onChange={() => dispatch(toggleTermsAggreed())}
      />
      <span className="label-text font-bn text-xs">
        উপরোক্ত শর্তাবলী মেনে অর্ডার প্রদান করছি।
      </span>
    </label>
  );
};
export default AcceptTerms;
