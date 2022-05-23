import { useStore, useStoreMap } from "effector-react";
import React from "react";
import { CircularProgress, Fade, Pagination, Typography } from "@mui/material";
import { CardWithButtons } from "entities/file-card/";
import { deleteFile } from "entities/removing-file";
import { $files, $queryParams, changePage, searchFx } from "../model";

export const FilesList = () => {
  const files = useStore($files);
  const page = useStoreMap($queryParams, (query) => query.page);
  const pending = useStore(searchFx.pending);
  return (
    <div style={{ paddingTop: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 800,
          paddingBottom: 15,
          alignItems: "center",
        }}
      >
        {files.pages === 0 && (
          <Typography>Nothing found for your request</Typography>
        )}
        {files.countItems > 0 && (
          <Typography>Found {files.countItems} files</Typography>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Fade in={pending && files.pages > 1} timeout={1000}>
            <CircularProgress size={20} />
          </Fade>
          {files.pages > 1 && (
            <Pagination
              page={page}
              count={files.pages}
              onChange={(_, value) => changePage(value)}
            />
          )}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {files.items.map((file) => (
          <CardWithButtons
            data={file}
            key={file.id}
            onDelete={() => deleteFile(file.id)}
          />
        ))}
      </div>
    </div>
  );
};
