import React from "react";
import { useQuery, queryClient, QueryClientProvider } from "react-query";

import { useSelector, useDispatch } from "react-redux";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

import * as api from "../../services/organizations";

export default function Marketplace() {
  //Set user Profile
  const user = useSelector((state) => state.profile);

  const { data, isLoading, isError, error } = useQuery(
    "users",
    api.getOrganizations
  );

  if (isLoading) {
    return "Loading Organizations...";
  }

  if (isError) {
    return "Something went Wrong!";
  }

  return (
    <ConduitPage>
      <EuiEmptyPrompt title={<span>Marketplace Screen</span>} />
      <div>
        <ul>
          {data?.map((organization) => (
            <li key={organization.id}>{organization.name} </li>
          ))}
        </ul>
      </div>
      <h1>{user.profile.name}</h1>
    </ConduitPage>
  );
}
