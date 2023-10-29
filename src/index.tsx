import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { useMode } from "./utils/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { ColorModeContextProvider } from "./contexts/ColorModeContext/ColorModeContext";
import { AppContextProvider } from "./contexts/AppContext.tsx/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//put provider here if you want to use redux

const Root = () => {
  return (
    <React.StrictMode>
      <ColorModeContextProvider>
        <AppContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppContextProvider>
      </ColorModeContextProvider>
    </React.StrictMode>
  );
};
root.render(<Root />);
