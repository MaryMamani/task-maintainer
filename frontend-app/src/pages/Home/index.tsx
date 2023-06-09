import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export const Home = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <img
      src="/nuevo.svg"
      alt="Task illustration"
      style={{ height: "50%", objectPosition: "center" }}
    />
    <Typography variant="h3" sx={{ mt: 4 }}>
      Bienvenido a la aplicación Task Maintainer
    </Typography>
    <Button
      variant="contained"
      component={Link}
      to="/dashboard/open"
      sx={{ mt: 4 }}
      color="secondary"
    >
      Ir al dashboard
    </Button>
  </Box>
);
