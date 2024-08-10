"use client";

import { useDispatch, useSelector } from 'react-redux';

import { updateAddress, updateCustomerNote } from '@/redux/features/cart-slice';
import { RootState } from '@/redux/store';

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const { address, customerNote } = useSelector(
    (state: RootState) => state.cart
  );

  const handleAddress = (e: any) => {
    dispatch(updateAddress({ ...address, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="text-sm flex flex-col gap-2">
        <h2 className="font-semibold sm:text-lg md:text-xl">
          Shipping address
        </h2>
        <div className="form-control">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered bg-white input-sm"
            name="name"
            value={address.name}
            onChange={handleAddress}
          />
        </div>
        <div className="form-control">
          <label className="label">Contact number</label>
          <label className="input input-bordered focus-within:outline-none focus-within:border-primary bg-white input-sm flex items-center gap-2">
            +88
            <input
              type="text"
              placeholder="01700001111"
              className="grow bg-transparent"
              name="phone_number"
              value={address.phone_number}
              onChange={handleAddress}
            />
          </label>
        </div>
        {/* <div className="form-control">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered focus:outline-none focus:border-primary bg-white input-sm"
            name="email"
            value={address.email}
            onChange={handleAddress}
          />
        </div> */}
        <div className="form-control">
          <label className="label">Address</label>
          <textarea
            className="textarea textarea-bordered textarea-sm focus:outline-none focus:border-primary bg-white"
            placeholder="House no, road no, area"
            name="address"
            value={address.address}
            onChange={handleAddress}
          ></textarea>
        </div>
        <div className="flex w-full gap-2">
          <div className="form-control min-w-0">
            <label className="label">District</label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary bg-white input-sm"
              name="city"
              value={address.city}
              onChange={handleAddress}
            />
          </div>
          <div className="form-control min-w-0">
            <label className="label">Country</label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary input-sm bg-white input-disabled"
              value="Bangladesh"
              readOnly
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">Note (if any)</label>
          <textarea
            className="textarea textarea-bordered textarea-sm focus:outline-none focus:border-primary bg-white font-bn"
            value={customerNote}
            onChange={(e) => dispatch(updateCustomerNote(e.target.value))}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
