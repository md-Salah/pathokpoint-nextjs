"use client";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

import {
  BookCard,
  Carousel,
  CartItem,
  CartSummary,
  PromoCode,
} from "@/components";
import { books } from "@/constants";
import { useState } from "react";
import { CartItem as ItemType } from "@/interface";

const Cart = () => {
  const router = useRouter();
  const bookInCart = books.map((book) => ({ ...book, count: 1 }));
  const [items, setItems] = useState<ItemType[]>(bookInCart);
  const [discount, setDiscount] = useState<number>(0);

  const handleCheckoutClick = () => {
    router.push("/checkout");
  };

  const handleCountChange = (id: string, count: number) => {
    const newItems = items.map((item) => {
      if (item.id === id && count <= item.quantity) {
        return { ...item, count };
      }
      return item;
    });
    setItems(newItems);
  };

  const removeItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <div className="layout-container layout-mt">
        <div className="flex flex-col md:flex-row gap-2.5">
          <div className="flex flex-1">
            <div className="bg-white w-full layout-p">
              <h1 className="font-semibold text-base sm:text-xl">My Cart</h1>

              <div className="mt-8 overflow-scroll">
                <table className="table table-px-0 border-t">
                  <tbody>
                    {items.map((item) => (
                      <CartItem
                        key={item.id}
                        book={item}
                        handleCountChange={handleCountChange}
                        removeItem={removeItem}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white w-full md:w-64 lg:w-80 layout-p">
            <h1 className="font-semibold text-xl">Order Summary</h1>
            <CartSummary items={items} discount={discount} />

            <PromoCode discount={discount} setDiscount={setDiscount} />

            <button
              className="mt-12 btn btn-primary w-full"
              onClick={handleCheckoutClick}
            >
              Checkout
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Carousel title="Books you may love">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>
    </div>
  );
};

export default Cart;
