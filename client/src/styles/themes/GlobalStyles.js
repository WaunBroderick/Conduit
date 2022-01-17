import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    /*font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;*/
  }

  a {
  }

#euiCard{
    background-color: ${({ theme }) => theme.colors.cards.background};
  }

.ConduitAddButtton{
  border-radius: 100px;
}
.ConduitAddButtton:hover{
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary.mainActive};
}

  .EuiCard{
    background-color: #1064EA;
  }

  .modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
  background: #fff;
  border: 2px solid #aaa;
  border-radius: 5px;  
  z-index: 999;
  max-width: 420px;
  margin: auto;
  padding: 1em 2em 2em;
  position: relative;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #000;
  opacity: 0.10;
}


`;
