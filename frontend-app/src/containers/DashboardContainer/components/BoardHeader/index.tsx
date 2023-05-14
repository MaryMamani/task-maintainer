import { Logout, Search } from "@mui/icons-material";
import {
  Paper,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddTaskSection from "../AddTaskSection";

const BoardHeader = () => {
  return (
    <Paper sx={{ p: 3, ml: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", pb: 8 }}>
        <Typography variant="h4" color="#808082">
          Hi invitado
        </Typography>
        <Button component={Link} to="/home" data-testid="exit-button">
          <Logout />
        </Button>
      </Box>
      <AddTaskSection />
    </Paper>
  );
};

export default BoardHeader;
