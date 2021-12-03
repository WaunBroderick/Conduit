import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { createUser, login } from "../../reducers/user";
import createUserAccount from "./UserAPI";

import axios from "../api-interceptor";

export default function loginUser(email, password) {
  const [accessToken, setAccessToken] = useState("");
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return function () {
    return axios
      .post(
        "http://localhost:5000/auth/signin",
        {
          username: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response.data.accessToken);

        axios
          .get("http://localhost:5000/auth/me", {
            headers: { Authorization: `Bearer ${response.data.accessToken}` },
          })
          .then((res) => {
            console.log(res.data);
            dispatch(
              login({
                email: res.data.email,
                organization: res.data.organization,
                name: res.data.name,
              })
            );
            console.log({ user });
          })
          .then((data) => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .then((data) => {})
      .catch((error) => {});
  };
}
