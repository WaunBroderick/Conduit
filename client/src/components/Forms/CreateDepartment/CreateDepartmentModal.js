import {
  EuiSpacer,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
} from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  BasicThemedButton,
  ExitButton,
} from "../../../styles/themes/GlobalComponents";
import {
  ActionTitle,
  ConduitModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";

import axios from "../../../services/api-interceptor";

export default function Modal({ visible, toggle }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    cons;

    const createDepartment = axios.post(
      "http://localhost:5000/deparments",
      {
        name: value,
        organization: "",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  };

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
              <ExitButton
                className="ConduitAddButtton"
                display="base"
                iconType="exit"
                iconSize="s"
                size="xs"
                aria-label="plus"
                onClick={toggle}
              />
            </div>
            <center>
              <ActionTitle>Create A New Department</ActionTitle>
            </center>
            <EuiSpacer />
            <EuiForm>
              <EuiFormRow
                label="Department Name"
                helpText="What is the name of your new department?"
              >
                <EuiFieldText
                  placeholder="Department Name"
                  value={value}
                  onChange={(e) => onChange(e)}
                  aria-label="What is the name of your new department?"
                />
              </EuiFormRow>
              <EuiButton type="submit" onClick={onFormSubmit} fill>
                Submit
              </EuiButton>
            </EuiForm>
          </ConduitModal>
          <div className="modal-overlay"></div>
        </ConduitModalContainer>,
        document.body
      )
    : null;
}
