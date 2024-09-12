"use client";
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { useToken } from '@/hooks';
import { User } from '@/interface';
import { updateUser } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import axiosInstance from '@/utils/axiosConfig';

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useToken();
  const { user } = useSelector((state: RootState) => state.auth);

  const fetcher = async (url: string, token: string | null | undefined) => {
    try {
      if (token) {
        const userResponse = await axiosInstance.get(url, {
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

  const { data, isLoading }: { data: User | null; isLoading: boolean } = useSWR(
    ["/user/me", token],
    ([url, token]) => fetcher(url, token),
    { revalidateOnFocus: false }
  );

  if (user) {
    return {
      user,
      isLoading: false,
    };
  }

  return {
    user: data,
    isLoading,
  };
};

export default useUser;
