import { useMediaQuery } from "@mui/material";
import { useMode } from "./theme";

export const getData = async (key: string) => {
  try {
    const value = "";
    if (value !== null || value !== undefined) {
      return value;
    }
  } catch (e) {}
};

export const useScreenSize = () => {
  const [theme] = useMode();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};

export const drawerWidth = 240; // Replace with the actual drawer width
