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
  EuiButtonIcon,
  EuiIcon,
  EuiButton,
  EuiBreadcrumbs,
} from "@elastic/eui";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SubHeaderStyled, LinkStyled } from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/themes/LightTheme";
import profileAction from "../../redux/reducers/profile/profile.action";

// Themeing
import _ from "lodash";
import { useTheme } from "../../styles/themes/useTheme";
import { getFromLS } from "../../utils/storage";

export default function NavBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies("auth-cookie");
  const [redirect, setRedirect] = useState(false);

  const themesFromStore = getFromLS("all-themes");
  const [themeData, setThemeData] = useState(themesFromStore.data);
  const [toggleThemeOn, setToggleThemeOn] = useState(false);
  const [themes, setThemes] = useState([]);
  const [DarkMode, setDarkMode] = useState(false);
  const { setMode } = useTheme();

  const breadcrumbs = [
    {
      text: "Animals",
      href: "#",
      onClick: (e) => {
        e.preventDefault();
      },
      "data-test-subj": "breadcrumbsAnimals",
    },
    {
      text: "Reptiles",
    },
    {
      text: "Boa constrictor",
      href: "#",
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: "Edit",
      href: "#",
      onClick: (e) => {
        e.preventDefault();
      },
    },
  ];

  const themeSwitcher = (selectedTheme) => {
    console.log(selectedTheme);
    setMode(selectedTheme);
    //props.setter(selectedTheme);
    console.log("should be changed");
  };

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
                <LinkStyled to="/Courses">Courses</LinkStyled>,
                <LinkStyled to="/Organization">Organization</LinkStyled>,
                <LinkStyled to="/Marketplace">Marketplace</LinkStyled>,
                <themeToggle />,
              ],
              borders: "none",
            },

            {
              items: [
                <EuiButton
                  iconType={toggleThemeOn ? "moon" : "starFilledSpace"}
                  onClick={(theme) => {
                    if (DarkMode === false) {
                      setToggleThemeOn((isOn) => !isOn);
                      setDarkMode((prevDarkMode) => !prevDarkMode);
                      console.log("THAT");
                      themeSwitcher(themeData.light);
                      window.location.reload();
                    } else {
                      setToggleThemeOn((isOn) => !isOn);
                      setDarkMode((prevDarkMode) => !prevDarkMode);
                      console.log("THIS");
                      themeSwitcher(themeData.seaWave);
                      window.location.reload();
                    }
                  }}
                >
                  {toggleThemeOn ? "Dark Mode" : "Light Mode"}
                </EuiButton>,
                <HeaderUserMenu />,
              ],
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
              items: [
                <EuiBreadcrumbs
                  breadcrumbs={breadcrumbs}
                  truncate={false}
                  aria-label="An example of EuiBreadcrumbs"
                />,
              ],
            },
          ]}
        />
      </ThemeProvider>
    </>
  );
}
