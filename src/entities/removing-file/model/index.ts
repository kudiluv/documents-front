import { createEffect, createEvent, createStore, sample } from "effector";
import { reset } from "patronum";
import { removeFile } from "shared/api/files";

export const deleteFx = createEffect(removeFile);

export const deleteFile = createEvent<string>();
export const $isOpen = createStore(false)
  .on(deleteFile, () => true)
  .on(deleteFx.done, () => false);
export const $fileForDeleting = createStore<string>("").on(
  deleteFile,
  (_, payload) => payload
);

export const agree = createEvent();
export const disagree = createEvent();
reset({
  clock: disagree,
  target: [$isOpen, $fileForDeleting],
});

sample({
  clock: agree,
  source: $fileForDeleting,
  target: deleteFx,
});
