import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AppContainer from "./containers/AppContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005691",
    },
    secondary: {
      main: "#299237",
    },
    info: {
      main: "#febf00",
    },
    success: {
      main: "#ff7603",
    },
    error: {
      main: "#3f3434",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
);

export default App;
