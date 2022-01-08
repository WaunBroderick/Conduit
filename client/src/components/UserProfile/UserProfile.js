import React, { Fragment } from "react";

import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";

import Avatar, { genConfig } from "react-nice-avatar";

import { ProfileCardDivStyled } from "./style";
import { LightSubTitle } from "../../styles/globalStyles";

const UserProfile = ({ profile = [] }) => {
  const config = genConfig({ sex: "woman" });

  return (
    <Fragment>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem>
          <EuiCard>
            <ProfileCardDivStyled>
              <Avatar style={{ width: "14rem", height: "14rem" }} />
              <EuiSpacer />
              <EuiTitle size="l">
                <h1>Waun Broderick</h1>
              </EuiTitle>
              <LightSubTitle>waunbroderick@gmail.com</LightSubTitle>
            </ProfileCardDivStyled>
            <EuiSpacer />
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
  );
};

export default UserProfile;
