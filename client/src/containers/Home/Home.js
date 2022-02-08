import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EuiEmptyPrompt } from "@elastic/eui";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";

import { ConduitPage } from "../../styles/themes/GlobalComponents";

export default function Home() {
  //const dispatch = useDispatch();
  //const { isLoading, profile, errorMessage } = useSelector(
  //  (state) => state.profile
  //);

  useEffect(() => {
    //dispatch(loadProfileAsync());
  }, []);

  return (
    <ConduitPage>
      <EuiEmptyPrompt title={<span>Home Screen</span>} />
    </ConduitPage>
  );
}
