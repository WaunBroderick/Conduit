import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  EuiCard,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiButtonIcon,
} from "@elastic/eui";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

import { Layout } from "../../layout";

import {
  ConduitPage,
  AddItemButton,
} from "../../styles/themes/GlobalComponents";

export default function Courses(props) {
  return (
    <Layout>
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
    </Layout>
  );
}
