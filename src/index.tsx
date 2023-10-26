import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ColorModeContextProvider } from "./context/ColorModeContext/ColorModeContext";
import { CssBaseline } from "@mui/material";
import { useMode } from "./utils/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//put provider here if you want to use redux

const Root = () => {
  const [theme] = useMode();
  console.log("themes", theme.breakpoints.down("md"));

  return (
    <React.StrictMode>
      <ColorModeContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ColorModeContextProvider>
    </React.StrictMode>
  );
};
root.render(<Root />);
