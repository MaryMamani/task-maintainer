import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
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
      main: "#c40b16",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
);

export default App;
