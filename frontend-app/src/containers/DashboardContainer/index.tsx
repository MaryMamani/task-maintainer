import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { DashboardContainerStyle, ContentBoxStyle } from "./style";

const DashboardContainer = () => {
  return (
    <Box sx={DashboardContainerStyle}>
      <Sidebar />
      <Box sx={ContentBoxStyle}>
        <h1> dashboard</h1>
        <Outlet />
      </Box>
    </Box>
  );
};
export default DashboardContainer;
