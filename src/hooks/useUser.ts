import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { tokenFromLocalStorage, updateUser } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  let { token } = useSelector((state: RootState) => state.auth);
  if (!token) {
    dispatch(tokenFromLocalStorage());
  }

  const fetcher = async (token: string | null) => {
    try {
      if (token) {
        const userResponse = await axiosInstance.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(updateUser(userResponse.data));
        return userResponse.data;
      } else {
        throw new Error("User not found. Please login again.");
      }
    } catch (error) {
      const msg = extractAxiosErr(error);
      throw new Error(msg);
    }
  };

  const { data, error, isLoading } = useSWR(token, fetcher);

  return {
    user: data,
    isLoading,
    error,
  };
};

export default useUser;
