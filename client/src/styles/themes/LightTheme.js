import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const lightTheme = {
  background: "#fff",
  color: "#1d1f28",
  buttonBg: "#c5718d",
  colors: {
    primary: {},
    secondary: {},
    tertiary: {},
    status: {
      success: "#56C596",
      warning: "#FFCF5C",
      error: "#D63131",
    },
    black: "#0000",
    pureWhite: "#FFFFFF",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    smokeWhite: "#F5F5F5",
    text: "#2D3436",
    subText: "#636E72",
    error: "#D63131",
    plum: "#52314b",
    rose: "#c3537d",
    dryrose: "#dd7f9a",
    primrose: "#e8babf",
    white: "#fff",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    tiny: ".5em",
    small: "1em",
    smallActive: "1.05em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default lightTheme;
