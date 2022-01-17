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

import {
  ConduitPage,
  AddItemButton,
} from "../../styles/themes/GlobalComponents";

export default function Courses(props) {
  const dispatch = useDispatch();
  const { isLoading, profile, errorMessage } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(loadProfileAsync());
  }, []);

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
