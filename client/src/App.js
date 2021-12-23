import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/LightTheme";
import { ProtectedRoute } from "./utils/protected.route";
import NavBar from "./components/NavBar/NavBar";

// Temp
import Register from "./containers/Authentication/Register";
import SignIn from "./containers/Authentication/SignIn";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Marketplace from "./containers/Marketplace/Marketplace";
import Organization from "./containers/Organization/Organization";

const themeDark = {
  colorPrimary: "purple",
};

const themeLight = {
  colorPrimary: "purple",
};

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Router>
        <NavBar />
        <div style={{ height: "100vh" }}>
          <Switch>
            <Route path="/" component={Register} exact />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/users" component={Users} />
            <ProtectedRoute
              exact
              path="/organization"
              component={Organization}
            />
            <ProtectedRoute exact path="/marketplace" component={Marketplace} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
