import React from "react";

import { ConduitPage } from "../../styles/themes/GlobalComponents";
import UserProfile from "../../components/UserProfile/UserProfile";

import SideBar from "../../components/NavBar/SideBar";

export default function Profile() {
  return (
    <>
      <SideBar />
      <ConduitPage>
        <UserProfile />
      </ConduitPage>
    </>
  );
}
