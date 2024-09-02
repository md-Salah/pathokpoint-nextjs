"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tokenFromLocalStorage } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';

const useToken = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token === undefined) {
      dispatch(tokenFromLocalStorage());
    }
  }, []);

  return { token };
};

export default useToken;
