import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

// Temp
import Register from "./containers/Authentication/Register";
import SignIn from "./containers/Authentication/SignIn";
import Home from "./containers/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div style={{ height: "100vh" }}>
          <Switch>
            <Route path="/" component={Register} exact />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
