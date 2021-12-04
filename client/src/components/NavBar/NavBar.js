import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
} from "@elastic/eui";
import { useSelector } from "react-redux";
import React, { useState } from "react";

export default function NavBar() {
  const user = useSelector((state) => state.user.value);

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
            items: [
              <EuiHeaderSectionItemButton
                key="second"
                aria-label="Account menu"
              >
                <EuiAvatar name={user.name} size="s" />
              </EuiHeaderSectionItemButton>,
            ],
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
