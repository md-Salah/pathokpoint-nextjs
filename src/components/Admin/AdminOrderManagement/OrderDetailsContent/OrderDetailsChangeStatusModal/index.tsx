import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  handleChangeStatusModalClose: () => void;
};

const OrderDetailsChangeStatusModal = ({
  handleChangeStatusModalClose,
}: Props) => {
  return (
    <div className="modal-box rounded-xl p-0">
      <div
        className="flex justify-end cursor-pointer border-b border-b-black06 py-2 px-4"
        onClick={handleChangeStatusModalClose}
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
        <div className="flex justify-center py-4 text-xs md:text-sm font-normal text-center">
          <span>Change status to Cancelled</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-sm px-8 btn-primary">Yes</button>
          <button
            className="btn btn-sm btn-outline px-8"
            onClick={handleChangeStatusModalClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsChangeStatusModal;
