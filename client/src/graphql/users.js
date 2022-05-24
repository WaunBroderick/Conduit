import { gql } from "@apollo/client";

export const LOAD_ORG_USERS = gql`
  query UsersByOrg($usersByOrgId: String!) {
    usersByOrg(id: $usersByOrgId) {
      _id
      firstName
      lastName
      email
    }
  }
`;
