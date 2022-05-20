import { createEvent, createStore, forward } from "effector";
import { reset } from "patronum";
import { toast } from "react-toastify";
import { concat, of, tap } from "rxjs";
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

export const clear = createEvent();

type UploadingStatus = "idle" | "uploading" | "finished";

const changeUploadingStatus = createEvent<UploadingStatus>();
export const $uploadingStatus = createStore<UploadingStatus>("idle").on(
  changeUploadingStatus,
  (_, payload) => payload
);

reset({
  clock: clear,
  target: [$files, $uploadedFiles, $fileInUploading, $uploadingStatus],
});

function uploading(files: File[]) {
  changeUploadingStatus("uploading");
  const obesrvables = files.map((file) => {
    const initUploading = of("init").pipe(tap(() => addFile(file)));
    const request = uploadFile(file).pipe(
      tap(() => toast.success(`Uploaded ${file.name} file`)),
      tap((res) => uploaded(res))
    );
    return concat(initUploading, request);
  });

  concat(...obesrvables).subscribe({
    complete: () => {
      toast.success("All files have been uploaded");
      changeUploadingStatus("finished");
    },
  });
}
