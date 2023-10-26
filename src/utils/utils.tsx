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
  const issmallscreen = useMediaQuery(theme.breakpoints.down("sm"));
  const ismediumscreen = useMediaQuery(theme.breakpoints.down("md"));
  const islargescreen = useMediaQuery(theme.breakpoints.down("lg"));

  return { issmallscreen, ismediumscreen, islargescreen };
};

export const drawerWidth = 240; // Replace with the actual drawer width
