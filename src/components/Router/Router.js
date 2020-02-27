import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { publicRoutes, protectedRoutes } from "@routes";
import { ProtectedRoute, PublicRoute } from "@components";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((route, index) => (
          <PublicRoute
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
        {protectedRoutes.map((route, index) => (
          <ProtectedRoute
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
