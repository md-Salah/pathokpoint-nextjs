"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Book } from '@/interface';
import { addItemToCart } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const AddToCart = ({ book }: { book: Book }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [isAdded, setIsAdded] = useState<boolean>(
    cartItems.some((item) => item.id === book.id)
  );

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
          disabled={!book.in_stock}
        >
          {book.in_stock ? "Add to cart" : "Out of stock"}
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
