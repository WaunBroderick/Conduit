import React, { useState } from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiFlexGrid,
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
      <Modal visible={visible} toggle={toggle} />

      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiSpacer />

          <OrganizationCard />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiSpacer />
          <EuiFlexGroup gutterSize="l">
            <ConduitCard>
              <EuiFlexGrid columns={3}>
                <EuiFlexItem>
                  {" "}
                  <AddItemButton
                    className="ConduitAddButtton"
                    display="base"
                    iconType="plus"
                    iconSize="l"
                    size="m"
                    aria-label="plus"
                    onClick={toggle}
                  />
                </EuiFlexItem>
                <Modal visible={visible} toggle={toggle} />

                <EuiFlexItem>Nested Grid Two</EuiFlexItem>
                <EuiFlexItem>Nested Grid Three</EuiFlexItem>
                <EuiFlexItem>Nested Grid Four</EuiFlexItem>
              </EuiFlexGrid>
            </ConduitCard>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </ConduitPage>
  );
}
