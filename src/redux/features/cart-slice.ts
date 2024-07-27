import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@/interface";

const cartStateFromLocalStorage = () => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("cartState")
  ) {
    return JSON.parse(localStorage.getItem("cartState") as string);
  }
  return initialState;
};

const initialState: CartState = {
  cartItems: [],
  deliveryCharge: 0,
  weightCharge: 0,
  coupon: null,
  discount: 0,
  subTotal: 0,
  grandTotal: 0,
};

const calculateSubTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (acc, item) => acc + item.sale_price * item.selectedQuantity,
    0
  );
};

const calculateGrandTotal = (state: CartState): number => {
  return (
    state.subTotal + state.deliveryCharge + state.weightCharge - state.discount
  );
};

interface CartState {
  cartItems: CartItem[];
  deliveryCharge: number;
  weightCharge: number;
  coupon: string | null;
  discount: number;
  subTotal: number;
  grandTotal: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initCartState: (state) => {
      const cartState = cartStateFromLocalStorage();
      return { ...state, ...cartState };
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item: CartItem) => item.id === newItem.id
      );
      if (existingItem) {
        const newQuantity =
          existingItem.selectedQuantity + newItem.selectedQuantity;
        if (newQuantity >= 0 && newQuantity <= existingItem.quantity) {
          existingItem.selectedQuantity = newQuantity;
        }
      } else {
        state.cartItems.push(newItem);
      }
      state.subTotal = calculateSubTotal(state.cartItems);
      state.grandTotal = calculateGrandTotal(state);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.cartItems.findIndex(
        (item: CartItem) => item.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
      state.subTotal = calculateSubTotal(state.cartItems);
      state.grandTotal = calculateGrandTotal(state);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    clearCart: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("cartState");
    },
    applyCoupon: (state, action: PayloadAction<{ coupon: string }>) => {
      const coupon = action.payload.coupon;
      state.coupon = coupon;
      state.discount = 150;
      state.grandTotal = calculateGrandTotal(state);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
    removeCoupon: (state) => {
      state.coupon = null;
      state.discount = 0;
      state.grandTotal = calculateGrandTotal(state);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  applyCoupon,
  removeCoupon,
  initCartState,
} = cartSlice.actions;
export default cartSlice.reducer;
