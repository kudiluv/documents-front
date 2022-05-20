import { styled } from "@mui/material";
import { theme } from "shared/theme";

const Container = styled("div")({
  height: "100vh",
  background: theme.palette.primary.dark,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Container;
