import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

const StyledCircularProgress = withStyles(theme => ({
  root: {
    width: 100,
    height: 100
  }
}))(CircularProgress);

const Spinner = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item>
        <StyledCircularProgress />
      </Grid>
    </Grid>
  );
};
export default Spinner;
