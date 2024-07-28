"use client";
import React, { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { PiTrashFill } from "react-icons/pi";
import OrderedProductPreviewItem from "../OrderedProductPreviewItem/index";
import { FaCaretDown } from "react-icons/fa";
import { ProductShipmentStatusBadge } from "@/micro-components";

const OrderTable = () => {
  const [isProductDescending, setIsProductDescending] = useState(true);
  const [isStatusDescending, setIsStatusDescending] = useState(true);
  return (
    <table className="table w-full text-sm">
      <thead className="bg-base-200">
        <tr className="py-2">
          <th
            className="flex items-center justify-between cursor-pointer hover:text-blue-500"
            onClick={() => setIsProductDescending((prev) => !prev)}
          >
            <span>Product</span>
            <FaCaretDown
              className={`${!isProductDescending ? "rotate-180" : "rotate-0"}`}
            />
          </th>
          <th>Customer</th>
          <th>Total</th>
          <th
            className="flex items-center justify-between cursor-pointer hover:text-blue-500"
            onClick={() => setIsStatusDescending((prev) => !prev)}
          >
            <span>Status</span>
            <FaCaretDown
              className={`${!isStatusDescending ? "rotate-180" : "rotate-0"}`}
            />
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((item) => (
          <tr key={item}>
            <td>
              <OrderedProductPreviewItem />
            </td>
            <td>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-sm font-semibold">Joshua Nushmil</span>
                <span className="text-xs font-light text-[#667085]">
                  Johnb@mail.com
                </span>
              </div>
            </td>
            <td>670</td>
            <td>
              <ProductShipmentStatusBadge status={"Processing"} />
            </td>
            <td>
              <div className="flex items-center space-x-2">
                <MdRemoveRedEye
                  color={"#858D9D"}
                  size={20}
                  className="cursor-pointer"
                />
                <PiTrashFill
                  color={"#858D9D"}
                  size={20}
                  className="cursor-pointer"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
