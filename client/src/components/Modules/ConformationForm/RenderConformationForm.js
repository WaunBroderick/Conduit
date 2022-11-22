import React, { Fragment } from "react";

import {
  EuiCard,
  EuiButton,
  EuiFlexGroup,
  EuiText,
  EuiTextAlign,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiButtonIcon,
} from "@elastic/eui";

import {
  ConduitCard,
  MainTitle,
  LightSubTitle,
  FullScreenConduitCard,
  AddItemButton,
} from "../../../styles/themes/GlobalComponents";

import { GlobalStyles } from "../../../styles/themes/GlobalComponents";

const RenderConformationForm = ({ content }) => {
  return (
    <Fragment>
      <EuiFlexGroup style={{ paddingBottom: "100px", paddingTop: "20px" }}>
        <EuiText grow={false}>
          <EuiTextAlign textAlign="center">
            <h1>{content.name}</h1>
            <h2>Type of Content: {content.type}</h2>
            <p>{content.description}</p>
            {Object.keys(content.material).map((keyName, i) => (
              <p className="travelcompany-input" key={i}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.material.textBlurb,
                  }}
                />
              </p>
            ))}
            {content.approved ? (
              <div>
                <h1>placeholder for possible functionality.</h1>
              </div>
            ) : (
              <div>
                <p>
                  Do you approve the terms as stated in the document outline
                  above?
                </p>

                <EuiButton onClick={() => {}} iconType="check">
                  Accept
                </EuiButton>
                <EuiButton fill onClick={() => {}} iconType="cross">
                  Reject
                </EuiButton>
              </div>
            )}
          </EuiTextAlign>
        </EuiText>
      </EuiFlexGroup>
    </Fragment>
  );
};

export default RenderConformationForm;
