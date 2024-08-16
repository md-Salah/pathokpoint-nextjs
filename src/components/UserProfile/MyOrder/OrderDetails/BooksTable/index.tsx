import { OrderItem } from '@/interface';

import TableRow from './TableRow';

const BooksTable = ({ order_items }: { order_items: OrderItem[] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg p-7">
      <table className="table table-px-0">
        <thead>
          <tr>
            <th>PRODUCT DETAILS</th>
            <th>UNIT PRICE</th>
            <th>DISCOUNT PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {order_items.map((item: OrderItem, index: number) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
