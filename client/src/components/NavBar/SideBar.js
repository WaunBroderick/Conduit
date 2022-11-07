import React, { useState, useCallback } from "react";
import { EuiIcon, EuiSideNav, slugify } from "@elastic/eui";
import { SideBarDiv } from "./style";
import { Link, useNavigate } from "react-router-dom";

// Icons
import {
  FcBusinessman,
  FcGraduationCap,
  FcOrganization,
  FcShop,
} from "react-icons/fc";

export default function SideBar() {
  const navigate = useNavigate();
  const testClick = useCallback(
    () => navigate("/Courses", { reaplce: true }),
    [navigate]
  );
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
      onClick: useCallback(
        () => navigate("/Users", { reaplce: true }),
        [navigate]
      ),
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
      onClick: useCallback(
        () => navigate("/Courses", { reaplce: true }),
        [navigate]
      ),
      icon: <FcGraduationCap />,
      items: [
        createItem("Advanced settings", {
          items: [
            createItem("General", { disabled: true }),
            createItem("Timelion", {
              items: [
                createItem("Time stuff", {
                  icon: <EuiIcon type="clock" />,
                  onClick: () => {
                    console.log("YYAAAAAAAAAY");
                  },
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
        createItem("Saved Objects", {
          onClick: useCallback(
            () => navigate("/Courses", { reaplce: true }),
            [navigate]
          ),
        }),

        createItem("Reporting"),
      ],
    }),
    createItem("Organization", {
      onClick: useCallback(
        () => navigate("/Organization", { reaplce: true }),
        [navigate]
      ),
      icon: <FcOrganization />,
      items: [createItem("Settings")],
    }),
    createItem("Marketplace", {
      onClick: useCallback(
        () => navigate("/Marketplace", { reaplce: true }),
        [navigate]
      ),
      icon: <FcShop />,
      items: [createItem("Browse Courses"), createItem("Submit A Course")],
    }),
    createItem("Testing", {
      onClick: useCallback(
        () => navigate("/Testing", { reaplce: true }),
        [navigate]
      ),
      icon: <FcShop />,
      items: [],
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
