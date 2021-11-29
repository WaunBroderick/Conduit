import React, { useState } from "react";

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

import { Route, Link } from "react-router-dom";

import StyledSection from "./style";

import "@elastic/eui/dist/eui_theme_light.css";

export default function SignIn() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    const respone = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setRedirect(true);
  };

  function renderForm() {
    return (
      <div>
        <h1>Helllo</h1>
      </div>
    );
  }

  return (
    <StyledSection>
      <EuiFlexGroup justifyContent="spaceAround">
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
            <EuiForm>
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
                  type="dual"
                />
              </EuiFormRow>

              <EuiSpacer />

              <EuiButton type="submit" fill onClick={submit}>
                Sign-In
              </EuiButton>
            </EuiForm>

            <EuiSpacer />

            <EuiText>
              <p>
                If you don`&apos;`t yet have an account please{" "}
                <Link to="/register">Sign Up</Link>.
              </p>
            </EuiText>
          </EuiCard>
        </EuiFlexItem>
      </EuiFlexGroup>
    </StyledSection>
  );
}
