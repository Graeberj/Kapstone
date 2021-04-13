import React from 'react';

import { Button } from './ThumbsDownbutton';

export default {
  title: 'Laura/ThumbsDownbutton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Skip it!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Skip it!',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Skip it!',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Skip it!',
};
