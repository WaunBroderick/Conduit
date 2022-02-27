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

import Modal from "../../components/Forms/CreateDepartment/CreateDepartmentModal";
import useModal from "../../components/Forms/CreateDepartment/useModal";

import * as api from "../../services/departmentsApi";
import { useQuery } from "react-query";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Organization() {
  const { data } = useQuery("departments", api.getDepartments);
  const { toggle, visible } = useModal();

  return (
    <ConduitPage>
      <Modal visible={visible} toggle={toggle} />
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
                onClick={toggle}
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
                    >
                      <EuiIcon type="clock" color="accent" />
                    </EuiStat>
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
