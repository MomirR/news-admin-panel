import React from "react";
import { userListPageStyle } from "@assets/jss";
import { useStyles } from "@hooks";
import { TextField, Grid, Typography } from "@material-ui/core";

const TextInput = ({
  name,
  id,
  label,
  value,
  onChange,
  fullWidth = true,
  ...other
}) => {
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
        <TextField
          className={c.textfiled}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          {...other}
        />
      </Grid>
    </Grid>
  );
};

export default TextInput;
