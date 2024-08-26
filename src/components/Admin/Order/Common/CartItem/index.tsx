import { FaRegTrashCan } from 'react-icons/fa6';

import { CartItem as CartItemInterface } from '@/interface';

import NumberInput from './NumberInput';
import ProductDetails from './ProductDetails';

interface Props {
  book: CartItemInterface;
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
  handleRemove: (id: string) => void;
}

const CartItem = (props: Props) => {
  const { book, handleRemove } = props;

  return (
    <tr>
      <td>
        <ProductDetails book={book} />
      </td>
      <td>
        <div className="flex flex-col lg:flex-row md:justify-between gap-4">
          <div className="flex lg:flex-col items-baseline justify-end lg:justify-center gap-1">
            <span className="block text-sm">৳{book.sale_price}</span>
            {book.sale_price < book.regular_price && (
              <span className="line-through text-xs text-black04">
                ৳{book.regular_price}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <NumberInput {...props} />
            <div className="flex items-center justify-end gap-5 lg:gap-7">
              <div className="font-semibold text-primary">
                ৳{book.sale_price * book.selectedQuantity}
              </div>
              <FaRegTrashCan
                className="w-4 h-4 cursor-pointer"
                onClick={() => handleRemove(book.id)}
              />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
