import "./App.css";

import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Navigate } from "react-router-dom";
import { PrivateRoute, ProtectedRoute } from "./utils/protected.route";
import NavBar from "./components/NavBar/NavBar";

// Temp
import Register from "./containers/Authentication/Register";
import SignIn from "./containers/Authentication/SignIn";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Marketplace from "./containers/Marketplace/Marketplace";
import Organization from "./containers/Organization/Organization";
import Profile from "./containers/Profile/Profile";
import Testing from "./containers/Testing/Testing";

// Themeing
import WebFont from "webfontloader";
import { useTheme } from "./styles/themes/useTheme";
import { GlobalStyles } from "./styles/themes/GlobalStyles";
import Courses from "./containers/courses/Courses";

// Feature Flagging
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

// Graphql
import { gql } from "apollo-boost";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//translations
import i18n from "./config/locales/i18n";
import { useTranslation, Trans } from "react-i18next";

const themeDark = {
  colorPrimary: "purple",
};

const themeLight = {
  colorPrimary: "purple",
};

const LoginContainer = () => (
  <div style={{ height: "100vh" }}>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<Register />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);

function App() {
  //translation variable
  const { t } = useTranslation();

  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        //alert(`Graphql err ${message}`);
        console.log("HELLLLLLLO");
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:5000/graphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<LoginContainer />} />
              <Route path="/signin" element={<LoginContainer />} />
              <Route path="/register" element={<Register />} />
              <Route exact path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/organization" element={<Organization />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/testing" element={<Testing />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
