import { MenuItem, Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarItemStyle } from "./style";
import { ChevronRight } from "@mui/icons-material";

interface SidebarItemProps {
  title: string;
  to: string;
  Icon?: React.ElementType;
}

const SidebarItem: FC<SidebarItemProps> = ({ title, to, Icon }) => (
  <MenuItem sx={SidebarItemStyle} component={Link} to={to}>
    <Box display="flex" alignItems="center">
      <Box pr={2}>{Icon && React.createElement(Icon)}</Box>
      <Typography variant="subtitle2">{title}</Typography>
    </Box>
    <ChevronRight />
  </MenuItem>
);

export default SidebarItem;
