import React from "react";
import { Redirect } from "react-router-dom";

import { LoginForm } from "@forms/";
import { Grid } from "@material-ui/core/";

const LoginPage = () => {
  return !localStorage.getItem("token") ? (
    <Grid container justify="center" alignItems="center">
      <LoginForm />
    </Grid>
  ) : (
    <Redirect to="/" />
  );
};
export default LoginPage;
