import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// Elastic UI Imports
import {
  EuiFieldPassword,
  EuiText,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSpacer,
  EuiButton,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";

// Style Imports
import StyledSection from "./style";
import { axiosInstanceNoJWT } from "../../services/api-interceptor";

export default function Register() {
  const [showErrors, setShowErrors] = useState(true);

  // Registration Information
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const regUser = axiosInstanceNoJWT
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
        console.log(response);
        axiosInstanceNoJWT
          .post(
            "http://localhost:5000/users",
            {
              name: name,
              email: email,
              organization: response.data,
              password: password,
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            console.log(res.data);
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
            title="Register Your Organization"
            description="Example of a card's description. Stick to one or two sentences."
            betaBadgeProps={{
              label: "Sign Up",
              tooltipContent:
                "Fill out the inforamtion below and click Sign Up to create your Conduit Account.",
            }}
            onClick={() => {}}
          >
            <EuiForm onSubmit={submit}>
              <EuiFormRow label="Organization Name">
                <EuiFieldText
                  name="organization"
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </EuiFormRow>

              <EuiFormRow label="Email Address">
                <EuiFieldText
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EuiFormRow>

              <EuiFormRow label="Personal Name">
                <EuiFieldText
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </EuiFormRow>

              <EuiFormRow label="Create Password">
                <EuiFieldPassword
                  placeholder="Placeholder text"
                  onChange={(e) => setPassword(e.target.value)}
                  type="dual"
                />
              </EuiFormRow>

              <EuiFormRow label="Confirm Password">
                <EuiFieldPassword placeholder="Placeholder text" type="dual" />
              </EuiFormRow>

              <EuiSpacer />

              <EuiButton type="submit" fill onClick={(e) => submit(e)}>
                Sign-Up
              </EuiButton>
            </EuiForm>

            <EuiSpacer />

            <EuiText>
              <p>
                If you already have an account please{" "}
                <Link to="/signin">Sign-In</Link>.
              </p>
            </EuiText>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </StyledSection>
  );
}
