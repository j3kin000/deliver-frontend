import { Box, Toolbar, styled } from "@mui/material";
import React from "react";
import Topbar from "../global/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar, { DrawerHeader } from "../global/Sidebar";
import { drawerWidth, useScreenSize } from "../../utils/utils";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  isMediumScreen?: boolean;
}>(({ theme, open, isMediumScreen }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: isMediumScreen ? 0 : `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainLayout = () => {
  const [open, setOpen] = React.useState(false);
  const { isMediumScreen } = useScreenSize();
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar
        open={open}
        handleDrawer={handleDrawer}
        isMediumScreen={isMediumScreen}
      />
      <Sidebar
        open={open}
        handleDrawer={handleDrawer}
        isMediumScreen={isMediumScreen}
      />
      <Main open={open} isMediumScreen={isMediumScreen}>
        {/* <Toolbar /> */}
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
