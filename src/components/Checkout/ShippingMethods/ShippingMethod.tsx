import { useEffect, useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { MdOutlineCancel } from 'react-icons/md';
import { TbClock, TbCoinTaka } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';

import { Courier } from '@/interface';
import { resetCourier } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

interface Props {
  courier: Courier;
  handleSelect: (courier: Courier) => void;
}

const ShippingMethod = ({ courier, handleSelect }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { courierId, isCashOnDelivery } = useSelector(
    (state: RootState) => state.cart
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (!courier.allow_cash_on_delivery && isCashOnDelivery) {
      setIsDisabled(true);
      if (courier.id === courierId) {
        dispatch(resetCourier());
      }
    } else setIsDisabled(false);
  }, [courier, isCashOnDelivery]);

  if (courier.base_charge === 1 ) return null

  return (
    <div
      className={`flex flex-row items-center p-2 pl-5 gap-x-5 min-w-72 min-h-20 grow border rounded border-black05
        ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={() => handleSelect(courier)}
    >
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={courier.id === courierId}
        disabled={isDisabled}
        readOnly
      />
      <div className="flex flex-col gap-1.5 text-xs text-black04">
        <h3
          className={`label-text font-medium ${isDisabled && "text-black04"}`}
        >
          {courier.method_name}
        </h3>
        <div className="flex items-center">
          <TbCoinTaka className="inline-block mr-1" size="16" />
          <span>{courier.base_charge + " Tk"}</span>
          <TbClock className="inline-block mr-1 ml-3" size="16" />
          <span>{courier.delivery_time || "unspecified"}</span>
        </div>
        <h4 className="font-bn">{courier.note}</h4>
        {!courier.allow_cash_on_delivery && (
          <h4 className="flex items-center gap-1">
            <MdOutlineCancel size="16" />
            Cash on delivery unavailable
          </h4>
        )}
      </div>
    </div>
  );
};

export default ShippingMethod;
