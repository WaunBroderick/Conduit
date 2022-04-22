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
              <AddItemButton
                className="ConduitAddButtton"
                display="base"
                iconType="plus"
                iconSize="l"
                size="m"
                aria-label="plus"
              />
            </EuiFlexItem>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </ConduitPage>
  );
}
