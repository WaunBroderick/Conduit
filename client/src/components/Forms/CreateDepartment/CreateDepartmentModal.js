import {
  EuiSpacer,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiTitle,
  EuiFlexItem,
  EuiButtonIcon,
} from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";

import {
  ConduitModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";

const schema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
});

export default function Modal({ visible, toggle }) {
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
                <h1>New Department</h1>
              </EuiTitle>
            </center>
            <EuiSpacer />
          </ConduitModal>
          <div className="modal-overlay"></div>
        </ConduitModalContainer>,
        document.body
      )
    : null;
}
