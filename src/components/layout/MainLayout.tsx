import { Box, Toolbar, styled } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import Topbar from "../global/Topbar";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar, { DrawerHeader } from "../global/Sidebar";
import { drawerWidth, useScreenSize } from "../../utils/utils";
import { AppContext } from "../../contexts/AooContext.tsx/AppContext";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  ismediumscreen?: boolean;
}>(({ theme, open, ismediumscreen }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: ismediumscreen ? 0 : `-${drawerWidth}px`,
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
  const { ismediumscreen } = useScreenSize();
  const { access_token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, [access_token]);

  const handleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar
        open={open}
        handleDrawer={handleDrawer}
        ismediumscreen={ismediumscreen}
      />
      <Sidebar
        open={open}
        handleDrawer={handleDrawer}
        ismediumscreen={ismediumscreen}
      />
      <Main open={open} ismediumscreen={ismediumscreen}>
        {/* <Toolbar /> */}
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
