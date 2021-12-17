import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiHeaderLink,
  EuiText,
  EuiPopover,
} from "@elastic/eui";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo/logoWithName.png";

import { SubHeaderStyled, LinkStyled } from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/themes/LightTheme";

export default function NavBar() {
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

    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerUserPopoverId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={onMenuButtonClick}
      >
        <EuiAvatar name="Waun Broderick" size="s" />
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
                    <EuiFlexItem grow={false}>Edit profile</EuiFlexItem>

                    <EuiFlexItem grow={false}>Log out</EuiFlexItem>
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
