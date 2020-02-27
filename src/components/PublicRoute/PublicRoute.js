import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "@hoc";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout unregistred>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default PublicRoute;
