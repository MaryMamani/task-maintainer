import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardContainer from "../../containers/DashboardContainer";
import Finished from "../../pages/Finished";
import { Home } from "../../pages/Home";
import InProgress from "../../pages/InProgress";

const AppNavigator = () => (
  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="dashboard" element={<DashboardContainer />}>
      <Route path="open" element={<InProgress />} />
      <Route path="close" element={<Finished />} />
    </Route>
  </Routes>
);

export default AppNavigator;
