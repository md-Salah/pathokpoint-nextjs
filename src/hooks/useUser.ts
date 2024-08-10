import useSWR from 'swr';

import axiosInstance, { extractAxiosErr } from '@/utils/axiosConfig';

const useUser = () => {
  const token =
    typeof window !== "undefined" &&
    localStorage &&
    localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null;

  const fetcher = async (token: string | null) => {
    try {
      if (token) {
        const userResponse = await axiosInstance.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
