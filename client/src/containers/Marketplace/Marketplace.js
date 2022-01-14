import React from "react";

import { EuiEmptyPrompt } from "@elastic/eui";
import { ConduitPage } from "../../styles/themes/GlobalComponents";

export default function Marketplace() {
  return (
    <ConduitPage>
      <EuiEmptyPrompt title={<span>Marketplace Screen</span>} />
    </ConduitPage>
  );
}
