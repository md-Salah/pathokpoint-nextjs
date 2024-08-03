import axiosInstance from "@/utils/axiosConfig";

export const getBookByPublicId = async (public_id: string | number) => {
  try {
    const res = await axiosInstance.get(`/book/public_id/${public_id}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getBooks = async (
  query: string = "",
  page: number = 1,
  per_page: number = 20
) => {
  try {
    const res = await axiosInstance.get(
      `/book/all?page=${page}&per_page=${per_page}&${query}`
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getCategories = async (
  query: string = "",
  page: number = 1,
  per_page: number = 20
) => {
  try {
    const res = await axiosInstance.get(
      `/category/all?page=${page}&per_page=${per_page}&${query}`
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getCategoryBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/category/slug/${slug}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAuthors = async (
  query: string = "",
  page: number = 1,
  per_page: number = 20
) => {
  try {
    const res = await axiosInstance.get(
      `/author/all?page=${page}&per_page=${per_page}&${query}`
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getAuthorBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/author/slug/${slug}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getPublishers = async (
  query: string = "",
  page: number = 1,
  per_page: number = 20
) => {
  try {
    const res = await axiosInstance.get(
      `/publisher/all?page=${page}&per_page=${per_page}&${query}`
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getPublisherBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/publisher/slug/${slug}`);
    return res.data;
  } catch (error) {
    return null;
  }
};
