import styled from "styled-components";
import { EuiPageTemplate } from "@elastic/eui";

import theme from "./themes/LightTheme";

const ConduitPage = styled(EuiPageTemplate)`
  margin-top: 5em;
`;

const LightSubTitle = styled.h2`
  color: ${theme.colors.onyx};
`;

export { ConduitPage, LightSubTitle };
