import { Box, List } from "@mui/material";
import React from "react";
import { sidebarItems } from "../../utilities/constants/sidebarConstants";
import SidebarItem from "./components/SidebarItem";
import { SidebarStyle, SidebarBoxStyle } from "./style";

const Sidebar = () => (
  <Box sx={SidebarStyle}>
    <Box sx={SidebarBoxStyle}>
      <Box component="img" alt="logo-sidebar" src={"/name.png"} />
      <Box style={{ flex: 1 }}>
        <List>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              title={item.title}
              Icon={item.Icon}
              to={item.linkToNavigate}
              key={index}
            />
          ))}
        </List>
      </Box>
    </Box>
  </Box>
);

export default Sidebar;
