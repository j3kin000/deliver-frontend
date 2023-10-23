import apiClient from "./apiClient";

export const login = async (params: { email: string; password: string }) => {
  const response = await apiClient.post("api/v1/auth/login", params);
  return response.data;
};
