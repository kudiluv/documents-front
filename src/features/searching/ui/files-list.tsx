import { useStore } from "effector-react";
import React from "react";
import { Typography } from "@mui/material";
import { CardWithButtons } from "entities/file-card/";
import { $files } from "../model";

export const FilesList = () => {
  const files = useStore($files);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", paddingTop: 20 }}>
      {files.pages === 0 && (
        <Typography>Nothing found for your request</Typography>
      )}
      {files.items.map((file) => (
        <CardWithButtons data={file} key={file.id} />
      ))}
    </div>
  );
};
