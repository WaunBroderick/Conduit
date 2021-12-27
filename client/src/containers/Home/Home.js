import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, profile, errorMessage } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(loadProfileAsync());
  }, []);

  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt title={<span>Home Screen</span>} />
    </EuiPageTemplate>
  );
}
