import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MainRouter } from "features/main-router";

//const TestPage = lazy(() => import('./task-list'))
const SearchPage = lazy(() => import("./search"));
const UploadPage = lazy(() => import("./upload"));
const StatsPage = lazy(() => import("./processing"));
const ProcessingDetailsPage = lazy(() => import("./processing-details"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRouter />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/processing" element={<StatsPage />} />
        <Route path="/processing/:name" element={<ProcessingDetailsPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Route>
    </Routes>
  );
};
