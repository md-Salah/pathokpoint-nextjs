"use client";
import {
  OrderedBookItem,
  OrderSummary,
  Sidebar,
} from "@/components";
import { ConditionBadge } from "@/micro-components";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";

const OrderDetails = () => {
  const params = useParams();
  const [showRestockModalOpen, setShowRestockModalOpen] = useState(false);
  console.log("params", params);
  const handleRestockModalOpen = () => {
    const modalElement = document.getElementById(
      "restock_modal"
    ) as HTMLDialogElement | null;
    modalElement?.showModal();
  };

  const handleRestockModalClose = () => {
    const modalElement = document.getElementById(
      "restock_modal"
    ) as HTMLDialogElement | null;
    modalElement?.close();
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-[95%] sm:w-[80%] p-4 sm:p-8 bg-white rounded-md my-8 mx-auto flex flex-col space-y-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl sm:text-2xl font-semibold">
              ID {params.order_id || ""}
            </h1>
            <div className="dropdown dropdown-bottom dropdown-end">
              <CiMenuKebab
                tabIndex={0}
                role="button"
                color="#363739"
                size={18}
                className="text-center"
              />

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-36"
              >
                <li>
                  <a>Send Invoice</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-black05 border rounded-lg p-8 px-12 w-full">
            <span className="text-xs text-[#6F6E77]">
              Date: 02 Jan, 2023 12:54 PM
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 md:gap-0 pt-4">
              <div className="flex flex-col items-start space-y-3 border-r-1 border-[#E6E6E6]">
                <span className="text-lg font-semibold pb-2">General</span>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span>Customer Name:</span>
                  <span className="font-semibold">Zahid Hasan</span>
                </div>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span>Customer Contact:</span>
                  <span className="font-semibold">+8801944557788</span>
                </div>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span>Invoice:</span>
                  <span className="font-semibold">06</span>
                </div>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span>Email:</span>
                  <span className="font-semibold">Zahid.hasan@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-3 border-r-[#E6E6E6]">
                <span className="text-lg font-semibold pb-2">
                  Shipping Address
                </span>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <span className="w-[70%]">
                    Matikata, 81/A Dhaka Cantonment, Dhaka-1206
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-3">
                <span className="text-lg font-semibold pb-2">
                  Shipping Method
                </span>
                <div className="text-sm md:text-base">
                  <span>Sundarban Courier</span>
                </div>
                <div className="text-xs md:text-sm text-black04 w-[50%]">
                  <span>
                    Charge 60 tk, (সুন্দরবন কুরিয়ারের ব্রাঞ্চ থেকে নিতে হবে)
                    (COD is disallowed)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-semibold">Order Items</h1>
              <select className="select max-w-xs select-sm sm:select-md">
                <option selected>Delivered</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full text-xs sm:text-sm">
                <thead className="bg-base-200">
                  <tr>
                    <th>Item</th>
                    <th>Condition</th>
                    <th>Cover</th>
                    <th>Regular Price</th>
                    <th>Sold Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <OrderedBookItem />
                    </td>
                    <td>
                      <ConditionBadge condition="OLD-Like New" />
                    </td>
                    <td>Hard</td>
                    <td>x5</td>
                    <td>$15,452</td>
                    <td>$15,452</td>
                    <td>$15,452</td>
                    <td>
                      <button
                        className="btn btn-primary text-white btn-sm rounded-lg px-6"
                        onClick={handleRestockModalOpen}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <div className="dropdown dropdown-bottom dropdown-end">
                        <CiMenuKebab
                          tabIndex={0}
                          role="button"
                          color="#363739"
                          size={18}
                          className="text-center"
                        />

                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-36"
                        >
                          <li>
                            <a>Copy</a>
                          </li>
                          <li>
                            <a>Delete</a>
                          </li>
                          <li>
                            <a>Out of Stock</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <OrderSummary />
            <div className="flex justify-between items-center mb-4">
              <select className="select max-w-xs select-sm sm:select-md">
                <option selected>Delivered</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <div className="flex items-center space-x-3">
                <button className="btn btn-primary btn-sm">Payment</button>
                <button className="btn btn-primary btn-sm btn-outline">
                  Refund
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full text-xs md:text-base">
                <thead className="bg-base-200">
                  <tr>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Account Number</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>23 August, 2023</td>
                    <td>Zahid Hasan</td>
                    <td>088171690543</td>
                    <td>Master Card</td>
                  </tr>
                  <tr>
                    <td>23 August, 2023</td>
                    <td>Zahid Hasan</td>
                    <td>088171690543</td>
                    <td>Master Card</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <dialog id="restock_modal" className="modal">
        <div className="modal-box rounded-xl">
          <RiErrorWarningLine size={36} className="mx-auto" color="#FF8200" />
          <div className="flex justify-center py-4 text-base md:text-xl font-semibold text-center">
            <span>Are you sure you want to remove this items?</span>
          </div>
          <div className="py-4 text-center text-sm md:text-base w-full">
            <table className="table w-full text-xs sm:text-sm">
              <thead className="bg-base-200">
                <tr>
                  <td>Item</td>
                  <td>Quantity</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <OrderedBookItem />
                  </td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-3 md:justify-center ">
            <button className="btn btn-primary btn-sm">
              Remove & restock items
            </button>
            <button
              className="btn btn-sm btn-outline"
              onClick={handleRestockModalClose}
            >
              Don't restock, Just remove
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default OrderDetails;
