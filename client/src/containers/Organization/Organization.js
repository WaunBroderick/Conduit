import React from "react";

import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiFlexGrid,
  EuiCard,
} from "@elastic/eui";
import { ConduitPage, ConduitCard } from "../../styles/globalStyles";

import OrganizationCard from "../../components/OrganizationCard/OrganizationCard";

export default function Organization() {
  return (
    <ConduitPage>
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
                <EuiFlexItem>Nested Grid One</EuiFlexItem>
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
