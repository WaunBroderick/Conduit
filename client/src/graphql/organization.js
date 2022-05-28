import { gql } from "@apollo/client";

export const LOAD_ORGANIZATION = gql`
  query Organization($organizationId: String!) {
    organization(id: $organizationId) {
      _id
      name
    }
  }
`;

export const LOAD_ORGANIZATION_DEPARTMENTS = gql`
  query DepartmentFindByOrgId($orgId: String!) {
    departmentFindByOrgId(orgId: $orgId) {
      _id
      name
    }
  }
`;
