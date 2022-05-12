import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import SyncIcon from "@mui/icons-material/Sync";
import { MenuItem } from "./MenuItem";

const Container = styled(Box)({
  height: "100vh",
  paddingTop: 20,
  paddingInline: 20,
});

export const Menu = () => {
  return (
    <Container>
      <img src="./logo.svg" />
      <Stack spacing={2} sx={{ paddingTop: 2 }}>
        <MenuItem startIcon={<SearchIcon />} to={"/"}>
          Search
        </MenuItem>
        <MenuItem startIcon={<SyncIcon />} to={"/processing"}>
          Processing
        </MenuItem>
        <MenuItem startIcon={<UploadIcon />} to={"/upload"}>
          Upload
        </MenuItem>
      </Stack>
    </Container>
  );
};
