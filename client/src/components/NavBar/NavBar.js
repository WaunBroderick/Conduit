import {
  EuiHeader,
  EuiAvatar,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
} from "@elastic/eui";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

export default function NavBar() {
  const [isFixed, setIsFixed] = useState(true);
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <EuiHeader
        position={isFixed ? "fixed" : "static"}
        sections={[
          {
            items: [
              <EuiHeaderLogo key="first" iconType="logoElastic">
                {user.email}
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
