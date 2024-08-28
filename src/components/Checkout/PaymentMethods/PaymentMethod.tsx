import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { paymentGateway } from '@/interface';
import { selectPaymentMethod } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

interface Props {
  method: paymentGateway;
}

const PaymentMethod = ({ method }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { paymentMethod: selectedMethod } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <label
      className={`flex items-center gap-2 border border-black05 rounded p-2 pl-5 min-w-36 grow max-w-60 lg:max-w-44 h-16 ${
        method.is_disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={method.name === selectedMethod}
        name={method.name}
        disabled={method.is_disabled}
        onChange={(e) => dispatch(selectPaymentMethod(e.target.name))}
      />
      <div
        className={`flex flex-1 justify-center ${
          method.is_disabled && "opacity-30"
        }`}
      >
        {method.image ? (
          <figure className="w-16 h-10 relative">
            <Image
              src={method.image.src}
              alt={method.name}
              fill
              sizes="(max-width: 640px) 40vw, 10vw"
              className="object-contain object-center"
            />
          </figure>
        ) : (
          <div>{method.title}</div>
        )}
      </div>
    </label>
  );
};

export default PaymentMethod;
