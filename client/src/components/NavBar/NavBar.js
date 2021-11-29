import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
} from "@elastic/eui";
import React, { useState } from "react";

export default function NavBar() {
  const [isFixed, setIsFixed] = useState(true);

  return (
    <>
      <EuiHeader
        position={isFixed ? "fixed" : "static"}
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
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: "none",
          },
        ]}
      />
      <EuiHeader
        theme="default"
        position={isFixed ? "fixed" : "static"}
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
