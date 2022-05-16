import axiosInstance from "../axios.instance";

export type TypeOfSearchFiles =
  | "audio"
  | "video"
  | "document"
  | "tables"
  | "image";

export type SearchParamsType = {
  queryString: string;
  type: TypeOfSearchFiles[];
  startDate: string;
  endDate: string;
};

export const getFilesByQuery = (params: SearchParamsType) => {
  axiosInstance.get("search", {
    params: params,
  });
};
