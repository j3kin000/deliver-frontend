import React, { Fragment } from "react";
import Logo from "./assets/images/logo-delivery.svg";
import { tokens, useMode } from "./utils/theme";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@mui/material";
import { useRoutes } from "react-router";
import Router from "./router/Router";

const App = () => {
  const [theme] = useMode();
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
