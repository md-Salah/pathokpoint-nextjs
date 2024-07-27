"use client";

import { Book } from "@/interface";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cart-slice";
import { useState } from "react";
import Link from "next/link";

const AddToCart = ({ book }: { book: Book }) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...book,
        selectedQuantity: 1,
      })
    );
    setIsAdded(true);
  };
  return (
    <>
      {!isAdded ? (
        <button
          className="btn btn-primary btn-sm flex-1 text-xs md:text-sm lg:text-base font-bold h-8 md:h-9"
          onClick={handleAddToCart}
          disabled={book.quantity === 0}
        >
          {book.quantity === 0 ? "Out of stock" : "Add to cart"}
        </button>
      ) : (
        <Link
          href="/cart"
          className="btn btn-error btn-sm flex-1 text-xs md:text-sm lg:text-base font-bold h-8 md:h-9"
        >
          View cart
        </Link>
      )}
    </>
  );
};

export default AddToCart;
