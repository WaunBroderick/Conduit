import React, { useEffect, useState } from "react";

// Load all of state storage
import { useSelector, useDispatch } from "react-redux";
import { loadProfileAsync } from "../../redux/reducers/profile/profile.thunk";
import { loadUsersAsync } from "../../redux/reducers/users/users.thunk";
import { loadDepartmentsAsync } from "../../redux/reducers/departments/departments.thunk";

import {
  EuiFieldPassword,
  EuiForm,
  EuiFormRow,
  EuiText,
  EuiFieldText,
  EuiSpacer,
  EuiButton,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import StyledSection from "./style";
import "@elastic/eui/dist/eui_theme_light.css";

import { axiosInstanceNoJWT } from "../../services/api-interceptor";

import { useQuery, useMutation } from "@apollo/client";
import { LOAD_USER, LOAD_USERS, LOGIN_USER } from "../../graphql/authentiation";

import { ToastError, ToastSuccess } from "../../services/api-interceptor";
import { LOAD_ORGANIZATION } from "../../graphql/organization";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [JWT, setJWT] = useState("");
  const [cookies, setCookie] = useCookies("authCookie");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isLoading, profile, errorMessage } = useSelector(
    (state) => state.profile
  );

  const [validateUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      ToastError(error);
    },
  });
  const { err, dat } = useQuery(LOAD_USER, {
    variables: {},
  });

  const submit = async (e) => {
    e.preventDefault();

    const verifyUser = validateUser({
      variables: {
        loginCredentials: {
          email: email,
          password: password,
        },
      },
    })
      .then((response) => {
        setJWT(response.data.access_token);
        setCookie("authCookie", response.data.access_token, { path: "/" });
        console.log("HELLLLLO");
        console.log(response.data.loginUser.user);
        dispatch(loadProfileAsync(response.data.loginUser.user));
        setRedirect(true);
      })
      .then((data) => {})
      .catch((error) => {});
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  const createCookie = () => {};

  return (
    <StyledSection>
      <EuiFlexGroup justifyContent="spaceAround" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiCard
            icon={<EuiIcon size="s" type="dashboardApp" />}
            title="Sign In"
            description="Example of a card's description. Stick to one or two sentences."
            betaBadgeProps={{
              label: "Sign In",
              tooltipContent:
                "Fill out the inforamtion below and click Sign Up to create your Conduit Account.",
            }}
            onClick={() => {}}
          >
            <EuiForm onSubmit={(e) => validateUser(e)}>
              <EuiFormRow label="Email Address">
                <EuiFieldText
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EuiFormRow>

              <EuiFormRow label="Create Password">
                <EuiFieldPassword
                  placeholder="Placeholder text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </EuiFormRow>

              <EuiSpacer />

              <EuiButton type="submit" fill onClick={(e) => submit(e)}>
                Sign-In
              </EuiButton>
            </EuiForm>

            <EuiSpacer />

            <EuiText>
              <p>
                If you don&apos;t yet have an account please{" "}
                <Link to="/register">Sign Up</Link>.
              </p>
            </EuiText>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </StyledSection>
  );
}
