import { EuiSpacer } from "@elastic/eui";
import React from "react";
import ReactDOM from "react-dom";

import { BasicThemedButton } from "../../../styles/themes/GlobalComponents";
import {
  ActionTitle,
  ConduitModal,
  ConduitModalContainer,
} from "../../../styles/themes/GlobalComponents";

const Modal = ({ visible, toggle }) =>
  visible
    ? ReactDOM.createPortal(
        <ConduitModalContainer>
          <ConduitModal role="dialog" aria-modal="true">
            <ActionTitle>Create A New Department</ActionTitle>
            <EuiSpacer />
            <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus
              nulla nulla rem. Soluta illo et asperiores numquam earum nesciunt.
              Vero odio voluptatem sunt sunt laboriosam.
            </p>
            <EuiSpacer />
            <div>
              <BasicThemedButton type="button" onClick={toggle}>
                Close
              </BasicThemedButton>
            </div>
          </ConduitModal>
          <div className="modal-overlay"></div>
        </ConduitModalContainer>,
        document.body
      )
    : null;

export default Modal;
