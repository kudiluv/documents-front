import { Button } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { FileSearchResponse } from "shared/api/search";
import CardLayout from "./card-layout";
import { iconsFile } from "./icons-file";

type PropsType = {
  data: FileSearchResponse;
  onDelete?: (id: string) => void;
};

const CardWithButtons = ({ data, onDelete }: PropsType) => {
  const onCopy = () => {
    navigator.clipboard.writeText(data.link);
    toast.info("Link has been copied");
  };

  return (
    <CardLayout
      icon={iconsFile[data.type]}
      name={data.originalName}
      actions={
        <>
          <a href={data.link} download={data.originalName}>
            <Button
              size="small"
              color="secondary"
              sx={{ mr: 5 }}
              onClick={() => {
                onDelete?.(data.id);
              }}
            >
              Download
            </Button>
          </a>

          <Button size="small" color="info" onClick={onCopy}>
            Link
          </Button>
        </>
      }
    />
  );
};

export default CardWithButtons;
