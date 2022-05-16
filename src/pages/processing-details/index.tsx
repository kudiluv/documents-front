import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "features/processing-details";
import { Page } from "shared/ui/page";
import { PageHeader } from "shared/ui/page-header";

const ProcessingDetailsPage = () => {
  const { name = "" } = useParams();
  return (
    <Page>
      <PageHeader title={`Processing ${name}`} subtitle="Detail info." />
      <Table name={name} />
    </Page>
  );
};

export default ProcessingDetailsPage;
