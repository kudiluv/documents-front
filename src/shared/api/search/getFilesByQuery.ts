import axiosInstance from "../axios.instance";

export type TypeOfSearchFiles =
  | "audio"
  | "video"
  | "document"
  | "tables"
  | "image"
  | "presentation"
  | "pdf"
  | "any";

export type SearchParamsType = {
  fileNameQuery: string;
  textQuery: string;
  type: TypeOfSearchFiles[];
  startDate: string | null;
  endDate: string | null;
  page: number;
};

export type FileSearchResponse = {
  id: string;
  link: string;
  originalName: string;
  type: TypeOfSearchFiles;
};

export type SearchResponse = {
  pages: number;
  countItems: number;
  items: FileSearchResponse[];
};

export const getFilesByQuery = async (params: SearchParamsType) => {
  const result = await axiosInstance.post<SearchResponse>("search", params);
  return result.data;
};
