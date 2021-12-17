import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    pureWhite: "#FFFFFF",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    smokeWhite: "#F5F5F5",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
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

export default theme;
