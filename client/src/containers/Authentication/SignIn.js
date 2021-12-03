import React, { useState } from "react";
import { useSelector } from "react-redux";

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

import loginUser from "../../services/Authentication/AuthenticateAPI";

import StyledSection from "./style";

import "@elastic/eui/dist/eui_theme_light.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const user = useSelector((state) => state.user.value);

  const submit = async (e) => {
    e.preventDefault();
    loginUser(email, password);

    setRedirect(true);
  };

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
                />
              </EuiFormRow>

              <EuiSpacer />

              <EuiButton
                type="submit"
                fill
                onClick={loginUser(email, password)}
              >
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
