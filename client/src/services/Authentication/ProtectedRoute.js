import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth: isAuth, component: component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to={(path = "/signin")} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
