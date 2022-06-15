import React, { useState } from "react";
import { EuiIcon, EuiSideNav, slugify } from "@elastic/eui";
import { SideBarDiv } from "./style";

// Icons
import {
  FcBusinessman,
  FcGraduationCap,
  FcOrganization,
  FcShop,
} from "react-icons/fc";

export default function SideBar() {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);
  const [selectedItemName, setSelectedItem] = useState("Time stuff");

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const selectItem = (name) => {
    setSelectedItem(name);
  };

  const createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      id: slugify(name),
      name,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
      ...data,
    };
  };

  const sideNav = [
    createItem("Users", {
      onClick: undefined,
      icon: <FcBusinessman />,
      items: [
        createItem("Data sources"),
        createItem("Users"),
        createItem("Roles"),
        createItem("Watches"),
        createItem(
          "Extremely long title will become truncated when the browser is narrow enough"
        ),
      ],
    }),
    createItem("Courses", {
      onClick: undefined,
      icon: <FcGraduationCap />,
      items: [
        createItem("Advanced settings", {
          items: [
            createItem("General", { disabled: true }),
            createItem("Timelion", {
              items: [
                createItem("Time stuff", {
                  icon: <EuiIcon type="clock" />,
                }),
                createItem("Lion stuff", {
                  icon: <EuiIcon type="stats" />,
                }),
              ],
            }),
            createItem("Visualizations"),
          ],
        }),
        createItem("Index Patterns"),
        createItem("Saved Objects"),
        createItem("Reporting"),
      ],
    }),
    createItem("Organization", {
      onClick: undefined,
      icon: <FcOrganization />,
      items: [createItem("Pipeline viewer")],
    }),
    createItem("Marketplace", {
      onClick: undefined,
      icon: <FcShop />,
      items: [createItem("Pipeline viewer")],
    }),
  ];

  return (
    <SideBarDiv>
      <EuiSideNav
        aria-label="Complex example"
        mobileTitle="Navigate within $APP_NAME"
        toggleOpenOnMobile={toggleOpenOnMobile}
        isOpenOnMobile={isSideNavOpenOnMobile}
        items={sideNav}
        style={{
          width: 192,
          paddingLeft: 20,
          paddingTop: 100,
        }}
      />
    </SideBarDiv>
  );
}
