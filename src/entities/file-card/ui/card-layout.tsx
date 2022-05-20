import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  icon: React.ReactNode;
  name: string;
  actions?: React.ReactNode;
};

const CardLayout = ({ icon, name, actions }: PropsType) => {
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
        {icon}
      </Box>
      <CardContent>
        <Typography variant="body1" whiteSpace="nowrap" textOverflow="ellipsis">
          {name}
        </Typography>
      </CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export default CardLayout;
