import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { theme } from "shared";
// import { FileForUploading } from "entities/file-for-uploading";

type PropsType = {
  data: File;
};

const FileCardForUploading = ({ data }: PropsType) => {
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
        <InsertDriveFileIcon
          fontSize="large"
          sx={{ color: theme.palette.primary.light }}
        />
      </Box>
      <CardContent>
        <Typography variant="h5">{data.name}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default FileCardForUploading;
