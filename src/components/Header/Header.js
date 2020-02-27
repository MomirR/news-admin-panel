import React from "react";
import clsx from "clsx";
import { Toolbar, Grid, AppBar, IconButton } from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";
import { Logo, Popper } from "@components";
import { headerStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const Header = ({ unregistred = false, open, toogleSidebar }) => {
  const classes = useStyles(headerStyle);
  if (!unregistred) {
    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          {open ? (
            <IconButton onClick={toogleSidebar}>
              <ChevronLeft />
            </IconButton>
          ) : (
            <IconButton
              aria-label="open drawer"
              onClick={toogleSidebar}
              edge="start"
            >
              <Menu />
            </IconButton>
          )}
          <div className={classes.accountCircle}>
            <Popper
            // imageSrc={singleUser.avatar}
            // firstName={singleUser.firstName}
            // lastName={singleUser.lastName}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <Grid container justify="center">
      <Toolbar className={classes.appBarUnregistred}>
        <Logo />
      </Toolbar>
    </Grid>
  );
};

export default Header;
