import React from "react";

import { ReviewPage } from "./Reviewpage";
import * as ReviewPageStories from "./ReviewPage.stories";

export default {
  title: "Laura/ReviewPage",
  component: ReviewPage,
};

const Template = (args) => <ReviewPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...ReviewPageStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...ReviewPageStories.LoggedOut.args,
};
