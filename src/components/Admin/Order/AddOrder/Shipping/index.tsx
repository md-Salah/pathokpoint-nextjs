import { useDispatch, useSelector } from 'react-redux';

import { toggleCashOnDelivery, toggleShippingRequired } from '@/redux/features/admin-cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

import ShippingAddress from './ShippingAddress';
import ShippingMethods from './ShippingMethods';

const Shipping = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { shippingRequired, isCashOnDelivery } = useSelector(
    (state: RootState) => state.adminCart
  );
  return (
    <div className="admin-container admin-mt lg:p-10 bg-white">
      <div className="flex items-baseline justify-between border-b pb-2">
        <h4 className="text-base">Shipping</h4>
        <label className="mt-4 cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
            checked={shippingRequired}
            onChange={() => dispatch(toggleShippingRequired())}
          />
          <span className="label-text font-medium">Shipping required</span>
        </label>
      </div>

      {shippingRequired && (
        <div className="mt-4 grid lg:grid-cols-2 lg:gap-4">
          <ShippingAddress />
          <div className="">
            <div className="mt-3 form-control">
              <label className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-primary"
                  checked={isCashOnDelivery}
                  onChange={() => dispatch(toggleCashOnDelivery())}
                />
                <span className="label-text font-medium">Cash on delivery</span>
              </label>
            </div>
            <ShippingMethods />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipping;
