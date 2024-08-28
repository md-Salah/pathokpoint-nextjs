import { Address, CartItem, TransactionForRequest as Transaction } from '@/interface';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';
import { validateAddress, verifyStock } from '@/utils/validate';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './auth-slice';

const initialDeliveryCharge = 0;

interface CartState {
  cartItems: CartItem[];
  deliveryCharge: number;
  weightCharge: number;
  coupon: string | null;
  discount: number;
  subTotal: number;
  grandTotal: number;
  err: string | null;
  isLoading: boolean;
  shippingRequired: boolean;
  address: Address;
  customerNote: string;
  isCashOnDelivery: boolean;
  courierId: string | null;
  transactions: Transaction[];
  paid: number;
}

const initialState: CartState = {
  cartItems: [],
  deliveryCharge: 0,
  weightCharge: 0,
  coupon: null,
  discount: 0,
  subTotal: 0,
  grandTotal: 0,
  err: null,
  isLoading: false,
  shippingRequired: false,
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
  courierId: null,
  transactions: [],
  paid: 0,
};

export const applyCoupon = createAsyncThunk(
  "admin-cart/applyCoupon",
  async (coupon: string, { getState, rejectWithValue }) => {
    try {
      const { adminCart: cart, auth } = getState() as {
        adminCart: CartState;
        auth: AuthState;
      };
      const response = await axiosInstance.post(
        "/cart/apply-coupon",
        {
          coupon_code: coupon,
          order_items: cart.cartItems.map((item: CartItem) => ({
            book_id: item.id,
            quantity: item.selectedQuantity,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
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
  "admin-cart/placeOrder",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { adminCart: cart, auth } = getState() as {
        adminCart: CartState;
        auth: AuthState;
      };

      // validation
      if (auth.token === null)
        return rejectWithValue("Please login to place an order");

      if (cart.cartItems.length === 0)
        return rejectWithValue("Your cart is empty, please add some items");

      const stockErr = await verifyStock(cart.cartItems);
      if (stockErr) return rejectWithValue(stockErr);

      if (cart.shippingRequired) {
        const addressErr = validateAddress(cart.address);
        if (addressErr) return rejectWithValue(addressErr);

        if (!cart.courierId)
          return rejectWithValue("Please select a shipping method");
      }

      const payload = {
        order_items: cart.cartItems.map((item: CartItem) => ({
          book_id: item.id,
          quantity: item.selectedQuantity,
        })),
        address: cart.shippingRequired
          ? {
              ...cart.address,
              email: cart.address.email?.trim() || null,
              phone_number: `+88${cart.address.phone_number}`,
            }
          : null,
        courier_id: cart.shippingRequired ? cart.courierId : null,
        customer_note: cart.customerNote,
        is_full_paid: !cart.isCashOnDelivery,
        coupon_code: cart.coupon,
        transactions: cart.transactions,
      };

      console.log("order payload:", payload);
      const response = await axiosInstance.post("/order/admin/new", payload, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(extractAxiosErr(error));
    }
  }
);

export const selectCourier = createAsyncThunk(
  "admin-cart/selectCourier",
  async (courierId: string, { getState, rejectWithValue }) => {
    const { adminCart: cart } = getState() as { adminCart: CartState };

    const addressErr = validateAddress(cart.address);
    if (addressErr) {
      return rejectWithValue(addressErr);
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
      is_full_paid: !cart.isCashOnDelivery,
      courier_id: courierId,
      coupon_code: cart.coupon,
      payment_method: "bal_on_delivery",
    };

    try {
      const response = await axiosInstance.post("/checkout/summary", payload);
      return { ...response.data, courier_id: courierId };
    } catch (error) {
      return rejectWithValue(extractAxiosErr(error));
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.cartItems.findIndex(
        (item: CartItem) => item.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
      state.subTotal = calculateSubTotal(state.cartItems);
      state.grandTotal = calculateGrandTotal(state);
    },
    handleIncrement: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.selectedQuantity < item.quantity) {
        item.selectedQuantity += 1;
        state.subTotal = calculateSubTotal(state.cartItems);
        state.grandTotal = calculateGrandTotal(state);
      }
    },
    handleDecrement: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        if (item.selectedQuantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          item.selectedQuantity -= 1;
        }
        state.subTotal = calculateSubTotal(state.cartItems);
        state.grandTotal = calculateGrandTotal(state);
      }
    },
    clearCart: (state) => {
      Object.assign(state, initialState);
    },
    removeCoupon: (state) => {
      state.coupon = null;
      state.discount = 0;
      state.deliveryCharge = initialDeliveryCharge;
      state.isLoading = false;
      state.grandTotal = calculateGrandTotal(state);
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      state.address = action.payload;
    },
    updateCustomerNote: (state, action: PayloadAction<string>) => {
      state.customerNote = action.payload;
    },
    toggleCashOnDelivery: (state) => {
      state.isCashOnDelivery = !state.isCashOnDelivery;
    },
    toggleShippingRequired: (state) => {
      state.shippingRequired = !state.shippingRequired;
      if (!state.shippingRequired) {
        state.deliveryCharge = 0;
        state.weightCharge = 0;
        state.subTotal = calculateSubTotal(state.cartItems);
        state.grandTotal = calculateGrandTotal(state);
        state.courierId = null;
      }
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload as Transaction);
      state.paid = calculatePaid(state.transactions);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      const index = state.transactions.findIndex(
        (item: Transaction) => item.transaction_id === action.payload
      );
      state.transactions.splice(index, 1);
      state.paid = calculatePaid(state.transactions);
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
      }
    );
    builder.addCase(placeOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      Object.assign(state, initialState);
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.payload as string;
      console.log("order rejected", action.payload);
    });
    builder.addCase(selectCourier.fulfilled, (state, action) => {
      state.courierId = action.payload.courier_id;
      state.deliveryCharge = action.payload.shipping_charge;
      state.weightCharge = action.payload.weight_charge;
      state.subTotal = action.payload.sub_total;
      state.grandTotal = calculateGrandTotal(state);
    });
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  handleIncrement,
  handleDecrement,
  clearCart,
  removeCoupon,
  updateAddress,
  updateCustomerNote,
  toggleCashOnDelivery,
  toggleShippingRequired,
  addTransaction,
  removeTransaction,
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

const calculatePaid = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, item) => acc + item.amount, 0);
};
