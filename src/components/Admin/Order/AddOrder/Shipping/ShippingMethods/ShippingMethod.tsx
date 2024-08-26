import { TbClock, TbCoinTaka } from 'react-icons/tb';
import { useSelector } from 'react-redux';

import { Courier } from '@/interface';
import { RootState } from '@/redux/store';

interface Props {
  courier: Courier;
  handleSelect: (id: string) => void;
}

const ShippingMethod = ({ courier, handleSelect }: Props) => {
  const { courierId } = useSelector((state: RootState) => state.adminCart);

  return (
    <div
      className="flex flex-row items-center p-2 pl-5 gap-x-5 min-w-72 min-h-20 grow cursor-pointer border rounded border-black05"
      onClick={() => handleSelect(courier.id)}
    >
      <input
        type="radio"
        className="radio radio-sm radio-primary"
        checked={courier.id === courierId}
        readOnly
      />
      <div className="flex flex-col gap-1.5 text-xs text-black04">
        <h3 className="label-text font-medium">{courier.method_name}</h3>
        <div className="flex items-center">
          <TbCoinTaka className="inline-block mr-1 min-w-4 min-h-4" />
          <span>{courier.base_charge + " Tk,"}</span>
          <TbClock className="inline-block mr-1 ml-2 min-w-4 min-h-4" />
          <span>{courier.delivery_time || "unspecified"}</span>
        </div>
        {courier.note && <h4 className="font-bn">{courier.note}</h4>}
      </div>
    </div>
  );
};

export default ShippingMethod;
