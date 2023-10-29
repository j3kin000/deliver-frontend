import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItemButton,
  styled,
  useTheme,
} from "@mui/material";
import { FC, useContext } from "react";
import { appRoutes } from "../../router/appRoutes";
import { drawerWidth } from "../../utils/utils";
import DeliveryLogo from "./DeliveryLogo";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";
import { tokens } from "../../utils/theme";
import { logout } from "../../api/endpoint";
import { AppContext } from "../../contexts/AppContext.tsx/AppContext";

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
  const handleLogout = async () => {
    console.log("logging out");
    try {
      const response = await logout();
      console.log("data", response);
      if (response.success) {
        dispatch({ type: "LOGOUT", payload: "" });
        console.log("Access_token", localStorage.getItem("access_token"));
        localStorage.removeItem("access_token");
        return;
      }
      console.log("throw new error");
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
