import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";

import {
  ConduitPage,
  AddItemButton,
} from "../../styles/themes/GlobalComponents";

export default function Courses() {
  return (
    <ConduitPage>
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
