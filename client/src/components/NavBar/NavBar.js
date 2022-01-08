import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiPopover,
} from "@elastic/eui";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SubHeaderStyled, LinkStyled } from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/themes/LightTheme";
import profileAction from "../../redux/reducers/profile/profile.action";

export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies("auth-cookie");
  const [redirect, setRedirect] = useState(false);

  const HeaderUserMenu = () => {
    const headerUserPopoverId = useGeneratedHtmlId({
      prefix: "headerUserPopover",
    });
    const [isOpen, setIsOpen] = useState(false);

    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    const logOut = () => {
      console.log("youre logged out");
      removeCookie("auth-cookie", { path: "/" });
      window.location.href = "/signin";
      Redirect(true);
      return false;
    };

    if (redirect) {
      return <Redirect to="/signin" />;
    }

    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerUserPopoverId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={onMenuButtonClick}
      >
        <EuiAvatar name={profile.name} size="s" />
      </EuiHeaderSectionItemButton>
    );

    return (
      <EuiPopover
        id={headerUserPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
        panelPaddingSize="none"
      >
        <div style={{ width: 320 }}>
          <EuiFlexGroup
            gutterSize="m"
            className="euiHeaderProfile"
            responsive={false}
          >
            <EuiFlexItem grow={false}>
              <EuiAvatar name="John Username" size="xl" />
            </EuiFlexItem>

            <EuiFlexItem>
              <EuiText>
                <p>John Username</p>
              </EuiText>

              <EuiSpacer size="m" />

              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem to="/Profile" grow={false}>
                      <Link to="/Profile">Edit Profile</Link>
                    </EuiFlexItem>

                    <EuiFlexItem grow={false} onClick={logOut}>
                      Log out
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </EuiPopover>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <EuiHeader
          position="fixed"
          sections={[
            {
              items: [
                <EuiHeaderLogo key="first" iconType="logoElastic">
                  <Link to="/Home">Conduit</Link>
                </EuiHeaderLogo>,

                <LinkStyled to="/Users">Users</LinkStyled>,
                <LinkStyled to="/Users">Courses</LinkStyled>,
                <LinkStyled to="/Organization">Organization</LinkStyled>,
                <LinkStyled to="/Marketplace">Marketplace</LinkStyled>,
              ],
              borders: "none",
            },
            {
              items: [<HeaderUserMenu />],
              borders: "none",
            },
          ]}
        />
        <SubHeaderStyled
          theme="default"
          position="fixed"
          size="xs"
          sections={[
            {
              items: [],
            },
          ]}
        />
      </ThemeProvider>
    </>
  );
}
