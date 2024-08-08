import axiosInstance, { extractAxiosErr } from "@/utils/axiosConfig";
import useSWR from "swr";

const useUser = (url: string) => {
  const fetcher = async (url: string) => {
    try {
      const token =
        localStorage && localStorage.getItem("access_token")
          ? localStorage.getItem("access_token")
          : null;
      if (token) {
        const userResponse = await axiosInstance.get(url, {
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

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    user: data,
    isLoading,
    error,
  };
};

export default useUser;
