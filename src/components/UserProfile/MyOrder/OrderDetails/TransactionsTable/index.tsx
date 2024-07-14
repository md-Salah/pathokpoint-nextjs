import React from "react";

const TransactionsTable = () => {
  return (
    <div className="overflow-x-auto px-7 hidden md:block">
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
  );
};

export default TransactionsTable;
