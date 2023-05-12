import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardContainer from "../../containers/DashboardContainer";
import { Home } from "../../pages/Home";

const AppNavigator = () => (
  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="dashboard" element={<DashboardContainer />} />
  </Routes>
);

export default AppNavigator;
