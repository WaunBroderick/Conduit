import React from "react";

import { EuiPageTemplate, EuiEmptyPrompt, EuiCard } from "@elastic/eui";
import { ConduitPage } from "../../styles/globalStyles";
import UserProfile from "../../components/UserProfile/UserProfile";

import Avatar, { genConfig } from "react-nice-avatar";

export default function Profile() {
  return (
    <>
      <ConduitPage>
        <UserProfile />
      </ConduitPage>
    </>
  );
}
