import { ConditionBadge } from "@/micro-components";
import { truncateWithEllipsis } from "@/utils";
import React from "react";

const OrderDetails = () => {
  return (
    <div className="bg-white w-full h-screen rounded-lg flex flex-col space-y-14">
      <div className="border-b border-black06 py-4 px-7 flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <div className="text-base flex items-center space-x-1">
            <span className="text-[#2B2B2B]">Order ID</span>
            <span className="text-primary font-bold">#A125452</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
              <span>Oct 11, 2023</span>
            </div>
            <div className="bg-black07 text-xxs text-black02 py-[3px] px-2 rounded-lg w-fit">
              <span>11:45 PM</span>
            </div>
          </div>
        </div>
        <button className="btn btn-outline btn-sm btn-primary px-4">
          Flexible Payment
        </button>
      </div>
      <div>
        <ul className="steps w-full">
          <li className="step step-success ">
            <div className="flex flex-col items-center">
              <span className="text-black02 text-sm">Register</span>
              <span className="text-black04 text-xxs">26 Jan 2024, 16:14</span>
            </div>
          </li>
          <li className="step">
            <span className="text-black04 text-sm">Choose plan</span>
          </li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg px-7">
        <table className="table">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Unit Price</th>
              <th>Discount Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-start space-x-2 h-fit">
                  <div className="w-12 bg-white border-[#E6E6E6]">
                    <img
                      src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm md:text-base font-semibold text-black02">
                      Pather Panchali
                    </span>
                    <span className="text-xxs md:text-xs text-black04">
                      {truncateWithEllipsis(
                        "by Bibhutibushan Bandapaddhay",
                        16
                      )}
                    </span>
                    <ConditionBadge condition="Old-like-New" />
                  </div>
                </div>
              </td>
              <td>
                <span className="text-sm text-black02">$250</span>
              </td>
              <td>
                <span className="text-sm text-black02">$250</span>
              </td>
              <td>
                <span className="text-sm text-black02">1x</span>
              </td>
              <td>
                <span className="text-sm text-black02">$250</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-7 flex items-start justify-between">
        <div className="space-y-4">
          <div className="flex flex-col space-y-4 text-[#2B2B2B] pb-4 border-b-[2px] border-b-[#F4F4F4]">
            <h2 className="text-base font-bold">Delivery Details</h2>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Sarder Arif Ahmed</span>
              <span className="text-xs">rayhantanvir 03@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-[#2B2B2B] text-xs pb-4 border-b-[2px] border-b-[#F4F4F4]">
            <span className="font-bold">Address</span>
            <span>Matikata 72/A Dhaka cantonment Dhaka-1216, Bangladesh</span>
          </div>
          <div className="flex flex-col space-y-1 text-[#2B2B2B] text-xs w-[20%]">
            <span className="font-bold">Contact</span>
            <span>01686256267</span>
          </div>
        </div>
        <div className="space-y-4 w-[30%]">
          <h2 className="text-base font-bold">Order Summary</h2>
          <div className="w-full flex flex-col items-end text-black02 text-sm">
            <ul className="space-y-4 w-full">
              <li className="flex items-center justify-between">
                <span>Sub Total:</span>
                <span>৳1300</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Discount(10%):</span>
                <span>-৳200</span>
              </li>
              <li className="flex items-center justify-between border-b-[2px] border-b-[#F4F4F4] pb-4">
                <span>Shipping Cost:</span>
                <span>৳100</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-bold">Grand Total:</span>
                <span>৳1200</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Paid:</span>
                <span>৳1200</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Due:</span>
                <span>৳0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-7">
        <table className="table w-full text-xs md:text-sm">
          <thead className="bg-base-200">
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23 August, 2023</td>
              <td>PP10789560</td>
              <td>৳1300</td>
              <td>Master Card</td>
            </tr>
            <tr>
              <td>23 August, 2023</td>
              <td>PP10789560</td>
              <td>৳1300</td>
              <td>Master Card</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
