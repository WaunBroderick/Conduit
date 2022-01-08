import React from "react";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/globalStyles";

export default function Organization() {
  return (
    <ConduitPage>
      <EuiEmptyPrompt title={<span>Organization Screen</span>} />
    </ConduitPage>
  );
}
