import axiosInstance from "../axios.instance";

export type AuthCredentials = {
  username: string;
  password: string;
};

export const login = async (auth: AuthCredentials) => {
  const result = await axiosInstance.post<true>("auth/login", {}, { auth });
  return result.data;
};
