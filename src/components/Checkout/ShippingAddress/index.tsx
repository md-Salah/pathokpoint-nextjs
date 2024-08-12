"use client";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { updateAddress, updateCustomerNote } from '@/redux/features/cart-slice';
import { RootState } from '@/redux/store';
import { capitalize } from '@/utils';
import { fetcher } from '@/utils/axiosConfig';

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const { address, customerNote } = useSelector(
    (state: RootState) => state.cart
  );

  const { data: cities } = useSWR(`/address/city/${address.country}`, fetcher);

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
            className="input input-bordered bg-white input-sm h-10"
            name="name"
            value={address.name}
            onChange={handleAddress}
          />
        </div>
        <div className="form-control">
          <label className="label">Contact number</label>
          <label className="input input-bordered focus-within:outline-none focus-within:border-primary bg-white input-sm flex items-center gap-2 h-10">
            +88
            <input
              type="text"
              placeholder="01700001111"
              maxLength={11}
              className="grow bg-transparent"
              name="phone_number"
              value={address.phone_number}
              onChange={handleAddress}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered focus:outline-none focus:border-primary bg-white input-sm h-10"
            name="email"
            value={address.email || ""}
            onChange={handleAddress}
          />
        </div>
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
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="form-control min-w-0">
            <label className="label">Thana</label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary input-sm bg-white h-10"
              name="thana"
              value={address.thana}
              onChange={handleAddress}
            />
          </div>
          <div className="form-control min-w-0">
            <label className="label">District</label>
            <select
              className="select select-bordered select-sm h-10 bg-white focus:outline-none focus:border-primary"
              name="city"
              onChange={handleAddress}
              value={address.city}
            >
              {cities?.map((city: string) => (
                <option key={city} value={city}>
                  {capitalize(city)}
                </option>
              ))}
            </select>
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
