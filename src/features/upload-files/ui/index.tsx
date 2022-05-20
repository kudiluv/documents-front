import { Button, styled } from "@mui/material";
import { useStore } from "effector-react";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  $fileInUploading,
  $files,
  $uploadedFiles,
  $uploadingStatus,
  addFiles,
  clear,
  deleteFile,
  upload,
} from "../model";
import FileCardForUploading from "./file-card/card";
import FileCardUploading from "./file-card/uploading-card";
import FileCardSuccess from "./file-card/success-card";

const Input = styled("input")({
  display: "none",
});

const Content = styled("div")({
  paddingTop: "1rem",
  display: "flex",
  flexWrap: "wrap",
});

const UploadFiles = () => {
  const files = useStore($files);
  const fileInUploading = useStore($fileInUploading);
  const uploadedFiles = useStore($uploadedFiles);
  const uploadingStatus = useStore($uploadingStatus);
  return (
    <>
      <label htmlFor="contained-button-file">
        <Input
          id="contained-button-file"
          type="file"
          multiple
          onChange={(e) => addFiles(e.target.files!)}
        />
        <Button
          variant="contained"
          component="span"
          startIcon={<AddIcon />}
          disabled={uploadingStatus === "uploading"}
        >
          Add files
        </Button>
      </label>
      <Button
        sx={{ ml: 1 }}
        onClick={() => upload()}
        variant="outlined"
        disabled={uploadingStatus === "uploading" || !files.length}
      >
        Upload
      </Button>
      {uploadingStatus === "finished" && (
        <Button sx={{ ml: 1 }} onClick={() => clear()} variant="outlined">
          Clear
        </Button>
      )}
      <Content>
        {fileInUploading && <FileCardUploading data={fileInUploading} />}
        {files.map((file, index) => (
          <FileCardForUploading
            data={file}
            onDelete={() => {
              deleteFile(file);
            }}
            key={file.name}
          />
        ))}
        {uploadedFiles.map((file, index) => (
          <FileCardSuccess data={file} key={index} />
        ))}
      </Content>
    </>
  );
};

export default UploadFiles;
