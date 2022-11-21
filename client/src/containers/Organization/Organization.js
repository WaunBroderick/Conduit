import React, { useState } from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiCard,
  EuiPanel,
  EuiStat,
  EuiTitle,
  EuiText,
  EuiButton,
} from "@elastic/eui";

import { ConduitPage } from "../../styles/themes/GlobalComponents";

import GenericFormModal from "../../components/Forms/genericFormModal";
import * as z from "zod";

import { useCookies } from "react-cookie";

import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/NavBar/SideBar";

export default function Organization() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);

  const departments = useSelector((state) => state.departments.departments);

  //Generic form modal
  const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(["atuhCookie"]);

  //Department creation interface
  const [GFMzObject, setGFMzObject] = useState({});
  const [GFMtitle, setGFMtitle] = useState("");
  const [GFMdata, setGFMdata] = useState("");
  const [GFMform, setGFMform] = useState({
    name: "test",
    test: "name",
    thing: "sure",
  });

  function createDepartment(e) {
    setGFMzObject({
      name: z.string().min(10, { message: "Required" }),
      organization: z.string().min(10, { message: "Required" }),
    });
    setGFMtitle("Create a Department");
    setGFMform({ name: "name" });
    setIsOpen(true);
  }

  return (
    <>
      <SideBar />
      <ConduitPage>
        <NavBar />
        {isOpen && (
          <GenericFormModal
            setIsOpen={setIsOpen}
            title={GFMtitle}
            formData={GFMform}
            zObject={GFMzObject}
          />
        )}
        <EuiFlexGroup gutterSize="l" style={{ padding: "12px" }}>
          <EuiFlexGroup
            style={{
              padding: "12px",
              overflow: "auto",
              width: "500px",
              maxWidth: "400px",
            }}
          >
            <EuiFlexItem>
              <EuiCard
                image="https://source.unsplash.com/400x200/?Water"
                style={{ height: 900 }}
              >
                <EuiTitle>
                  <h1>orgname placeholder</h1>
                </EuiTitle>
                <EuiText>Heres some org info</EuiText>
              </EuiCard>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />

          <div style={{ maxWidth: "80%", minWidth: "80%" }}>
            <div style={{ display: "flex" }}>
              <EuiFlexItem style={{ float: "left", display: "inline-block" }}>
                <EuiTitle>
                  <h2>Departments</h2>
                </EuiTitle>

                <EuiButton
                  iconSide="right"
                  fill
                  size="s"
                  onClick={createDepartment}
                  iconType="plus"
                  style={{
                    maxWidth: "300px",
                    float: "right",
                    display: "inline-block",
                    padding: 20,
                  }}
                >
                  Create Department
                </EuiButton>
              </EuiFlexItem>
            </div>
            <div style={{ overflowY: "hidden" }}>
              <EuiFlexGroup
                gutterSize="l"
                style={{
                  padding: "12px",
                }}
              >
                {departments?.map((department) => (
                  <EuiFlexItem grow={1} style={{ minWidth: "300px" }}>
                    <EuiPanel>
                      <EuiStat
                        title="11"
                        description={department.name}
                        textAlign="right"
                      ></EuiStat>
                    </EuiPanel>
                  </EuiFlexItem>
                ))}
              </EuiFlexGroup>
            </div>
          </div>
        </EuiFlexGroup>
      </ConduitPage>
    </>
  );
}
