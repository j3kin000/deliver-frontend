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
