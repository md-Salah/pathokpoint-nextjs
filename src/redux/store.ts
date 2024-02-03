import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import cartSlice from "./features/cart-slice";
import themeSlice from "./features/theme-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
    theme: themeSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;