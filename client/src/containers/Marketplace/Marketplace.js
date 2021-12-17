import React from "react";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

export default function Marketplace() {
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt title={<span>Marketplace Screen</span>} />
    </EuiPageTemplate>
  );
}
