import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { EuiPageTemplate, EuiEmptyPrompt } from "@elastic/eui";

export default function Home() {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  return (
    <EuiPageTemplate
      template="centeredContent"
      pageContentProps={{ paddingSize: "none" }}
    >
      <h1>Hello end</h1>

      <EuiEmptyPrompt title={<span>Home Screen</span>} />
    </EuiPageTemplate>
  );
}
