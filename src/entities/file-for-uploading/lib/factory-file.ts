import { FileForUploading } from "../model";
import { filesOptions } from "./files-options";

export const factoryFile = (file: File): FileForUploading => {
  const options = filesOptions[file.type] || {};
  return {
    file,
    options: options,
  };
};
