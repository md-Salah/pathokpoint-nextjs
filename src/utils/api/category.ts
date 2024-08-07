import axiosInstance from "@/utils/axiosConfig";

export const getCategories = async (url: string) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {}
};
