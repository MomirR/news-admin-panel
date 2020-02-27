import React from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { footerStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const Footer = ({ small }) => {
  const classes = useStyles(footerStyle);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={clsx(classes.footerWraper, { [classes.footerSmall]: small })}
    >
      <Typography variant="body1">
        © Copyright {new Date().getFullYear()}- Belgrade Times
      </Typography>
    </Grid>
  );
};

export default Footer;
