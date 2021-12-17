import React from "react";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

export default function Home() {
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <EuiEmptyPrompt title={<span>Home Screen</span>} />
    </EuiPageTemplate>
  );
}
