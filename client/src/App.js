import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/LightTheme";
import { ProtectedRoute } from "./utils/protected.route";

// Temp
import Register from "./containers/Authentication/Register";
import SignIn from "./containers/Authentication/SignIn";
import Home from "./containers/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={{ height: "100vh" }}>
            <Switch>
              <Route path="/" component={Register} exact />
              <Route path="/register" component={Register} />
              <Route path="/signin" component={SignIn} />
              <ProtectedRoute exact path="/home" component={Home} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
