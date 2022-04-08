import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@elastic/eui/dist/eui_theme_light.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import configureStore from "./redux/store/configureStore";
import { CookiesProvider } from "react-cookie";
import Users from "./containers/Users/Users";

import * as themes from "./styles/themes/schema.json";
import { setToLS } from "./utils/storage";

import { PersistGate } from "redux-persist/integration/react";

// ReactQuery Experiement
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const { store, persistor } = configureStore();

const queryClient = new QueryClient();

// Set Application Theme
const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Index />
            <ReactQueryDevtools />
          </PersistGate>
        </Provider>
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
