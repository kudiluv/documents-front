import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useStoreMap } from "effector-react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MovieIcon from "@mui/icons-material/Movie";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import ImageIcon from "@mui/icons-material/Image";
import { blue, green, red, yellow } from "@mui/material/colors";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { TypeOfSearchFiles } from "shared/api/search";
import { $filter, changeTypes } from "../model";

const SelectTypes = () => {
  const types = useStoreMap($filter, (filter) => filter.type);

  return (
    <FormControl sx={{ width: "50%", mr: 1 }}>
      <InputLabel id="multiple-type-label"></InputLabel>
      <Select
        label="Type"
        multiple
        labelId="multiple-type-label"
        value={types}
        placeholder="All"
        onChange={({ target }) =>
          changeTypes(target.value as TypeOfSearchFiles[])
        }
        variant="standard"
        displayEmpty
        renderValue={(selected) => {
          if (!selected.length) return "All";
          return selected.join(", ");
        }}
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
        <MenuItem value="presentation">
          <InsertDriveFileIcon sx={{ color: yellow[500], mr: 1 }} />{" "}
          Presentation
        </MenuItem>
        <MenuItem value="tables">
          <InsertDriveFileIcon sx={{ color: green[500], mr: 1 }} /> Tables
        </MenuItem>
        <MenuItem value="pdf">
          <PictureAsPdfIcon sx={{ color: red[500], mr: 1 }} /> Pdf
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTypes;
