import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const axios = require("axios");

export default async function createOragnization(organization) {
  const post = await axios
    .post(
      "http://localhost:5000/organizations",
      {
        name: organization,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(JSON.stringify(response.data));
    });
}

export async function findOrganizaton(organization) {
  const query = useQuery("organizations", ({ signal }) =>
    axios.get("http://localhost:5000/organizations", {
      signal,
    })
  );
}
