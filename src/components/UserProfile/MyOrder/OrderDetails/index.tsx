import { ConditionBadge } from "@/micro-components";
import { truncateWithEllipsis } from "@/utils";
import React from "react";
import BooksTable from "./BooksTable";
import DeliveryDetailsSummary from "./DeliveryDetailsSummary";
import TransactionsTable from "./TransactionsTable";
import ProgressTracker from "./ProgressTracker";
import BookItemMobile from "./BookItemMobile";
import PaymentItem from "./PaymentItem";

const OrderDetails = () => {
  return (
    <div className="md:bg-white bg-none w-full  overflow-y-auto md:overflow-y-hidden rounded-lg flex flex-col space-y-0 md:space-y-14 my-10">
      <div className="bg-white md:bg-none ">
        <div className="border-b border-black06 py-4 mx-5 md:mx-0 md:px-7 flex items-center justify-between">
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
        <ProgressTracker />
        <div className="flex flex-col space-y-4 p-5 md:hidden">
          <BookItemMobile />
          <BookItemMobile />
          <BookItemMobile />
          <BookItemMobile />
          <BookItemMobile />
        </div>
      </div>
      <BooksTable />
      <DeliveryDetailsSummary />
      <div className="bg-white md:hidden p-5 mt-10 flex flex-col space-y-4">
        <div className="text-base font-bold text-black02">
          <h2>Payment Info</h2>
        </div>
        <div className="space-y-10 py-5">
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
          <PaymentItem />
        </div>
      </div>
      <TransactionsTable />
    </div>
  );
};

export default OrderDetails;
