"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useToken } from '@/hooks';
import { updateUser } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import axiosInstance from '@/utils/axiosConfig';

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useToken();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        dispatch(updateUser(null));
        setIsLoading(false);
        return;
      }
  
      try {
        const userResponse = await axiosInstance.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(updateUser(userResponse.data));
      } catch (error) {
        dispatch(updateUser(null)); 
      } finally {
        setIsLoading(false); 
      }
    };
  
    fetchUser(); 
  }, [token, dispatch]);
  
  return {
    user: user,
    isLoading: isLoading,
  };
};

export default useUser;
