import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "@hoc/Layout/Layout";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) :
        (
          <Redirect to="/login" />
        )
    }
  />
);
export default ProtectedRoute;
