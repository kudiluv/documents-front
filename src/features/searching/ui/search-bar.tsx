import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useStore } from "effector-react";
import React, { useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import MovieIcon from "@mui/icons-material/Movie";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import ImageIcon from "@mui/icons-material/Image";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { blue, green, red } from "@mui/material/colors";
import { Popover } from "@material-ui/core";
import TuneIcon from "@mui/icons-material/Tune";
import { TypeOfSearchFiles } from "shared/api/search";

import {
  $endDate,
  $searchString,
  $startDate,
  $types,
  changeEndDate,
  changeSearchString,
  changeStartDate,
  changeTypes,
} from "../model";

export const SearchBar = () => {
  const types = useStore($types);
  const startDate = useStore($startDate);
  const endDate = useStore($endDate);
  const query = useStore($searchString);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "options-area" : undefined;

  return (
    <div>
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
        sx={{ maxWidth: 400, width: "100%", mr: 1 }}
      />
      <Popover
        id={id}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <FormControl sx={{ width: "100%", maxWidth: 300, mr: 1 }}>
          <InputLabel id="multiple-type-label">Type</InputLabel>
          <Select
            label="Type"
            multiple
            labelId="multiple-type-label"
            value={types}
            onChange={({ target }) =>
              changeTypes(target.value as TypeOfSearchFiles[])
            }
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="document">
              <InsertDriveFileIcon sx={{ color: blue[500], mr: 1 }} />
              Documents
            </MenuItem>
            <MenuItem value="image">
              <ImageIcon sx={{ color: red[400], mr: 1 }} /> Images
            </MenuItem>
            <MenuItem value="video">
              <MovieIcon sx={{ color: red[500], mr: 1 }} /> Videos
            </MenuItem>
            <MenuItem value="audio">
              <AudioFileIcon sx={{ color: red[500], mr: 1 }} /> Audios
            </MenuItem>
            <MenuItem value="tables">
              <InsertDriveFileIcon sx={{ color: green[500], mr: 1 }} /> Tables
            </MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Start date"
            value={startDate}
            onChange={(e) => changeStartDate(e || "")}
            renderInput={(params) => (
              <TextField {...params} error={false} sx={{ mr: 1 }} />
            )}
          />
          <DateTimePicker
            label="End date"
            value={endDate}
            onChange={(e) => changeEndDate(e || "")}
            renderInput={(params) => <TextField {...params} error={false} />}
          />
        </LocalizationProvider>
      </Popover>
    </div>
  );
};
