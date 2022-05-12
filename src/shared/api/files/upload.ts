import { ajax } from "rxjs/ajax";
import { API_URL } from "shared/config";
import { UploadedFileDto } from "./uploaded-file";

export const uploadFile = (file: File) => {
  const body = new FormData();
  body.append("file", file);
  const request = ajax.post<UploadedFileDto>(`${API_URL}/upload`, body);
  return request;
};
