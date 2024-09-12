"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Book } from '@/interface';
import { addItemToCart } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

interface Props {
  book: Book;
  qty: number;
}

const AddToCart = ({ book, qty }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    setIsAdded(cartItems.some((item) => item.id === book.id));
  }, [cartItems, book.id]);

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...book,
        selectedQuantity: qty,
      })
    );
    setIsAdded(true);
  };

  return (
    <>
      {isAdded ? (
        <Link href="/cart" className="btn btn-error max-w-60 flex-1 h-full">
          View Cart
        </Link>
      ) : (
        <button
          className={`btn btn-primary max-w-60 flex-1 h-full`}
          onClick={handleAddToCart}
          disabled={!book.in_stock || book.quantity === 0}
        >
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCart;
