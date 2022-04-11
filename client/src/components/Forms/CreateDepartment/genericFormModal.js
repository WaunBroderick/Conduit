import { EuiFlexItem, EuiButtonIcon, EuiTitle, EuiSpacer } from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  ConduitGenericFormModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const GenericFormModal = ({ setIsOpen, zObject, title, formData }) => {
  console.log(formData);
  const schema = z.object({
    name: z.string().min(10, { message: "Required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = console.log("hello");

  return (
    <>
      <ConduitModalContainer>
        <ConduitGenericFormModal role="dialog" aria-modal="true">
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
                onClick={() => setIsOpen(false)}
              />
            </EuiFlexItem>
          </div>
          <center>
            <EuiTitle>
              <h1>{title}</h1>
            </EuiTitle>
            <EuiSpacer />
            <EuiSpacer />
            <form onSubmit={handleSubmit(onSubmit)}>
              {Object.keys(formData).map(function (key, index) {
                return (
                  <div>
                    <p>
                      {key}
                      {index}
                    </p>
                    <input name={key} {...register(key)} />
                  </div>
                );
              })}
              <input type="submit" />
            </form>
          </center>
        </ConduitGenericFormModal>
        <div className="modal-overlay"></div>
      </ConduitModalContainer>
    </>
  );
};

export default GenericFormModal;
