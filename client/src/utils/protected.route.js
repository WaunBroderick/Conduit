import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "./auth";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [cookies, setCookie] = useCookies("auth-cookie");
  console.log(cookies);
  console.log(Object.keys(cookies).length);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Object.keys(cookies).length !== 0) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
