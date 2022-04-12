import styled from "styled-components";
import { EuiCard, Eui, EuiButtonIcon } from "@elastic/eui";
import theme from "./LightTheme";
import { GlobalStyles } from "./GlobalStyles";

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.title};
  font-size: ${theme.fontSizes.medium};
  margin: 0.5em;
`;

const ActionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
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
  margin-left: 5em;
  margin-right: 5em;
  padding-top: 8em;
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

const AddItemButton = styled(EuiButtonIcon)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 100;
  color: ${({ theme }) => theme.colors.white};
`;

const BasicThemedButton = styled.button`
  font-size: 1.25rem;
  border: none;
  border-radius: 0px;
  padding: 10px;
`;

const ExitButton = styled(EuiButtonIcon)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 100;
  color: ${({ theme }) => theme.colors.white};
`;

const ExitButton2 = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100;
  padding: 1px;
  margin: 1px;
  border-radius: 100%;
`;

// Conduit Modals
const ConduitModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConduitModal = styled.div`
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;
  z-index: 500;
  max-width: 420px;
  margin: auto;
  padding: 1em 2em 2em;
  position: relative;
  min-width: 65%;
  min-height: 65%;
`;

const ConduitGenericFormModal = styled.div`
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;
  z-index: 999;
  max-height: 50%;
  max-width: 100%;
  padding: 1em 2em 2em;
  min-width: 900px;
  min-height: 500px;
`;

const closeModal = styled.button``;

export {
  ExitButton,
  ConduitPage,
  LightSubTitle,
  ConduitCard,
  MainTitle,
  DarkSubTitle,
  FullScreenConduitCard,
  AddItemButton,
  BasicThemedButton,
  closeModal,
  ActionTitle,
  ConduitModal,
  ConduitModalContainer,
  ConduitGenericFormModal,
};
