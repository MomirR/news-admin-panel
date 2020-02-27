import React from "react";
import clsx from "clsx";
import { List, Divider, Grid } from "@material-ui/core";
import { Logo, Footer, MenuItem } from "@components";

const DrawerDesktop = ({ open, classes, links }) => {
  return (
    <Grid container direction="column">
      <div className={classes.toolbar}>
        <div className={clsx(classes.logo, { [classes.hide]: !open })}>
          <Logo />
        </div>
      </div>
      <Divider />

      {/* LINKS */}
      <List>
        {links.map((link, index) =>
          open ? (
            <MenuItem link={link} key={index} />
          ) : (
            <MenuItem link={link} key={index} small />
          )
        )}
      </List>

      {/* FOOTER */}
      {open && <Footer />}
    </Grid>
  );
};

export default DrawerDesktop;
