import React, { useEffect, useState } from "react";
import {
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiSpacer,
  EuiAvatar,
  EuiTitle,
  EuiPanel,
  EuiStat,
  EuiIcon,
  EuiFlexGrid,
} from "@elastic/eui";

import theme from "../../styles/themes/LightTheme";

import { ConduitPage } from "../../styles/themes/GlobalComponents";

import Calendar from "react-calendar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <ConduitPage>
      <EuiFlexGroup>
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

      <EuiSpacer />

      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem grow={1}>
          <EuiFlexGroup
            gutterSize="l"
            style={{ padding: "12px", height: "800px" }}
          >
            <EuiCard>
              <EuiTitle>
                <h2>Courses</h2>
              </EuiTitle>
            </EuiCard>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexGrid gutterSize="l" style={{ padding: "12px" }}>
          <EuiFlexItem grow={false}>
            <EuiCard style={{ maxHeight: 200 }}>
              <Calendar onChange={onChange} value={value} />
            </EuiCard>
            <EuiSpacer />
            <EuiFlexItem>
              <EuiCard>
                <EuiTitle>
                  <h2>Notifications</h2>
                </EuiTitle>
              </EuiCard>
            </EuiFlexItem>
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiFlexGroup>
    </ConduitPage>
  );
}
