import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface AxiosError {
  response?: {
    data: any; 
  };
}

export type { AxiosError };
export default axiosInstance;
