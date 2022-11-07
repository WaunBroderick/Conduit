import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/NavBar/SideBar";

export default function Testing() {
  //Set user Profile
  const user = useSelector((state) => state.profile);

  return (
    <>
      <SideBar />
      <ConduitPage>
        <NavBar />
        <EuiEmptyPrompt title={<span>Testing Screen</span>} />
        <div>
          <ul></ul>
        </div>
        <h1>{user.profile.name}</h1>
      </ConduitPage>
    </>
  );
}
