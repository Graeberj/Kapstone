import React from "react";

import { Input } from "./Input";

export default {
  title: "Laura/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
