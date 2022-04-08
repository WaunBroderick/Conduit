import React from "react";
import Button from "./Button";

const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return <Button onClick={themeToggler}>Switch Theme ☀️ 🌙</Button>;
};

export default ThemeToggler;
