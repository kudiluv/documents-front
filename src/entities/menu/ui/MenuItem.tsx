import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { FC, useState } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { theme } from "shared/theme";
import styles from "./styles.module.scss";

const MyButton = styled(Button)({
  color: theme.palette.primary.contrastText,
  justifyContent: "flex-start",
  width: "100%",
  fontSize: 20,
  "text-transform": "none",
  "&:hover": {
    background: theme.palette.primary.light,
  },
});
const activeStyle = (isActive: boolean): React.CSSProperties => {
  if (isActive)
    return {
      background: theme.palette.primary.light,
    };
  return {};
};

type PropsType = {
  startIcon?: React.ReactNode;
} & LinkProps;

export const MenuItem: FC<PropsType> = (props) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      className={({ isActive }) => {
        setActive(isActive);
        return "";
      }}
      {...props}
    >
      <MyButton
        startIcon={<div className={styles.icon}>{props.startIcon}</div>}
        style={activeStyle(active)}
      >
        {props.children}
      </MyButton>
    </NavLink>
  );
};
