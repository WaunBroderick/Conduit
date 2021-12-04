import React from "react";
import { useSelector } from "react-redux";

import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.organization}</p>
      <h1>Heres the home page</h1>
      <h1>HELLLLLLO</h1>
    </div>
  );
}
