import { ConditionBadge } from "@/micro-components";
import { truncateWithEllipsis } from "@/utils";
import React from "react";

const BooksTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg px-7 hidden md:flex">
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
                    {truncateWithEllipsis("by Bibhutibushan Bandapaddhay", 16)}
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
  );
};

export default BooksTable;
