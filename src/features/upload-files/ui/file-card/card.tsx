import { Button } from "@mui/material";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { theme } from "shared";
import { CardLayout } from "entities/file-card";

type PropsType = {
  data: File;
  onDelete: () => void;
};

const FileCardForUploading = ({ data, onDelete }: PropsType) => {
  return (
    <CardLayout
      actions={
        <Button size="small" color="error" onClick={onDelete}>
          Delete
        </Button>
      }
      icon={
        <InsertDriveFileIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.light }}
        />
      }
      name={data.name}
    />
  );
};

export default FileCardForUploading;
