import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

const useToken = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return { token };
};

export default useToken;
