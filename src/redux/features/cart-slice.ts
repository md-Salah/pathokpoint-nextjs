import { CartItem } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const cartStateFromLocalStorage = () => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("cartState")
  ) {
    return JSON.parse(localStorage.getItem("cartState") as string);
  }
  return initialState;
};

const initialDeliveryCharge = 60;

const initialState: CartState = {
  cartItems: [],
  deliveryCharge: initialDeliveryCharge,
  weightCharge: 0,
  coupon: null,
  discount: 0,
  subTotal: 0,
  grandTotal: 0,
  isLoading: false,
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
  isLoading: boolean;
}

export const applyCoupon = createAsyncThunk(
  "cart/applyCoupon",
  async (coupon: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { cart: CartState };
      const response = await axiosInstance.post("/cart/apply-coupon", {
        coupon_code: coupon,
        order_items: state.cart.cartItems.map((item: CartItem) => ({
          book_id: item.id,
          quantity: item.selectedQuantity,
        })),
      });
      return {
        coupon: coupon,
        ...response.data,
      };
    } catch (error) {
      return rejectWithValue(extractAxiosErr(error));
    }
  }
);

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
    removeCoupon: (state) => {
      state.coupon = null;
      state.discount = 0;
      state.deliveryCharge = initialDeliveryCharge;
      state.isLoading = false;
      state.grandTotal = calculateGrandTotal(state);
      localStorage.setItem("cartState", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      applyCoupon.fulfilled,
      (
        state,
        action: PayloadAction<{
          coupon: string;
          discount: number;
          shipping_charge: number;
        }>
      ) => {
        state.coupon = action.payload.coupon;
        state.discount = action.payload.discount;
        if (action.payload.shipping_charge !== -1)
          state.deliveryCharge = action.payload.shipping_charge;
        state.grandTotal = calculateGrandTotal(state);
        localStorage.setItem("cartState", JSON.stringify(state));
      }
    );
    builder.addCase(applyCoupon.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(applyCoupon.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  removeCoupon,
  initCartState,
} = cartSlice.actions;
export default cartSlice.reducer;
