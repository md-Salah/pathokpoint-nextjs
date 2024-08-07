import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const extractAxiosErr = (error: any) => {
  const axiosError = error as AxiosError;
  const msg =
    axiosError.response?.data.detail.message || "An unknown error occurred";
  if (msg === "An unknown error occurred") {
    console.error("Unknown error details:", error);
  }
  return msg;
};

interface AxiosError {
  response?: {
    data: any;
  };
}

const fetcher = async (url: string) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    throw extractAxiosErr(error);
  }
};

export type { AxiosError };
export { extractAxiosErr, fetcher };
export default axiosInstance;
