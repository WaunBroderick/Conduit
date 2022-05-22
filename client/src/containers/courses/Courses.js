import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";

import {
  ConduitPage,
  AddItemButton,
} from "../../styles/themes/GlobalComponents";

import NavBar from "../../components/NavBar/NavBar";

export default function Courses() {
  return (
    <ConduitPage>
      <NavBar />

      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiSpacer />
          <EuiCard>
            <EuiFlexItem grow={false}>
              <h1>Courses</h1>
            </EuiFlexItem>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </ConduitPage>
  );
}
