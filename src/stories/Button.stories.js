import React from "react";

import { Button } from "./Button";

export default {
<<<<<<< HEAD
  title: "Laura/Button",
=======
  title: 'Example/Button',
>>>>>>> ca282638ca16eb4cefb3b514bbf3e9ab6a086eae
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
