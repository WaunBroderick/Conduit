import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Redirect } from "react-router-dom";
import { ProtectedRoute } from "./utils/protected.route";
import NavBar from "./components/NavBar/NavBar";

// Temp
import Register from "./containers/Authentication/Register";
import SignIn from "./containers/Authentication/SignIn";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Marketplace from "./containers/Marketplace/Marketplace";
import Organization from "./containers/Organization/Organization";
import Profile from "./containers/Profile/Profile";

// Themeing
import WebFont from "webfontloader";
import { useTheme } from "./styles/themes/useTheme";
import { GlobalStyles } from "./styles/themes/GlobalStyles";
import { getFromLS } from "./utils/storage";

const themeDark = {
  colorPrimary: "purple",
};

const themeLight = {
  colorPrimary: "purple",
};

const LoginContainer = () => (
  <div style={{ height: "100vh" }}>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/signin" component={SignIn} />
  </div>
);

const AppContainer = () => (
  <div style={{ height: "100vh" }}>
    <NavBar />
    <Route exact path="/home" component={Home} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/organization" component={Organization} />
    <Route exact path="/marketplace" component={Marketplace} />
    <Route exact path="/profile" component={Profile} />
  </div>
);

function App() {
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

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/signin" />} />
            <Route path="/(signin)" component={LoginContainer} />
            <Route path="/(register)" component={LoginContainer} />
            <ProtectedRoute component={AppContainer} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
