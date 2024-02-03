import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage =
  typeof localStorage !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [];

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: Item[];
}

const initialState: CartState = {
  cartItems: cartFromLocalStorage,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<any>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    applyCoupon: (state, action: PayloadAction<{ coupon: string }>) => {
      const coupon = action.payload.coupon;
      const couponList = ["DISCOUNT", "OFFER", "SALE"];
      if (couponList.includes(coupon)) {
        state.cartItems.forEach((item) => {
          item.price = item.price - item.price * 0.1;
        });
      } else {
        alert("Invalid Coupon");
      }
    },
    removeCoupon: (state) => {
      state.cartItems.forEach((item) => {
        item.price = item.price + item.price * 0.1;
      });
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  applyCoupon,
  removeCoupon,
} = cartSlice.actions;
export default cartSlice.reducer;
