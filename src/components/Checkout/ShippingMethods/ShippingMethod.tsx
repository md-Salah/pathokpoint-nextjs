import { TbClock, TbCoinTaka } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

import { selectCourier } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { isEnglish } from '@/utils';

interface Props {
  id: string;
  title: string;
  by?: string;
  charge: string;
  duration: string;
  qoute?: string;
}

const ShippingMethod = ({ id, title, by, charge, duration, qoute }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { courierId } = useSelector((state: RootState) => state.cart);

  return (
    <div
      className="flex flex-row items-center p-2 pl-5 gap-x-5 min-w-72 min-h-20 grow cursor-pointer border rounded border-black05"
      onClick={() => dispatch(selectCourier(id))}
    >
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={id === courierId}
        readOnly
      />
      <div className="flex flex-col gap-1.5 text-xs text-black04">
        <h3 className="label-text font-medium">{title}</h3>
        {by && (
          <h4 className={`${!isEnglish(by) && "font-bn"}`}>{"by " + by}</h4>
        )}
        <div className="flex items-center">
          <TbCoinTaka className="inline-block mr-1 min-w-4 min-h-4" />
          <span>{charge + ","}</span>
          <TbClock className="inline-block mr-1 ml-2 min-w-4 min-h-4" />
          <span>{duration}</span>
        </div>
        {qoute && <h4 className="font-bn">{qoute}</h4>}
      </div>
    </div>
  );
};

export default ShippingMethod;
