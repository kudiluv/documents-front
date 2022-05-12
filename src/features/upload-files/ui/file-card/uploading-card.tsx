import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";

type PropsType = {
  data: File;
};

const FileCardUploading = ({ data }: PropsType) => {
  return (
    <Card
      sx={{ width: 200, marginRight: "1rem", marginBottom: "1rem" }}
      elevation={2}
    >
      <Box
        sx={{
          height: 150,
          borderBottom: "1px solid #EEEEEE",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <CircularProgress />
      </Box>
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default FileCardUploading;
