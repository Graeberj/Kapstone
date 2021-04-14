import React from 'react';

import { Favoriteheader } from './Favoriteheader';

export default {
  title: 'Laura/Favoriteheader',
  component: Favoriteheader,
};

const Template = (args) => <Favoriteheader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
