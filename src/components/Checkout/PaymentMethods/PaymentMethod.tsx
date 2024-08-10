import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { selectPaymentMethod } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

interface Props {
  src: string;
  alt: string;
  name: string;
}

const PaymentMethod = ({ src, alt, name }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { paymentMethod: method } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <label className="cursor-pointer flex items-center gap-6 border border-black05 rounded p-2 pl-5 min-w-36 grow max-w-60 h-16">
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={method === name}
        name={name}
        onChange={(e) => dispatch(selectPaymentMethod(e.target.name))}
      />
      <figure className="w-16 h-10 relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-left"
        />
      </figure>
    </label>
  );
};

export default PaymentMethod;
