import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { EuiThemeProvider } from "@elastic/eui";

export default function UserTable(props) {
  const { data, fetchUsers } = props;
  const HeaderUserMenu = () => {};
  console.log({ data });
  const test = axios.get("http://localhost:5000/users").then((res) => {
    // console.log(res);
  });

  return (
    <>
      <EuiThemeProvider />
      <EuiThemeProvider />
      <div>
        <h1>hello</h1>
      </div>
    </>
  );
}
