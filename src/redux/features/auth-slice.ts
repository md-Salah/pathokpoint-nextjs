import { User } from '@/interface';
import axios, { extractAxiosErr } from '@/utils/axiosConfig';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  user: User | null;
  loading: boolean;
  token: string | null;
  isStaff: boolean;
}

const initialState: InitialState = {
  user: null,
  loading: false,
  token: null,
  isStaff: false,
};

// export const initializeAuth = createAsyncThunk(
//   "auth/initializeAuth",
//   async (_, { rejectWithValue }) => {
//     try {
//       const token =
//         localStorage && localStorage.getItem("access_token")
//           ? localStorage.getItem("access_token")
//           : null;
//       if (token) {
//         const userResponse = await axios.get("/user/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         return {
//           token,
//           user: userResponse.data,
//         };
//       }
//       return { token: null, user: null };
//     } catch (error) {
//       // console.error("Failed to initialize auth", error);
//       return rejectWithValue("Failed to initialize auth");
//     }
//   }
// );

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

const isStaff = (role: string) =>
  ["admin", "staff", "super-admin"].includes(role);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("access_token");
      return initialState;
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
      })
      // .addCase(
      //   initializeAuth.fulfilled,
      //   (
      //     state,
      //     action: PayloadAction<{
      //       token: string | null;
      //       user: User | null;
      //     }>
      //   ) => {
      //     state.token = action.payload.token;
      //     state.user = action.payload.user;
      //     state.isStaff = action.payload.user
      //       ? isStaff(action.payload.user.role)
      //       : false;
      //   }
      // );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
export type { InitialState as AuthState };