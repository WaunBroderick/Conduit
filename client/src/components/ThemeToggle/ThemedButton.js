import React, { useContext } from "react";
import StyledButton from "./StyledButton";
import { ThemeContext } from "styled-components";

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton bgColor={theme.colors.plum} color={theme.colors.white}>
      I am a themed button 😜
    </StyledButton>
  );
};

export default ThemedButton;
