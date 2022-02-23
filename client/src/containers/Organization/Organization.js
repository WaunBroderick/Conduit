import React, { useState } from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiFlexGrid,
  EuiCard,
  EuiPanel,
  EuiStat,
  EuiIcon,
} from "@elastic/eui";

import {
  ConduitPage,
  ConduitCard,
  AddItemButton,
} from "../../styles/themes/GlobalComponents";

import Modal from "../../components/Forms/CreateDepartment/CreateDepartmentModal";
import useModal from "../../components/Forms/CreateDepartment/useModal";

import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";

export default function Organization() {
  const { toggle, visible } = useModal();

  return (
    <ConduitPage>
      <EuiFlexGroup gutterSize="l" style={{ padding: "12px" }}>
        <EuiFlexGroup style={{ padding: "12px", maxWidth: "400px" }}>
          <EuiFlexItem>
            <EuiCard style={{ height: 900 }}></EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiFlexGroup
          gutterSize="l"
          style={{ padding: "12px", maxHeight: 100 }}
        >
          <EuiFlexItem grow={1}>
            <EuiPanel>
              <EuiStat
                title="11"
                description="Courses to Complete"
                textAlign="right"
              >
                <EuiIcon type="empty" />
              </EuiStat>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiPanel>
              <EuiStat
                title="19"
                description="Reviews Awaiting"
                titleColor="accent"
                textAlign="right"
              >
                <EuiIcon type="clock" color="accent" />
              </EuiStat>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiPanel>
              <EuiStat
                title="11"
                description="Collected Cerificates"
                titleColor="success"
                textAlign="right"
              >
                <EuiIcon type="check" color="success" />
              </EuiStat>
            </EuiPanel>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiPanel>
              <EuiStat
                title="3"
                description="Overdue Courses"
                titleColor="danger"
                textAlign="right"
              >
                <EuiIcon type="alert" color="danger" />
              </EuiStat>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </ConduitPage>
  );
}
