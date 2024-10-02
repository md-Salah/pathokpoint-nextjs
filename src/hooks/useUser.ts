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
    console.log('useUser hook, useEffect')
    const fetchUser = async () => {
      if (!token) {
        dispatch(updateUser(null));
        setIsLoading(false);
        return;
      }
  
      try {
        console.log("Fetching user.");
        const userResponse = await axiosInstance.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log("User data:", userResponse.data);
        dispatch(updateUser(userResponse.data));
      } catch (error) {
        console.debug("Error fetching user:", error);
        dispatch(updateUser(null)); 
      } finally {
        setIsLoading(false); 
      }
    };
  
    fetchUser(); 
  }, [token, dispatch]);
  
  
  

  // const { data, isLoading }: { data: User | null; isLoading: boolean } = useSWR(
  //   ["/user/me", token],
  //   ([url, token]) => fetcher(url, token),
  //   { revalidateOnFocus: false }
  // );

  return {
    user: user,
    isLoading: isLoading,
  };
};

export default useUser;
