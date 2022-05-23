import { IconButton } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import { FileSearchResponse } from "shared/api/search";
import CardLayout from "./card-layout";
import { iconsFile } from "./icons-file";

type PropsType = {
  data: FileSearchResponse;
  onDelete?: () => void;
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
      actionsProps={{
        sx: {
          justifyContent: "space-between",
        },
      }}
      actions={
        <>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
          <div>
            <a
              href={data.link}
              download={data.originalName}
              style={{ alignSelf: "end" }}
            >
              <IconButton>
                <DownloadIcon />
              </IconButton>
            </a>
            <IconButton onClick={onCopy}>
              <LinkIcon />
            </IconButton>
          </div>
        </>
      }
    />
  );
};

export default CardWithButtons;
