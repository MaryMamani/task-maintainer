import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import BoardHeader from "./components/BoardHeader";
import { DashboardContainerStyle, ContentBoxStyle } from "./style";

const DashboardContainer = () => {
  return (
    <Box sx={DashboardContainerStyle}>
      <Sidebar />
      <Box sx={ContentBoxStyle}>
        <BoardHeader />
        <Outlet />
      </Box>
    </Box>
  );
};
export default DashboardContainer;
