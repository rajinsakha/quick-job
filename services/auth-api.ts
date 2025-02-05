import api, { apiBase } from "@/constants/axiosInstance";

export const login = async (data: any) => {
  const response = await apiBase.post(`auth/auth/login/`, {
    data,
  });
  return response;
};

export const register = async (data: any) => {
  const response = await apiBase.post(`auth/sign-up/`, 
    data,
  );
  return response;
};

export const logout = async () => {
  const response = await api.post(`auth/logout/`, {});
  return response;
};
