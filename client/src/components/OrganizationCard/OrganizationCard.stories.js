import React from "react";

import OrganizationCard from "./OrganizationCard";

export default {
  component: OrganizationCard,
  title: "Organization Card",
};

const Template = (args) => <OrganizationCard />;

export const Default = Template.bind({});
Default.args = {
  organizationCard: {
    id: "1",
    name: "Gyroscopic Inc",
    state: "Active",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  organizationCard: {
    ...Default.args.organizationCard,
    state: "pinned",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  organizationCard: {
    ...Default.args.organizationCard,
    state: "archived",
  },
};
