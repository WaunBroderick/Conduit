import React, { Fragment } from "react";

import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiButtonIcon,
} from "@elastic/eui";

import {
  ConduitCard,
  MainTitle,
  LightSubTitle,
  FullScreenConduitCard,
  AddItemButton,
} from "../../styles/globalStyles";

const OrganizationCard = ({ Organization = [] }) => {
  return (
    <Fragment>
      <EuiFlexGroup gutterSize="l">
        <FullScreenConduitCard>
          <MainTitle>Organization Title</MainTitle>
          <LightSubTitle>Departments</LightSubTitle>
          <LightSubTitle>Courses</LightSubTitle>
          <LightSubTitle>Departments</LightSubTitle>
        </FullScreenConduitCard>
      </EuiFlexGroup>
    </Fragment>
  );
};

export default OrganizationCard;
