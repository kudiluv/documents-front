import { CircularProgress } from "@mui/material";
import React from "react";
import CardLayout from "./card-layout";

type PropsType = {
  data: File;
};

const FileCardUploading = ({ data }: PropsType) => {
  return <CardLayout icon={<CircularProgress />} name={data.name} />;
};

export default FileCardUploading;
