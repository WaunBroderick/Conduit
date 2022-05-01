import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($loginCredentials: LoginUserInput!) {
    loginUser(loginUserInput: $loginCredentials) {
      access_token
    }
  }
`;

export const LOAD_USERS = gql`
  query Users {
    users {
      firstName
      lastName
      email
      online
      organization {
        name
        address
        logo
        country
      }
    }
  }
`;
