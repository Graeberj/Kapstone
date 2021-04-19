import React from 'react';

import { BreadcrumbsHeader } from './BreadcrumbsHeader';

export default {
  title: 'Laura/BreadcrumbsHeader',
  component: BreadcrumbsHeader,
};

const Template = (args) => <BreadcrumbsHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};