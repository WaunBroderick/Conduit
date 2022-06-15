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

const ConduitInput = styled.input`
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.subTitle};
  border-left: 0;
  display: block;
  padding: 0.5rem 0.75rem;
  width: 70%;
  font-size: 1rem;
  line-height: 1.25;
  background-image: none;
  background-clip: padding-box;
`;

const ConduitInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  touch-action: manipulation;
`;

const ConduitErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.status.error};
`;

const ConduitPage = styled.div`
  margin-left: 15em;
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
  display: "flex";
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;
  z-index: 999;
  max-height: 50%;
  max-width: 100%;
  padding: 2em 7em 3em;
`;

const closeModal = styled.button``;

const ConduitForm = styled.form``;

export {
  ExitButton,
  ConduitErrorMessage,
  ConduitPage,
  LightSubTitle,
  ConduitInput,
  ConduitInputLabel,
  ConduitCard,
  MainTitle,
  DarkSubTitle,
  FullScreenConduitCard,
  AddItemButton,
  BasicThemedButton,
  closeModal,
  ActionTitle,
  ConduitModal,
  ConduitForm,
  ConduitModalContainer,
  ConduitGenericFormModal,
};
