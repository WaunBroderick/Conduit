import {
  EuiSpacer,
  EuiFlexGroup,
  EuiTitle,
  EuiFlexItem,
  EuiButtonIcon,
  EuiAccordion,
  EuiListGroup,
  EuiListGroupItem,
  useGeneratedHtmlId,
  EuiText,
  EuiButton,
  EuiPanel,
} from "@elastic/eui";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import GenericFormModal from "../Forms/CreateDepartment/genericFormModal";

import {
  ConduitModal,
  ConduitModalContainer,
} from "../../styles/themes/GlobalComponents";

export default function Modal({
  visible,
  toggle,
  userDetails,
  allDepartments,
}) {
  //Generic form modal
  const [isOpen, setIsOpen] = useState(false);

  //Accessibility for Accordions
  const accordionDepartments = useGeneratedHtmlId({
    prefix: "userDetails",
    suffix: "deparments",
  });
  const accordionRoles = useGeneratedHtmlId({
    prefix: "userRoles",
    suffix: "roles",
  });

  //Assignment button functions
  function assignDepartment(e) {
    console.log("hello");
    setIsOpen(true);
  }

  const user = userDetails;
  return visible
    ? ReactDOM.createPortal(
        <div>
          <ConduitModalContainer>
            <ConduitModal role="dialog" aria-modal="true">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {isOpen && <GenericFormModal setIsOpen={setIsOpen} />}
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
                <EuiAccordion
                  style={{ paddingBottom: "15px" }}
                  id={accordionDepartments}
                  buttonContent="Departments"
                  extraAction={
                    <EuiButton size="s" onClick={assignDepartment}>
                      Assign A Department
                    </EuiButton>
                  }
                  paddingSize="l"
                >
                  <EuiPanel>
                    <EuiText size="s">
                      {userDetails.departments.map((deparment, i) => (
                        <p key={i}>{deparment}</p>
                      ))}
                    </EuiText>
                  </EuiPanel>
                </EuiAccordion>
                <EuiAccordion
                  style={{ paddingBottom: "10px" }}
                  id={accordionRoles}
                  buttonContent="Roles"
                  extraAction={<EuiButton size="s">Assign A Role</EuiButton>}
                  paddingSize="l"
                >
                  <EuiPanel>
                    <EuiText size="s">
                      {userDetails.departments.map((deparment, i) => (
                        <p key={i}>{deparment}</p>
                      ))}
                    </EuiText>
                  </EuiPanel>
                </EuiAccordion>
              </EuiFlexGroup>
            </ConduitModal>
            <div className="modal-overlay"></div>
          </ConduitModalContainer>
        </div>,
        document.body
      )
    : null;
}
