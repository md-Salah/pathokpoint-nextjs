"use client";
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

import { useToken } from '@/hooks';
import { User } from '@/interface';
import { updateUser } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';
import axiosInstance from '@/utils/axiosConfig';

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useToken();

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
    ([url, token]) => fetcher(url, token)
  );

  return {
    user: data,
    isLoading,
  };
};

export default useUser;
