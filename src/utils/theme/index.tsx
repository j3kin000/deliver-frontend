import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";

export type ModeType = PaletteMode;

// color design tokens export
export const tokens = (mode: ModeType) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#ffddd6",
          200: "#ffbaad",
          300: "#ff9883",
          400: "#ff755a",
          500: "#ff5331",
          600: "#cc4227",
          700: "#99321d",
          800: "#662114",
          900: "#33110a",
        },
      }
    : {
        primary: {
          900: "#ffddd6",
          800: "#ffbaad",
          700: "#ff9883",
          600: "#ff755a",
          500: "#ff5331",
          400: "#cc4227",
          300: "#99321d",
          200: "#662114",
          100: "#33110a",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode: ModeType) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            // secondary: {
            //   main: colors.greenAccent[500],
            // },
            // neutral: {
            //   dark: colors.grey[700],
            //   main: colors.grey[500],
            //   light: colors.grey[100],
            // },
            // background: {
            //   default: colors.primary[500],
            // },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            // secondary: {
            //   main: colors.greenAccent[500],
            // },
            // neutral: {
            //   dark: colors.grey[700],
            //   main: colors.grey[500],
            //   light: colors.grey[100],
            // },
            // background: {
            //   default: "#fcfcfc",
            // },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 50,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 42,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  };
};

export type ColorModeType = {
  toggleColorMode: () => void;
};

export const useMode = () => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode: ColorModeType = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
