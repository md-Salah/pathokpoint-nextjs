import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "@/utils/axiosConfig";

type User = {
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  role: string;
  gender: string;
};

type InitialState = {
  user: User | null;
  loading: boolean;
  error: string | null;
  token: string | null;
  isStaff: boolean;
};

const initialState: InitialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
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
      const axiosError = error as AxiosError;
      const errorMessage =
        axiosError.response?.data.detail.message || "An unknown error occurred";
      return rejectWithValue(errorMessage);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('access_token');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isStaff = ["admin", "staff", "super-admin"].includes(
            action.payload.user.role
          );
        }
      )
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
