import { Divider, Drawer, List, styled, useTheme } from "@mui/material";
import { FC, useContext } from "react";
import { appRoutes } from "../../router/appRoutes";
import { drawerWidth } from "../../utils/utils";
import DeliveryLogo from "./DeliveryLogo";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";
import { logout } from "../../api/endpoint";
import { AppContext } from "../../contexts/AppContext.tsx/AppContext";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "../../contexts/ColorModeContext/ColorModeContext";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

type SidebarProps = {
  open: boolean;
  handleDrawer: () => void;
  ismediumscreen: number;
};
const Sidebar: FC<SidebarProps> = ({ open, ismediumscreen, handleDrawer }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log("data", response);
      if (response.success) {
        dispatch({ type: "LOGOUT", payload: "" });
        localStorage.removeItem("access_token");
        if (theme.palette.mode === "dark") {
          colorMode?.toggleColorMode();
        }
        navigate("/");
        return;
      }
    } catch (error) {
      console.log((error as string) || "Network failed!");
    }
  };
  return (
    <Drawer
      onClose={handleDrawer}
      sx={{
        height: "100%",
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "sidebar.background",
        },
      }}
      variant={ismediumscreen ? "temporary" : "persistent"}
      anchor="left"
      open={open}
    >
      <DrawerHeader sx={{ justifyItems: "center", alignItems: "center" }}>
        <DeliveryLogo />
      </DrawerHeader>
      <Divider />
      <List
        disablePadding
        sx={{
          height: "100%",
        }}
      >
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.children ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
        <SidebarItem isLogoutBtn={true} handleLogout={handleLogout} />
      </List>
    </Drawer>
  );
};

export default Sidebar;
