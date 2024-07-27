"use client";
import { AppDispatch } from "@/redux/store";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { useDispatch } from "react-redux";

import { CartItem } from "@/interface";
import { addItemToCart } from "@/redux/features/cart-slice";

const NumberInput = ({ book }: { book: CartItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleIncrement = () => {
    dispatch(addItemToCart({ ...book, selectedQuantity: 1 }));
  };

  const handleDecrement = () => {
    dispatch(addItemToCart({ ...book, selectedQuantity: -1 }));
  };

  return (
    <div className="flex items-center justify-end">
      <button
        onClick={handleDecrement}
        className={`btn btn-xs bg-black07 rounded ${
          book.selectedQuantity === 0 && "btn-disabled"
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
        onClick={handleIncrement}
        className={`btn btn-xs bg-black07 rounded ${
          book.selectedQuantity === book.quantity && "btn-disabled"
        } w-[30px] h-[30px] `}
      >
        <HiPlus className="min-w-3 min-h-3" />
      </button>
    </div>
  );
};

export default NumberInput;
