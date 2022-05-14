import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($loginCredentials: LoginUserInput!) {
    loginUser(loginUserInput: $loginCredentials) {
      access_token
      user {
        _id
        firstName
        lastName
        email
        online
        organization {
          _id
          name
          address
          logo
          country
        }
        assignments {
          _id
          name
          course {
            _id
            name
          }
        }
      }
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

export const LOAD_USER = gql`
  query ($id: String!) {
    user(id: $id) {
      _id
      firstName
      lastName
      email
      online
      organization {
        _id
        name
      }
      assignments {
        _id
        name
      }
    }
  }
`;
