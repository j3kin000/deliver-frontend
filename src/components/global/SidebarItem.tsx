import React, { FC } from "react";
import { RouteType } from "../../router/config";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

type SidebarItemProps = {
  item: RouteType;
};
const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
  // const {appState} = useSelector((state:RootState) => rootstate.appState)
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&:hover": { backgroundColor: "green" },
        // backgroundColor: appState === item.state ? "orange": "unset",
        paddingY: "12px",
        paddingX: " 24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: "violet",
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : (
    <></>
  );
};

export default SidebarItem;
