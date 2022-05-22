import React, { Component } from "react";
import { Navigate, Route, Outlet, Routes } from "react-router-dom";
import auth from "./auth";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export const PrivateRoute = () => {
  const [cookies, setCookie] = useCookies("auth-cookie");

  return cookies ? <Outlet /> : <Navigate to="/singin" />;
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [cookies, setCookie] = useCookies("auth-cookie");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Object.keys(cookies).length !== 0) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
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
