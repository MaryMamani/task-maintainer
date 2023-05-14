import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import AppNavigator from "../../routes/AppNavigator";

const AppContainer = () => (
  <BrowserRouter>
    <Container maxWidth={false} disableGutters data-testid="app-container">
      <AppNavigator />
    </Container>
  </BrowserRouter>
);

export default AppContainer;
