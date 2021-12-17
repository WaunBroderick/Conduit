import React from "react";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

export default function Organization() {
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt title={<span>Organization Screen</span>} />
    </EuiPageTemplate>
  );
}
