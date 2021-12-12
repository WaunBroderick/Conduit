import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiLink,
  EuiContextMenu,
  EuiText,
  EuiButton,
  EuiPopover,
} from "@elastic/eui";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import logo from "../../assets/img/logo/logoWithName.png";

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
                    <EuiFlexItem grow={false}>
                      <EuiLink>Edit profile</EuiLink>
                    </EuiFlexItem>

                    <EuiFlexItem grow={false}>
                      <EuiLink>Log out</EuiLink>
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
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo key="first" iconType="logoElastic">
                Conduit
              </EuiHeaderLogo>,
            ],
            borders: "none",
          },
          {
            items: [<HeaderUserMenu />],
            borders: "none",
          },
        ]}
      />
      <EuiHeader
        theme="default"
        position="fixed"
        size="xs"
        sections={[
          {
            items: [],
          },
        ]}
      />
    </>
  );
}
