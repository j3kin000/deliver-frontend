import { Avatar, Divider, Drawer, List, styled, useTheme } from "@mui/material";
import { FC } from "react";
import { appRoutes } from "../../router/appRoutes";
import { drawerWidth } from "../../utils/utils";
import DeliveryLogo from "./DeliveryLogo";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

type SidebarProps = {
  open: boolean;
  handleDrawer: () => void;
  ismediumscreen: boolean;
};
const Sidebar: FC<SidebarProps> = ({ open, ismediumscreen, handleDrawer }) => {
  const theme = useTheme();

  return (
    <Drawer
      onClose={handleDrawer}
      sx={{
        height: 0,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
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
      <List disablePadding>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.children ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
