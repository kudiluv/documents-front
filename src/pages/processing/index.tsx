import React from "react";
import { List } from "features/queues";
import { Page } from "shared/ui/page";
import { PageHeader } from "shared/ui/page-header";

const SearchPage = () => {
  return (
    <Page>
      <PageHeader
        title="Processing"
        subtitle="Overview of processing queues."
      />
      <List />
    </Page>
  );
};

export default SearchPage;
