import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { EuiThemeProvider } from '@elastic/eui'
import * as LightTheme from "@elastic/eui/dist/eui_theme_light.json";
import * as DarkTheme from "@elastic/eui/dist/eui_theme_dark.json";
import "@elastic/eui/dist/eui_theme_light.css";

ReactDOM.render(
  <EuiThemeProvider theme={DarkTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </EuiThemeProvider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
