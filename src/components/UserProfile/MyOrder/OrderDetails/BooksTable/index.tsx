import { books } from "@/constants";
import TableRow from "./TableRow";

const BooksTable = () => {
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
          {books.slice(0, 5).map((book) => (
            <TableRow key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
