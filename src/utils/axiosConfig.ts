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
  return msg;
};

interface AxiosError {
  response?: {
    data: any;
  };
}

export type { AxiosError };
export { extractAxiosErr };
export default axiosInstance;
