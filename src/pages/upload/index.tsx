import React from "react";
import { UploadFiles } from "features/upload-files";
import { Page } from "shared/ui/page";
import { PageHeader } from "shared/ui/page-header";

const UploadPage = () => {
  return (
    <Page>
      <PageHeader title="Upload" />
      <UploadFiles />
    </Page>
  );
};

export default UploadPage;
