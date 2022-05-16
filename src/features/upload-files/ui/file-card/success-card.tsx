import { Button } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { toast } from "react-toastify";
import { theme } from "shared";
import { UploadedFileDto } from "shared/api/files";
import CardLayout from "./card-layout";

type PropsType = {
  data: UploadedFileDto;
};

const FileCardSuccess = ({ data }: PropsType) => {
  const onCopy = () => {
    navigator.clipboard.writeText(data.link);
    toast.info("Link has been copied");
  };

  return (
    <CardLayout
      icon={
        <DoneIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.light }}
        />
      }
      name={data.originalName}
      actions={
        <Button size="small" color="info" onClick={onCopy}>
          Copy
        </Button>
      }
    />
  );
};

export default FileCardSuccess;
