"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

import { initCartState } from '@/redux/features/cart-slice';
import { AppDispatch, RootState } from '@/redux/store';

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cartItems, subTotal } = useSelector((state: RootState) => state.cart);
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeDropdown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("click outside");
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [isOpen]);

  useEffect(() => {
    dispatch(initCartState());
  }, [dispatch]);

  return (
    <div className="dropdown dropdown-end dropdown-open">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle btn-sm sm:btn-md text-black02 hover:bg-primary hover:text-white"
        onClick={toggleDropdown}
      >
        <div className="indicator">
          <CiShoppingCart className="w-7 h-7" />
          {cartItems.length > 0 && (
            <span className="indicator-item rounded-full bg-highlight text-white px-1 font-bn text-xs">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div
          ref={ref}
          className="card card-compact dropdown-content w-52 bg-white shadow mt-1"
        >
          <div className="card-body">
            <span className="font-bold text-lg">{cartItems.length} Items</span>
            <span className="text-info">Subtotal: {subTotal}Tk</span>
            <div className="card-actions">
              <Link
                href="/cart"
                className="btn btn-primary btn-block"
                onClick={toggleDropdown}
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
