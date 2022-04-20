import React from "react";

import NavBar from "../components/NavBar/NavBar";

const Layout = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
);

export { Layout };
