import React from 'react';

import { Button } from './ThumbsUpbutton';

export default {
  title: 'Laura/ThumbsUpbutton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'See it!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'See it!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'See it!',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'See it!',
};
