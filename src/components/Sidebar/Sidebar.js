import React from "react";
import clsx from "clsx";
import { Drawer, Hidden } from "@material-ui/core";
import { Person, Equalizer, Category, Announcement } from "@material-ui/icons";
import DrawerDesktop from "./Drawer/Desktop";
import { sideBarStyle } from "@assets/jss/";
import { useStyles } from "@hooks";

const Sidebar = ({ open }) => {
  const classes = useStyles(sideBarStyle);

  const links = [
    {
      name: "Statistika",
      icon: <Equalizer />
    },
    {
      name: "Korisnici",
      icon: <Person />
    },
    {
      name: "Kategorije",
      icon: <Category />
    },
    {
      name: "Objave",
      icon: <Announcement />
    }
  ];

  return (
    <Hidden smDown>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <DrawerDesktop open={open} classes={classes} links={links} />
      </Drawer>
    </Hidden>
  );
};

export default Sidebar;
