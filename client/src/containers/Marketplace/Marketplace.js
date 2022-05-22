import React from "react";
import { useQuery, queryClient, QueryClientProvider } from "react-query";

import { useSelector, useDispatch } from "react-redux";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

export default function Marketplace() {
  //Set user Profile
  const user = useSelector((state) => state.profile);

  return (
    <ConduitPage>
      <EuiEmptyPrompt title={<span>Marketplace Screen</span>} />
      <div>
        <ul></ul>
      </div>
      <h1>{user.profile.name}</h1>
    </ConduitPage>
  );
}
