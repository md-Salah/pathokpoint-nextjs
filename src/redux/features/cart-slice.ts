import { Address, CartItem } from '@/interface';
import { isEmail, isPhoneNumber } from '@/utils';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './auth-slice';

const initialDeliveryCharge = 60;

interface CartState {
  cartItems: CartItem[];
  deliveryCharge: number;
  weightCharge: number;
  coupon: string | null;
  discount: number;
  subTotal: number;
  grandTotal: number;
  isLoading: boolean;
  termsAggreed: boolean;
  address: Address;
  customerNote: string;
  isCashOnDelivery: boolean;
  paymentMethod: string | null;
  courierId: string | null;
}

const initialState: CartState = {
  cartItems: [],
  deliveryCharge: initialDeliveryCharge,
  weightCharge: 0,
  coupon: null,
  discount: 0,
  subTotal: 0,
  grandTotal: 0,
  isLoading: false,
  termsAggreed: false,
  address: {
    id: "",
    name: "",
    email: "",
    phone_number: "",
    alternative_phone_number: null,
    address: "",
    thana: "",
    city: "",
    country: "BD",
  },
  customerNote: "",
  isCashOnDelivery: false,
  paymentMethod: null,
  courierId: null,
};

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

export const placeOrder = createAsyncThunk(
  "cart/placeOrder",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { cart, auth } = getState() as { cart: CartState; auth: AuthState };
      // validation
      if (!cart.termsAggreed) {
        return rejectWithValue({
          message: "Please accept the terms and conditions",
        });
      } else if (!cart.address.name.trim()) {
        return rejectWithValue("Please provide your name");
      } else if (!cart.address.phone_number.trim()) {
        return rejectWithValue("Please provide your phone number");
      } else if (!isPhoneNumber(cart.address.phone_number)) {
        return rejectWithValue("Invalid phone number");
      } else if (cart.address.email && !isEmail(cart.address.email)) {
        return rejectWithValue("Invalid email address");
      } else if (!cart.address.address.trim()) {
        return rejectWithValue("Please provide shipping address");
      } else if (!cart.address.thana.trim()) {
        return rejectWithValue("Please provide your thana");
      } else if (!cart.address.city.trim()) {
        return rejectWithValue("Please select your district");
      } else if (!cart.paymentMethod) {
        return rejectWithValue("Please select a payment method");
      } else if (!cart.courierId) {
        return rejectWithValue("Please select a shipping method");
      } else if (cart.cartItems.length === 0) {
        return rejectWithValue("Your cart is empty, please add some items");
      }
      const payload = {
        order_items: cart.cartItems.map((item: CartItem) => ({
          book_id: item.id,
          quantity: item.selectedQuantity,
        })),
        address: {
          ...cart.address,
          email: cart.address.email?.trim() || null,
          phone_number: `+88${cart.address.phone_number}`,
        },
        customer_note: cart.customerNote,
        is_full_paid: !cart.isCashOnDelivery,
        courier_id: cart.courierId,
        coupon_code: cart.coupon,
        payment_method: cart.paymentMethod,
      };
      const response = await axiosInstance.post("/order/new", payload, {
        headers: {
          Authorization: `Bearer ${auth.token ? auth.token : ""}`,
        },
      });
      return response.data;
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
    updateAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    updateCustomerNote: (state, action: PayloadAction<string>) => {
      state.customerNote = action.payload;
    },
    selectCourier: (state, action) => {
      state.courierId = action.payload.id;
      state.deliveryCharge = action.payload.baseCharge;
      state.weightCharge = action.payload.weightChargePerKg;
      state.grandTotal = calculateGrandTotal(state);
    },
    toggleTermsAggreed: (state) => {
      state.termsAggreed = !state.termsAggreed;
    },
    toggleCashOnDelivery: (state) => {
      state.isCashOnDelivery = !state.isCashOnDelivery;
    },
    selectPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
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
    builder.addCase(placeOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(placeOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  removeCoupon,
  initCartState,
  updateAddress,
  updateCustomerNote,
  selectCourier,
  toggleTermsAggreed,
  toggleCashOnDelivery,
  selectPaymentMethod,
} = cartSlice.actions;
export default cartSlice.reducer;

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

const cartStateFromLocalStorage = () => {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("cartState")
  ) {
    return JSON.parse(localStorage.getItem("cartState") as string);
  }
  return initialState;
};
