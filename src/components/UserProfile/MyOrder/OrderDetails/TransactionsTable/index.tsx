const TransactionsTable = () => {
  return (
    <div className="bg-white overflow-x-auto p-4 lg:p-7 hidden lg:block">
      <table className="table table-px-0 w-full text-xs md:text-sm text-center">
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
