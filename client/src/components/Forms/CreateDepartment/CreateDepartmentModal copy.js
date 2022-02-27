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

import { useForm } from "react-hook-form";

import { ExitButton } from "../../../styles/themes/GlobalComponents";
import {
  ActionTitle,
  ConduitModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";

import axios from "../../../services/api-interceptor";

export default function Modal({ visible, toggle }) {
  const [value, setValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(value);

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

            <EuiForm onSubmit={handleSubmit(onSubmit)}>
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
