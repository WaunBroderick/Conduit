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
} from "../../styles/themes/GlobalComponents";

import { GlobalStyles } from "../../styles/themes/GlobalStyles";

const OrganizationCard = ({ Organization = [] }) => {
  return (
    <Fragment>
      <EuiFlexGroup>
        <FullScreenConduitCard className="euiCard" id="euiCard">
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
