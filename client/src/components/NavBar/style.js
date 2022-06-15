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

const SideBarDiv = styled.div`
  position: fixed;
  height: 100%;
  width: 200px;
  z-index: 1;
  background-color: #ffffff;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export { SubHeaderStyled, LinkStyled, SideBarDiv };
