import { blue, green, red, yellow } from "@mui/material/colors";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MovieIcon from "@mui/icons-material/Movie";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const iconsFile = {
  audio: <AudioFileIcon sx={{ color: red[500], mr: 1 }} />,
  video: <MovieIcon sx={{ color: red[500], mr: 1 }} />,
  document: <InsertDriveFileIcon sx={{ color: blue[500], mr: 1 }} />,
  image: <ImageIcon sx={{ color: red[400], mr: 1 }} />,
  tables: <InsertDriveFileIcon sx={{ color: green[500], mr: 1 }} />,
  presentation: <InsertDriveFileIcon sx={{ color: yellow[500], mr: 1 }} />,
  pdf: <PictureAsPdfIcon sx={{ color: red[500], mr: 1 }} />,
  any: <InsertDriveFileIcon sx={{ color: blue[500], mr: 1 }} />,
};
