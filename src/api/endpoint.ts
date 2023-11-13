import apiClient from "./apiClient";

export const login = async (params: { email: string; password: string }) => {
  const response = await apiClient.post("api/v1/auth/login", params, {});
  return response?.data;
};

export const logout = async () => {
  const response = await apiClient.post("api/v1/auth/logout", {});
  return response?.data;
};

export const checkAuth = async () => {
  const response = await apiClient.get("api/v1/auth/check-auth", {});
  return response?.data;
};

//products

export const getAllProduct = async () => {
  const response = await apiClient.get("api/v1/products", {});
  return response?.data;
};

export const getProduct = async (id: string) => {
  const response = await apiClient.get(`api/v1/products/${id}`, {});
  return response?.data;
};

export const addProduct = async (params: any) => {
  const response = await apiClient.post("api/v1/products", params, {});
  return response?.data;
};

export const updateProduct = async (id: string, params: any) => {
  const response = await apiClient.patch(`api/v1/products/${id}`, params);
  return response?.data;
};

export const deleteProduct = async (id: string) => {
  const response = await apiClient.delete(`api/v1/products/${id}`, {});
  return response?.data;
};
