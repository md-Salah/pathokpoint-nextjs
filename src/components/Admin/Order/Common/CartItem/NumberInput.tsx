"use client";
import { HiMinus, HiPlus } from 'react-icons/hi2';

import { CartItem } from '@/interface';

interface Props {
  book: CartItem;
  handleIncrement: (id: string) => void;
  handleDecrement: (id: string) => void;
}

const NumberInput = (props: Props) => {
  const { book, handleIncrement, handleDecrement } = props;

  return (
    <div className="flex items-center justify-end">
      <button
        onClick={() => handleDecrement(book.id)}
        className={`btn btn-xs bg-black07 rounded ${
          book.selectedQuantity === 1 && "btn-disabled"
        } w-[30px] h-[30px] `}
      >
        <HiMinus className="min-w-3 min-h-3" />
      </button>
      <input
        type="text"
        className={`text-center bg-black07 rounded text-xs w-[42px] h-[30px] mx-1`}
        value={book.selectedQuantity}
        readOnly
      />
      <button
        onClick={() => handleIncrement(book.id)}
        className={`btn btn-xs bg-black07 rounded ${
          book.selectedQuantity >= book.quantity && "btn-disabled"
        } w-[30px] h-[30px] `}
      >
        <HiPlus className="min-w-3 min-h-3" />
      </button>
    </div>
  );
};

export default NumberInput;
