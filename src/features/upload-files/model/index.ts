import { createEvent, createStore, forward } from "effector";
import { toast } from "react-toastify";
import { concat, map, of, tap } from "rxjs";
import { UploadedFileDto, uploadFile } from "shared/api/files";

export const addFiles = createEvent<FileList>();
export const deleteFile = createEvent<File>();

const transformFiles = addFiles.map<File[]>((files) => Array.from(files));
const extractFirstFile = createEvent();
export const upload = createEvent();

export const $files = createStore<File[]>([])
  .on(transformFiles, (prev, payload) => {
    toast.success(`Added ${payload.length} files`);
    return [...prev, ...payload];
  })
  .on(extractFirstFile, (prev) => prev.slice(1))
  .on(upload, (prev) => uploading(prev))
  .on(deleteFile, (prev, payload) => prev.filter((file) => file !== payload));

const clearFileInUploading = createEvent();
const addFile = createEvent<File>();
export const $fileInUploading = createStore<File | null>(null)
  .on(clearFileInUploading, () => null)
  .on(addFile, (_, file) => file);

const uploaded = createEvent<UploadedFileDto>();
export const $uploadedFiles = createStore<UploadedFileDto[]>([]).on(
  uploaded,
  (prev, payload) => [payload, ...prev]
);

forward({
  from: addFile,
  to: extractFirstFile,
});

forward({
  from: uploaded,
  to: clearFileInUploading,
});

function uploading(files: File[]) {
  const obesrvables = files.map((file) => {
    const initUploading = of("init").pipe(tap(() => addFile(file)));
    const request = uploadFile(file).pipe(
      map(({ response }) => response),
      tap(() => toast.success(`Uploaded ${file.name} file`)),
      tap((res) => uploaded(res))
    );
    return concat(initUploading, request);
  });

  concat(...obesrvables).subscribe();
}
