import React from "react";

import { Layout } from "../../layout";
import { EuiPageTemplate, EuiEmptyPrompt, EuiCard } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";
import UserProfile from "../../components/UserProfile/UserProfile";

import Avatar, { genConfig } from "react-nice-avatar";

export default function Profile() {
  return (
    <>
      <Layout>
        <ConduitPage>
          <UserProfile />
        </ConduitPage>
      </Layout>
    </>
  );
}
