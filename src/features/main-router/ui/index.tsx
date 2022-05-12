import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/system";
import { Menu } from "entities/menu";
import { theme } from "shared/theme";

const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
});

export const MainRouter = () => {
  return (
    <Container>
      <Menu />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Container>
  );
};
