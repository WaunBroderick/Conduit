import React from "react";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

export default function User() {
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt title={<span>User Screen</span>} />
    </EuiPageTemplate>
  );
}
