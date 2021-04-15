import React from 'react';

import { Favoritepage } from './Favoritepage';
import * as FavoriteHeaderStories from './Favoriteheader.stories';

export default {
  title: 'Laura/Favoritepage',
  component: Favoritepage,
};

const Template = (args) => <Favoritepage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...FavoriteHeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...FavoriteHeaderStories.LoggedOut.args,
};
