import { CardContent } from "@material-ui/core";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { FC } from "react";
import { theme } from "shared";
import { QueueInfoDto } from "shared/api/queues";

type PropsType = {
  data: QueueInfoDto;
};

const TableHeader = styled("td")({
  fontSize: 14,
  paddingRight: 20,
  paddingBottom: 10,
  color: theme.palette.primary.light,
});
const TableValue = styled("td")({
  fontSize: 24,
  fontWeight: "bold",
  paddingRight: 10,
});

export const ProcessCard: FC<PropsType> = ({ data }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        avatar={<Avatar>{data.name[0]}</Avatar>}
        title={<Typography variant="h5">{data.name}</Typography>}
        subheader={"queue"}
      />
      <CardContent>
        <table>
          <tr>
            <TableHeader>Tasks</TableHeader>
            <TableHeader>In Process</TableHeader>
            <TableHeader>Workers</TableHeader>
          </tr>
          <tr>
            <TableValue>{data.tasksCount}</TableValue>
            <TableValue>{data.tasksInProcessCount}</TableValue>
            <TableValue>{data.workers}</TableValue>
          </tr>
        </table>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "flex-end", borderTop: "1px solid #EEEEEE" }}
      >
        <Button color="secondary">View details</Button>
      </CardActions>
    </Card>
  );
};
