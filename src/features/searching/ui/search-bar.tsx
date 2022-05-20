import {
  Button,
  Chip,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useStore, useStoreMap } from "effector-react";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Popover } from "@material-ui/core";
import TuneIcon from "@mui/icons-material/Tune";

import {
  $endDate,
  $fileName,
  $searchQuery,
  $searchString,
  $searchStringFilter,
  $startDate,
  applyFilter,
  changeEndDate,
  changeFileName,
  changeSearchString,
  changeSearchStringFilter,
  changeStartDate,
  resetFilters,
} from "../model";
import SelectTypes from "./select-types";
import { TextWrapper } from "./text-wrapper";

export const SearchBar = () => {
  const startDate = useStore($startDate);
  const endDate = useStore($endDate);
  const query = useStore($searchString);
  const queryFilter = useStore($searchStringFilter);
  const fileNameApplied = useStoreMap(
    $searchQuery,
    (source) => source.fileNameQuery
  );
  const fileName = useStore($fileName);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const inputRef = useRef<any>();
  const handleClick = () => {
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
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" sx={{ mr: 1 }} />
              {fileNameApplied && (
                <Chip
                  label={`file name: ${fileNameApplied}`}
                  onClick={() => {
                    handleClick();
                  }}
                />
              )}
            </InputAdornment>
          ),
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
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            rowGap: 10,
            maxWidth: 800,
            width: 800,
          }}
        >
          <TextWrapper>Type</TextWrapper>
          <SelectTypes />
          <TextWrapper>Сontains words</TextWrapper>
          <TextField
            value={queryFilter}
            size="small"
            onChange={(e) => {
              changeSearchStringFilter(e.target.value);
            }}
          />
          <TextWrapper>File name</TextWrapper>
          <TextField
            value={fileName}
            size="small"
            onChange={(e) => {
              changeFileName(e.target.value);
            }}
          />
          <TextWrapper>Uploading date</TextWrapper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div>
              <DatePicker
                label="Start date"
                value={startDate}
                onChange={(e) => changeStartDate(e || "")}
                maxDate={endDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={false}
                    sx={{ width: "25%", mr: 1 }}
                    variant="standard"
                  />
                )}
              />
              <DatePicker
                label="End date"
                value={endDate}
                onChange={(e) => changeEndDate(e || "")}
                minDate={startDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={false}
                    sx={{ width: "25%" }}
                    variant="standard"
                  />
                )}
              />
            </div>
          </LocalizationProvider>
        </div>
        <div style={{ display: "flex", justifyContent: "end", padding: 20 }}>
          <Button
            variant="outlined"
            sx={{ mr: 1 }}
            onClick={() => {
              resetFilters();
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              applyFilter();
              handleClose();
            }}
          >
            Search
          </Button>
        </div>
      </Popover>
    </div>
  );
};
