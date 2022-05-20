import React from "react";
import { FilesList, SearchBar } from "features/searching";
import { Page } from "shared/ui/page";
import { PageHeader } from "shared/ui/page-header";

const SearchPage = () => {
  return (
    <Page>
      <PageHeader title="Search" />
      <SearchBar />
      <FilesList />
    </Page>
  );
};

export default SearchPage;
