import { User } from '@/interface';
import { isStaff } from '@/utils';
import axios, { extractAxiosErr } from '@/utils/axiosConfig';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  user: User | null;
  loading: boolean;
  token: string | null | undefined;
  isStaff: boolean;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  token: undefined,
  isStaff: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/auth/token", credentials, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const token = response.data.access_token;
      localStorage.setItem("access_token", token);

      const userResponse = await axios.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { token, user: userResponse.data };
    } catch (error) {
      return rejectWithValue(extractAxiosErr(error));
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("access_token");
      return initialState;
    },
    tokenFromLocalStorage: (state) => {
      state.token =
        typeof window !== "undefined" &&
        localStorage &&
        localStorage.getItem("access_token")
          ? localStorage.getItem("access_token")
          : null;
    },
    updateUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isStaff = action.payload ? isStaff(action.payload.role) : false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isStaff = isStaff(action.payload.user.role);
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
      });
  },
});

export const { logout, tokenFromLocalStorage, updateUser } = authSlice.actions;
export default authSlice.reducer;
export type { InitialState as AuthState };
