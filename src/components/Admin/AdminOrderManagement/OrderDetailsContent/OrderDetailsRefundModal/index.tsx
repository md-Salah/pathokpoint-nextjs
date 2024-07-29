import React from "react";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  handleRefundModalClose: () => void;
};

const OrderDetailsRefundModal = ({ handleRefundModalClose }: Props) => {
  return (
    <div className="modal-box rounded-xl p-0 bg-white">
      <div
        className="flex justify-end cursor-pointer border-b border-b-black06 py-2 px-4"
        onClick={handleRefundModalClose}
      >
        <RxCrossCircled
          size={18}
          className="btn btn-circle btn-sm"
          color="#000000"
        />
      </div>
      <div className="py-6 px-8">
        <div className="text-xl font-medium flex justify-start pb-6">
          <h4>Refund</h4>
        </div>
        <div className="space-y-4 pb-6">
          <div className="flex flex-col items-start space-y-2">
            <label>Refund Amount</label>
            <input type="number" className="input rounded-lg input-md w-full" />
          </div>
          <div className="space-y-2">
            <label>Refund Reason</label>
            <div className="relative w-full">
              <textarea
                className="textarea textarea-sm sm:textarea-lg w-full relative z-0"
                placeholder="Enter Short Description"
              ></textarea>
              <span className="absolute right-2 bottom-2 z-20 text-xs">
                0/150 Words
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-end">
          <button
            className="btn btn-sm btn-outline btn-black05 sm:px-5 rounded-lg"
            onClick={handleRefundModalClose}
          >
            Cancel
          </button>
          <button className="btn btn-sm btn-primary text-white sm:px-8 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsRefundModal;
