import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { theme } from "shared";
import { UploadedFileDto } from "shared/api/files";

type PropsType = {
  data: UploadedFileDto;
};

const FileCardSuccess = ({ data }: PropsType) => {
  return (
    <Card
      sx={{ width: 200, marginRight: "1rem", marginBottom: "1rem" }}
      elevation={2}
    >
      <CardActionArea>
        <Box
          sx={{
            height: 150,
            borderBottom: "1px solid #EEEEEE",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <DoneIcon
            fontSize="large"
            sx={{ color: theme.palette.primary.light }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5">{data.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="info">
            Copy
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default FileCardSuccess;
