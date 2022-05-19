import { gql } from "@apollo/client";

export const LOAD_ORGANIZATION = gql`
  query Organization($organizationId: String!) {
    organization(id: $organizationId) {
      _id
      name
    }
  }
`;
