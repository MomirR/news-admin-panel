import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import { logoutStyle } from "@assets/jss";
import { useStyles } from "@hooks";

const Logout = () => {
  const classes = useStyles(logoutStyle);
  const history = useHistory();
  const logout = () => {
    localStorage.clear("token");
    history.push("/login");
  };
  return (
    <Button className={classes.logoutButon} onClick={logout}>
      Log Out
    </Button>
  );
};

export default Logout;
