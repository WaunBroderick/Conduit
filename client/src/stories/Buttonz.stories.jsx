import React from "react";

import { Buttonz } from "./Buttonz";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttonz",
  component: Buttonz,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Buttonz {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Buttonz",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Buttonz",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Buttonz",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Buttonz",
};
