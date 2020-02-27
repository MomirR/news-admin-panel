import React, { useContext } from "react";
import clsx from "clsx";
import { CssBaseline } from "@material-ui/core";
import { UiContext } from "@context";
import { Sidebar, Header, Footer } from "@components";
import { layoutStyle } from "@assets/jss/";
import { useStyles } from "@hooks";

const Layout = ({ unregistred = false, children }) => {
  const classes = useStyles(layoutStyle);
  const { state, dispatch } = useContext(UiContext);

  const toogleSidebar = () => {
    dispatch({ type: "toogleSidebar" });
  };

  if (unregistred) {
    return (
      <React.Fragment>
        <Header unregistred />
        <main>{children}</main>
        <Footer small />
      </React.Fragment>
    );
  }

  const mainClasses = clsx(classes.content, {
    [classes.sidebarOpen]: state.sidebarOpen
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Header open={state.sidebarOpen} toogleSidebar={toogleSidebar} />
      <Sidebar open={state.sidebarOpen} />
      <main className={mainClasses}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
