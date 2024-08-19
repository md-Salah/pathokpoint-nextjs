import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { User } from '@/interface';
import { tokenFromLocalStorage, updateUser } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import axiosInstance from '@/utils/axiosConfig';

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
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const { data, isLoading } = useSWR<User | null, string>(token, fetcher);

  return {
    user: data,
    isLoading,
  };
};

export default useUser;
