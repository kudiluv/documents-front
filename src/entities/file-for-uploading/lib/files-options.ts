import { OptionsType } from "../model/options";

type FilesOptionsType = {
  [key: string]: OptionsType;
};

export const filesOptions: FilesOptionsType = {
  "application/pdf": {
    extractText: {
      name: "Extracting text",
      value: true,
    },
    ocr: {
      name: "OCR",
      value: true,
      dependsOn: "extractText",
    },
  },
};
