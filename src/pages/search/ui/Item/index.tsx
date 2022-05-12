import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  name: string;
};

export const Item = (props: PropsType) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
