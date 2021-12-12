import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { Link, Redirect } from "react-router-dom";
import { login } from "../../redux/reducers/user";
import StyledSection from "./style";
import "@elastic/eui/dist/eui_theme_light.css";

import axios from "../../services/api-interceptor";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();

    const fetchAuth = axios
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
          })
          .then((data) => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .then((data) => {})
      .catch((error) => {});
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="home" />;
  }

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
            <EuiForm onSubmit={(e) => submit(e)}>
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
              <p>
                go home <Link to="/home">HERE</Link>.
              </p>
            </EuiText>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </StyledSection>
  );
}
