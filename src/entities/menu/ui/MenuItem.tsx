import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { FC } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { theme } from "shared/theme";
import styles from "./styles.module.scss";

const MyButton = styled(Button)({
  justifyContent: "flex-start",
  width: "100%",
  fontSize: 20,
  "text-transform": "none",
  "&:hover": {
    background: theme.palette.primary.light,
  },
});

type PropsType = {
  startIcon?: React.ReactNode;
} & LinkProps;

export const MenuItem: FC<PropsType> = (props) => {
  return (
    <MyButton
      component={NavLink}
      to={props.to}
      startIcon={<div className={styles.icon}>{props.startIcon}</div>}
      //@ts-ignore
      style={({ isActive }) => ({
        background: isActive ? theme.palette.primary.light : "",
        color: theme.palette.primary.contrastText,
      })}
    >
      {props.children}
    </MyButton>
  );
};
