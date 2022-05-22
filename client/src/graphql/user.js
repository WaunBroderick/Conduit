import { gql } from "@apollo/client";

export const LOAD_USER_ASSIGNMENTS = gql`
  query AssignmentByUserId($assignmentByUserId: String!) {
    assignmentByUserId(id: $assignmentByUserId) {
      _id
      name
      completion
      dueDate
      organization {
        _id
        name
      }
      course {
        _id
        name
      }
      user {
        _id
      }
    }
  }
`;
