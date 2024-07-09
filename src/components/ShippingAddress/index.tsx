"use client";

import { useState } from "react";

const ShippingAddress = () => {
  const [address, setAddress] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    district: "",
    country: "BD",
    note: "",
  });

  const handleChange = (e: any) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="text-sm flex flex-col gap-2">
        <h2 className="font-semibold sm:text-lg md:text-xl">Shipping address</h2>
        <div className="form-control">
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered focus:outline-none focus:border-primary input-sm"
            name="name"
            value={address.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">Contact number</label>
          <label className="input input-bordered focus-within:outline-none focus-within:border-primary input-sm flex items-center gap-2">
            +88
            <input
              type="text"
              placeholder="01700001111"
              className="grow bg-transparent"
              name="contact"
              value={address.contact}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">Email</label>

          <input
            type="email"
            className="input input-bordered focus:outline-none focus:border-primary input-sm"
            name="email"
            value={address.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">Address</label>
          <textarea
            className="textarea textarea-bordered textarea-sm focus:outline-none focus:border-primary"
            placeholder="House no, road no, area, thana"
            name="address"
            value={address.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex w-full gap-2">
          <div className="form-control min-w-0">
            <label className="label">District</label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary input-sm"
              name="district"
              value={address.district}
              onChange={handleChange}
            />
          </div>
          <div className="form-control min-w-0">
            <label className="label">Country</label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary input-sm input-disabled"
              value="Bangladesh"
              readOnly
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">Note (if any)</label>
          <textarea
            className="textarea textarea-bordered textarea-sm focus:outline-none focus:border-primary"
            name="note"
            value={address.note}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
