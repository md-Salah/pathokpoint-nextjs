import axios from 'axios';

interface AxiosError {
  response?: {
    data: any;
    status: number;
  };
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const extractAxiosErr = (error: any) => {
  const axiosError = error as AxiosError;
  if (typeof axiosError === "string") return axiosError;
  else if (!axiosError.response) return "An unknown error occurred";
  else if (axiosError.response.status === 422)
    return `${axiosError.response.data.detail[0].loc[1]} - ${axiosError.response.data.detail[0].msg}`;
  else if (axiosError.response.status === 401) {
    const detail = axiosError.response.data.detail;
    if (typeof detail === "string") return detail;
    return axiosError.response.data.detail.message;
  }
  return axiosError.response.data.detail.message;
};

const fetcher = async (url: string) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    throw extractAxiosErr(error);
  }
};

const fetchWithToken = async (url: string, token: string | null) => {
  if (!token) {
    throw "Unauthorized, Please login first";
  }
  try {
    const res = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw extractAxiosErr(error);
  }
};

const fetchWithTokenAndHeader = async (url: string, token: string | null) => {
  if (!token) {
    throw "Unauthorized, Please login first";
  }
  try {
    const res = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      data: res.data,
      headers: res.headers,
    };
  } catch (error) {
    throw extractAxiosErr(error);
  }
};

export type { AxiosError };
export { extractAxiosErr, fetcher, fetchWithToken, fetchWithTokenAndHeader };
export default axiosInstance;
