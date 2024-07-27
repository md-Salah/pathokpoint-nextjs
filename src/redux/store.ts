import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/auth-slice";
import cartSlice from "./features/cart-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
