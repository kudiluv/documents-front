import {
  Grid,
  MenuItem,
  Pagination,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Page } from "shared/ui/page";
import { changeDateFilter, updateSearchPhrase } from "./model";
import { Item } from "./ui/Item";

const SearchPage = () => {
  const files = [
    { name: "test1" },
    { name: "test2" },
    { name: "test1" },
    { name: "test2" },
    { name: "test1" },
    { name: "test2" },
    { name: "test1" },
    { name: "test2" },
  ];

  return (
    <Page>
      <Paper elevation={3} sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="text"
              placeholder="search"
              fullWidth
              onChange={(e) => updateSearchPhrase(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="From"
              type="datetime-local"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => changeDateFilter({ dateStart: e.timeStamp })}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="To"
              type="datetime-local"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => changeDateFilter({ dateEnd: e.timeStamp })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ paddingTop: 4 }}>
          {files.map((value, index) => (
            <Grid item xs={3} key={index}>
              <Item name={value.name} />
            </Grid>
          ))}
        </Grid>
        <Pagination count={10} shape="rounded" />
      </Paper>
    </Page>
  );
};

export default SearchPage;
