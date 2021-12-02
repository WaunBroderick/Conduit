import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../reducers/user";
import createUserAccount from "./UserAPI";

const axios = require("axios");

export default function createOragnization(
  organization,
  name,
  email,
  password
) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return function () {
    return axios
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
        dispatch(createUser({ organization: response.data }));
        createUserAccount(name, email, user.organization, password);
      });
  };
}

export async function findOrganizaton(organization) {
  console.log("made it here too");
}
