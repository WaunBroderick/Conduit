import {
  EuiSpacer,
  EuiFlexGroup,
  EuiTitle,
  EuiFlexItem,
  EuiButtonIcon,
  EuiAccordion,
  EuiListGroup,
  EuiListGroupItem,
} from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  ConduitModal,
  ConduitModalContainer,
} from "../../styles/themes/GlobalComponents";

import { QueryClient, useMutation } from "react-query";

const schema = z.object({
  name: z.string().min(10, { message: "Required" }),
});

export default function Modal({ visible, toggle, userDetails }) {
  const user = userDetails;
  return visible
    ? ReactDOM.createPortal(
        <ConduitModalContainer>
          <ConduitModal role="dialog" aria-modal="true">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <EuiFlexItem grow={false}>
                <EuiButtonIcon
                  display="base"
                  iconType="arrowRight"
                  aria-label="Next"
                  onClick={toggle}
                />
              </EuiFlexItem>
            </div>
            <center>
              <EuiTitle>
                <h1>{user.name}</h1>
              </EuiTitle>
            </center>
            <EuiSpacer />
            <EuiFlexGroup direction="column">
              <EuiFlexItem grow={false}>Departments</EuiFlexItem>
              <EuiListGroup style={{ maxHeight: "100px", overflowY: "auto" }}>
                <EuiListGroupItem onClick={() => {}} label="First item" />

                <EuiListGroupItem onClick={() => {}} label="Second item" />

                <EuiListGroupItem
                  onClick={() => {}}
                  label="Third item"
                  isActive
                />

                <EuiListGroupItem
                  onClick={() => {}}
                  label="Fourth item"
                  isDisabled
                />
              </EuiListGroup>
              <EuiFlexItem grow={false}>Courses</EuiFlexItem>
              <EuiFlexItem grow={false}>Using the column direction</EuiFlexItem>
            </EuiFlexGroup>
          </ConduitModal>
          <div className="modal-overlay"></div>
        </ConduitModalContainer>,
        document.body
      )
    : null;
}
