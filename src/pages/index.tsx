import React from "react";
import { Route, Routes } from "react-router-dom";
import { useStore } from "effector-react";
import { MainRouter } from "features/main-router";
import { Login } from "features/login";
import { $user } from "shared/model/user";
import SearchPage from "./search";
import Processing from "./processing";
import ProcessingDetailsPage from "./processing-details";
import UploadPage from "./upload";

export const Routing = () => {
  const { authorize } = useStore($user);
  return (
    <Routes>
      {authorize ? (
        <Route path="/" element={<MainRouter />}>
          <Route path="/" element={<SearchPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/processing/:name" element={<ProcessingDetailsPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>
  );
};
