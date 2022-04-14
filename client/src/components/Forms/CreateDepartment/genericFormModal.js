import {
  EuiFlexItem,
  EuiButtonIcon,
  EuiTitle,
  EuiSpacer,
  EuiButton,
} from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  ConduitGenericFormModal,
  ConduitModalContainer,
  ConduitForm,
  ConduitInput,
  ConduitInputLabel,
  ConduitErrorMessage,
} from "../../../styles/themes/GlobalComponents";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";

//Apis
import * as api from "../../../services/departmentsApi";

const GenericFormModal = ({ setIsOpen, zObject, title, formData }) => {
  const schema = z.object(zObject);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    organization: "61ac2c65dbccc6e0226de8db",
  });

  //ReactQuery
  const { isLoading, mutate, isSuccess } = useMutation(api.createDepartment);

  const organization = "61ac2c65dbccc6e0226de8db";

  //const onSubmit = (data) => mutate(data);
  const onSubmit = (data) => {
    console.log(data);
    //console.log("cat");
    mutate(data);
  };
  //const onSubmit = (e) => console.log("made it here");

  if (isSuccess) {
    //window.location.reload();
    setIsOpen(false);
  }
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
            <EuiFlexItem
              grow={false}
              style={{ marginRight: "-90px", marginTop: "-15px" }}
            >
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
            <ConduitForm onSubmit={handleSubmit(onSubmit)}>
              {Object.keys(formData).map(function (key, index) {
                return (
                  <div key={index}>
                    <ConduitInputLabel>
                      {key}
                      <ConduitInput name={key} {...register(key)} />
                      {errors.name?.message && (
                        <ConduitErrorMessage>
                          {errors.name?.message}
                        </ConduitErrorMessage>
                      )}
                    </ConduitInputLabel>
                  </div>
                );
              })}
              <input
                key={1}
                name="organization"
                value="61ac2c65dbccc6e0226de8db"
                type="hidden"
                {...register("organization")}
              />
              <EuiButton
                fill
                type="submit"
                style={{
                  maxWidth: "300px",
                  padding: 20,
                }}
              >
                submit
              </EuiButton>
            </ConduitForm>
          </center>
        </ConduitGenericFormModal>
        <div className="modal-overlay"></div>
      </ConduitModalContainer>
    </>
  );
};

export default GenericFormModal;
