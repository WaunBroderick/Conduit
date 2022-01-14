import styled from "styled-components";
import { EuiCard, Eui, EuiButtonIcon } from "@elastic/eui";
import theme from "./themes/LightTheme";

const MainTitle = styled.h1`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.medium};
  margin: 0.5em;
`;

const DarkSubTitle = styled.h2`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.small};
  margin: 0.2em;
`;

const LightSubTitle = styled.h2`
  color: ${theme.colors.subText};
  font-size: ${theme.fontSizes.small};
  margin: 0.2em;
`;

const ConduitPage = styled.div`
  margin-top: 6em;
  margin-left: 2em;
  margin-right: 2em;
`;

const FullScreenConduitCard = styled(EuiCard)`
  padding: 5em;
  margin: 1em;
  height: 80vh;
`;
const ConduitCard = styled(EuiCard)`
  padding: 5em;
  margin: 1em;
`;

//Buttons
const AddItemButton = styled(EuiButtonIcon)`
  border-radius: 50px;
  background-color: red;
`;

export {
  ConduitPage,
  LightSubTitle,
  ConduitCard,
  MainTitle,
  DarkSubTitle,
  FullScreenConduitCard,
  AddItemButton,
};
