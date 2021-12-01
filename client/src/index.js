import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { EuiThemeProvider } from "@elastic/eui";
import * as DarkTheme from "@elastic/eui/dist/eui_theme_dark.json";
import "@elastic/eui/dist/eui_theme_light.css";

import userReducer from "./reducers/user";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
