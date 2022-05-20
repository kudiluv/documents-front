import { Observable } from "rxjs";
import axiosInstance from "../axios.instance";
import { UploadedFileDto } from "./uploaded-file";

export const uploadFile = (file: File) => {
  const body = new FormData();
  body.append("file", file);
  body.append("fileName", file.name);
  return new Observable<UploadedFileDto>((observer) => {
    axiosInstance
      .post<UploadedFileDto>("/upload", body)
      .then((response) => {
        observer.next(response.data);
        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });
  });
};
