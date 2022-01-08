import styled from "styled-components";
import { EuiPageTemplate } from "@elastic/eui";
import theme from "./themes/LightTheme";

const LightSubTitle = styled.h2`
  color: ${theme.colors.onyx};
`;

const ConduitPage = styled.div`
  margin-top: 6em;
  margin-left: 2em;
  margin-right: 2em;
`;

export { ConduitPage, LightSubTitle };
