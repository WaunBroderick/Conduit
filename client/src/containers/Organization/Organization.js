import React, { useState } from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiFlexGrid,
  EuiCard,
  EuiPanel,
  EuiStat,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiButton,
} from "@elastic/eui";

import { ConduitPage } from "../../styles/themes/GlobalComponents";

import GenericFormModal from "../../components/Forms/CreateDepartment/genericFormModal";
import * as z from "zod";

import * as departmentApi from "../../services/departmentsApi";
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

console.log("hello world");

export default function Organization() {
  const { data } = useQuery("departments", departmentApi.getDepartments);
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
    <ConduitPage>
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
                <h1>Organization Name</h1>
              </EuiTitle>
              <EuiText>Heres some org info</EuiText>
            </EuiCard>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />

        <div style={{ maxWidth: "80%" }}>
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
              {data?.map((department) => (
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
  );
}
