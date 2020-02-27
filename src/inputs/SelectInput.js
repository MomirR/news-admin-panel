import React from "react";
import { userListPageStyle } from "@assets/jss";
import { useStyles } from "@hooks";
import {
  Select,
  FormControl,
  MenuItem,
  Grid,
  Typography
} from "@material-ui/core";

const SelectInput = ({ value, onChange, name, id, options, label }) => {
  const c = useStyles(userListPageStyle);
  const gridSize = label ? 10 : 12;
  return (
    <Grid container justify="flex-start" alignItems="center">
      {label && (
        <Grid item lg={2} sm={2} md={2} xs={12}>
          <Typography className={c.label} variant="caption">
            {label}:
          </Typography>
        </Grid>
      )}
      <Grid item lg={gridSize} sm={gridSize} md={gridSize} xs={12}>
        <FormControl variant="outlined">
          <Select
            fullWidth
            value={value}
            onChange={onChange}
            inputProps={{
              name: name,
              id: id
            }}
            className={c.input}
          >
            {options.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value} name={option.name}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectInput;
