import React, { Fragment } from "react";
import Logo from "./assets/images/logo-delivery.svg";
import { tokens, useMode } from "./utils/theme";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "@mui/material";

const Page = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Fragment>
      <img
        src={Logo}
        alt=""
        style={{ backgroundColor: colors.blueAccent[100], width: "300px" }}
      />
    </Fragment>
  );
};
const App = () => {
  const [theme] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  );
};

export default App;
