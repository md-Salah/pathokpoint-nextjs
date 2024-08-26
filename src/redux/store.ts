import { configureStore } from '@reduxjs/toolkit';

import adminCartSlice from './features/admin-cart-slice';
import authSlice from './features/auth-slice';
import cartSlice from './features/cart-slice';
import searchSlice from './features/search-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    search: searchSlice,
    adminCart: adminCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
