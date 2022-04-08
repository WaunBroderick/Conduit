import styled from "styled-components";
import { EuiHeader } from "@elastic/eui";
import { Link } from "react-router-dom";
import theme from "../../styles/themes/LightTheme";

const SubHeaderStyled = styled(EuiHeader)`
  height: 35px;
  background-color: ${theme.colors.smokeWhite};
`;

const LinkStyled = styled(Link)`
  padding: 20px;
  color: ${theme.colors.onyx};
  text-decoration: none;
  &:hover {
    color: black;
    font-size: ${theme.fontSizes.smallActive};
  }
`;

export { SubHeaderStyled, LinkStyled };
