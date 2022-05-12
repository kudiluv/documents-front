import { Typography } from "@mui/material";
import React, { FC } from "react";
import { theme } from "shared/theme";

type PropsType = {
  title: string;
  subtitle?: string;
};

export const PageHeader: FC<PropsType> = (props) => {
  return (
    <div>
      <Typography variant="h2" sx={{ fontWeight: 500 }}>
        {props.title}
      </Typography>
      <Typography variant="h6" sx={{ color: theme.palette.primary.light }}>
        {props.subtitle}
      </Typography>
    </div>
  );
};
