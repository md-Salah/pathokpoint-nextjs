import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import OrderedBookItem from "../../OrderedBookItem";

type Props = {
  handleRestockModalClose: () => void;
};

const OrderDetailsRestockModal = ({ handleRestockModalClose }: Props) => {
  return (
    <div className="modal-box rounded-xl p-0">
      <div
        className="flex justify-end cursor-pointer border-b border-b-black06 py-2 px-4"
        onClick={handleRestockModalClose}
      >
        <RxCrossCircled
          size={18}
          className="btn btn-circle btn-sm"
          color="#000000"
        />
      </div>
      <div className="py-6 px-8">
        <RiErrorWarningLine size={36} className="mx-auto" color="#FF8200" />
        <div className="flex justify-center py-4 text-base md:text-xl font-medium text-center">
          <span>Are you sure you want to remove this items?</span>
        </div>
        <div className="py-4 text-center text-sm md:text-base w-full">
          <table className="table w-full text-xs sm:text-sm table-pin-rows">
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
            Don&apos;t restock, Just remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsRestockModal;
