import { Button, IconButton, TextField } from "@mui/material";
import { useStore } from "effector-react";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Popover } from "@material-ui/core";
import TuneIcon from "@mui/icons-material/Tune";

import {
  $endDate,
  $searchString,
  $startDate,
  changeEndDate,
  changeSearchString,
  changeStartDate,
} from "../model";
import SelectTypes from "./select-types";

export const SearchBar = () => {
  const startDate = useStore($startDate);
  const endDate = useStore($endDate);
  const query = useStore($searchString);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const inputRef = useRef<any>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(inputRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "options-area" : undefined;

  return (
    <div style={{ marginRight: 20 }}>
      <TextField
        onChange={(e) => {
          changeSearchString(e.target.value);
        }}
        value={query}
        InputProps={{
          startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
          endAdornment: (
            <IconButton aria-describedby={id} onClick={handleClick}>
              <TuneIcon />
            </IconButton>
          ),
        }}
        placeholder="Search"
        sx={{ maxWidth: 800, width: "100%" }}
        ref={inputRef}
      />
      <Popover
        id={id}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <div
          style={{
            padding: 20,
            display: "flex",
            maxWidth: 800,
            width: 800,
          }}
        >
          <SelectTypes />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Start date"
              value={startDate}
              onChange={(e) => changeStartDate(e || "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={false}
                  sx={{ width: "25%", mr: 1 }}
                />
              )}
            />
            <DateTimePicker
              label="End date"
              value={endDate}
              onChange={(e) => changeEndDate(e || "")}
              renderInput={(params) => (
                <TextField {...params} error={false} sx={{ width: "25%" }} />
              )}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </Popover>
    </div>
  );
};
