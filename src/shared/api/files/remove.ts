import axiosInstance from "../axios.instance";

export const removeFile = async (id: string) => {
  const result = await axiosInstance.delete<string>(`remove/${id}`);
  return result.data;
};
