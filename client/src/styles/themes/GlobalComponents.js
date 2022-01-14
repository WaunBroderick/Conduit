import styled from "styled-components";
import { EuiCard, Eui, EuiButtonIcon } from "@elastic/eui";
import theme from "./LightTheme";
import { GlobalStyles } from "./GlobalStyles";

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.title};
  font-size: ${theme.fontSizes.medium};
  margin: 0.5em;
`;

const DarkSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.title};
  font-size: ${theme.fontSizes.small};
  margin: 0.2em;
`;

const LightSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.subTitle};
  font-size: ${theme.fontSizes.small};
  margin: 0.2em;
`;

const ConduitPage = styled.div`
  margin-top: 6em;
  margin-left: 2em;
  margin-right: 2em;
`;

const FullScreenConduitCard = styled(EuiCard)`
  background: "red";
  padding: 5em;
  margin: 1em;
  height: 80vh;
`;
const ConduitCard = styled(EuiCard)`
  background-color: "red";
  color: "red";
  padding: 5em;
  margin: 1em;
`;

//Buttons
const AddItemButton = styled(EuiButtonIcon)`
  border-radius: 50px;
  background-color: red;
`;

const BasicThemedButton = styled.button`
  background-color: ${(props) => props.theme.colors.primrose};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.25rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

export {
  ConduitPage,
  LightSubTitle,
  ConduitCard,
  MainTitle,
  DarkSubTitle,
  FullScreenConduitCard,
  AddItemButton,
  BasicThemedButton,
};
