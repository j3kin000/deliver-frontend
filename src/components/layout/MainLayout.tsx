import { Box, Toolbar, styled, useTheme } from "@mui/material";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Topbar from "../global/Topbar";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar, { DrawerHeader } from "../global/Sidebar";
import { drawerWidth, useScreenSize } from "../../utils/utils";
import { AppContext } from "../../contexts/AppContext.tsx/AppContext";
import { tokens } from "../../utils/theme";
import { checkAuth } from "../../api/endpoint";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  ismediumscreen?: number;
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
  const navigate = useNavigate();
  const { ismediumscreen } = useScreenSize();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAuth = async () => {
      setLoading(true);
      try {
        const response = await checkAuth(); // Replace with your authentication check logic
        if (!response.success) {
          console.log("response.success", response);
          navigate("/login");
          setLoading(false);
          return;
        }
      } catch (error) {
        console.log("ERRORRRRR", error);
        localStorage.removeItem("access_token");
        navigate("/login");
      }
      setLoading(false);
    };

    fetchAuth();
  }, []);

  const handleDrawer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "background.default",
      }}
    >
      {!loading && (
        <>
          <Topbar
            open={open}
            handleDrawer={handleDrawer}
            ismediumscreen={ismediumscreen ? 1 : 0}
          />
          <Sidebar
            open={open}
            handleDrawer={handleDrawer}
            ismediumscreen={ismediumscreen ? 1 : 0}
          />
          <Main open={open} ismediumscreen={ismediumscreen ? 1 : 0}>
            {/* <Toolbar /> */}
            <DrawerHeader />
            <Outlet />
          </Main>
        </>
      )}
    </Box>
  );
};

export default MainLayout;
