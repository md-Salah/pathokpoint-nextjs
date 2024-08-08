"use client";
import { useRouter } from "next/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useEffect, useState } from "react";

import { BookCard, Carousel } from "@/components";
import { Book, CartItem as CartItemType } from "@/interface";
import { RootState } from "@/redux/store";
import { fetcher } from "@/utils/axiosConfig";

import PromoCode from "./PromoCode";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";

const Cart = () => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const authorSlugs = cartItems.map((item) => item.authors[0]?.slug).join(",");
  const { data, isLoading } = useSWR(
    `/book/all?page=1&per_page=20&author__slug__in=${authorSlugs}`,
    fetcher
  );
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (data) {
      const suggested = data.filter(
        (book: Book) =>
          !cartItems.some((item: CartItemType) => item.id === book.id)
      );
      setSuggestedBooks(suggested);
    }
  }, [data, cartItems]);

  const handleCheckoutClick = () => {
    router.push("/checkout");
  };

  return (
    <div>
      <div className="layout-container layout-mt">
        <div className="flex flex-col md:flex-row gap-2.5">
          <div className="flex flex-1">
            <div className="bg-white w-full layout-p">
              <h1 className="font-semibold sm:text-lg md:text-xl">My cart</h1>

              {cartItems.length > 0 ? (
                <div className="mt-3 sm:mt-5 md:mt-6 lg:mt-8 overflow-scroll">
                  <table className="table table-px-0 border-t">
                    <tbody>
                      {cartItems.map((item: CartItemType) => (
                        <CartItem key={item.id} book={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="my-10 flex flex-col items-center">
                  <h4 className="text-center font-bold">Your cart is empty!</h4>
                  <h6 className="text-center text-xs mt-2">
                    add items on the cart before you proceed to checkout
                  </h6>
                  <Link href="/" className="mt-4 btn btn-primary btn-sm">
                    <BsArrowLeft className="inline-block" />
                    RETURN TO SHOP
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="bg-white w-full md:w-64 lg:w-80 layout-p">
              <h1 className="font-semibold sm:text-lg md:text-xl">
                Order summary
              </h1>
              <CartSummary />
              <PromoCode />
              <button
                className="mt-12 btn btn-primary w-full"
                onClick={handleCheckoutClick}
              >
                Checkout
                <BsArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {suggestedBooks.length > 0 && (
        <Carousel title="Books you may love" isLoading={isLoading}>
          {suggestedBooks.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Cart;
