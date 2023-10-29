import { createTheme } from "@mui/material/styles";
import { PaletteMode, ThemeOptions } from "@mui/material";
import { useMemo, useState } from "react";

export type ModeType = PaletteMode;

// color design tokens export
export const tokens = (mode: ModeType) => ({
  ...(mode === "light"
    ? {
        primary: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f8f8f8",
          400: "#f6f6f6",
          500: "#f4f4f4",
          600: "#c3c3c3",
          700: "#929292",
          800: "#626262",
          900: "#313131",
        },
        orange: {
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
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        white: {
          100: "#fcfcfe",
          200: "#f9f9fd",
          300: "#f6f6fc",
          400: "#f3f3fb",
          500: "#f0f0fa",
          600: "#c0c0c8",
          700: "#909096",
          800: "#606064",
          900: "#303032",
        },
      }
    : {
        primary: {
          900: "#fdfdfd",
          800: "#fbfbfb",
          700: "#f8f8f8",
          600: "#f6f6f6",
          500: "#f4f4f4",
          400: "#c3c3c3",
          300: "#929292",
          200: "#626262",
          100: "#313131",
        },
        orange: {
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
        grey: {
          900: "#e0e0e0",
          800: "#c2c2c2",
          700: "#a3a3a3",
          600: "#858585",
          500: "#666666",
          400: "#525252",
          300: "#3d3d3d",
          200: "#292929",
          100: "#141414",
        },
        white: {
          900: "#fcfcfe",
          800: "#f9f9fd",
          700: "#f6f6fc",
          600: "#f3f3fb",
          500: "#f0f0fa",
          400: "#c0c0c8",
          300: "#909096",
          200: "#606064",
          100: "#303032",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode: ModeType): ThemeOptions => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[100],
            },
            orange: {
              main: colors.orange[500],
            },
            secondary: {
              main: colors.grey[500],
            },
            background: {
              default: "#f0f0fa",
            },
            sidebar: {
              default: "#f0f0fa",
            },
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
            orange: {
              main: colors.grey[100],
            },
            secondary: {
              main: colors.grey[100],
            },
            background: {
              default: colors.white[100],
            },
            sidebar: {
              background: "#272627",
            },
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
  const [mode, setMode] = useState<PaletteMode>("light");
  const colorMode: ColorModeType = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );
  const theme = useMemo(
    () => createTheme(themeSettings(mode)),
    [setMode, mode]
  );

  return [theme, colorMode] as const;
};
