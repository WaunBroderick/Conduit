export const LOAD_ORG_USERS = gql`
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
