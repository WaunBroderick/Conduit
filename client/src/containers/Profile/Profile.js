import React from "react";

import { ConduitPage } from "../../styles/themes/GlobalComponents";
import UserProfile from "../../components/UserProfile/UserProfile";

export default function Profile() {
  return (
    <>
      <ConduitPage>
        <UserProfile />
      </ConduitPage>
    </>
  );
}
