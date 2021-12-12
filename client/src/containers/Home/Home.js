import React from "react";
import { useSelector } from "react-redux";
import { EuiButton } from "@elastic/eui";
import auth from "../../utils/auth";
import logo from "../../assets/img/logo/logoWithName.png";

import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <div style={{ marginTop: "100px" }}>
      <NavBar />
      <h1>Heres the home page</h1>
      <EuiButton
        onClick={() => {
          auth.logout(() => {});
        }}
        iconType="heart"
      >
        LogOut
      </EuiButton>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <h1>HELLLLLLO</h1>
      <img src={logo} alt="Logo" />
    </div>
  );
}
