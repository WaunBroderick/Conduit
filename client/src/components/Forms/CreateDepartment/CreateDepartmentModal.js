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

import * as api from "../../../services/departmentsApi";

import {
  ConduitModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";
import { QueryClient, useMutation } from "react-query";

const schema = z.object({
  name: z.string().min(10, { message: "Required" }),
});

export default function Modal({ visible, toggle }) {
  //React HookForms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  //ReactQuery
  const { isLoading, mutate, isSuccess } = useMutation(api.createDepartment);

  if (isSuccess) {
    //window.location.reload();
  }

  const name = "WaunLandian";
  const organization = "61c36c42ad95a9d99a9ea844";
  const admins = ["TOM", "JERRY"];
  const onSubmit = (data) => mutate({ name, organization, admins });

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="name" {...register("name")} />
              {errors.name?.message && <p>{errors.name?.message}</p>}
              <input type="submit" />
            </form>
          </ConduitModal>
          <div className="modal-overlay"></div>
        </ConduitModalContainer>,
        document.body
      )
    : null;
}
