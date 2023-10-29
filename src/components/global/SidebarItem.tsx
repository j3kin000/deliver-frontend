import { FC } from "react";
import { RouteType } from "../../router/config";
import { ListItemButton, ListItemIcon, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../utils/theme";
import LogoutIcon from "@mui/icons-material/Logout";

type SidebarItemProps = {
  item?: RouteType;
  isLogoutBtn?: boolean;
  handleLogout?: () => void;
};
const SidebarItem: FC<SidebarItemProps> = ({
  item,
  isLogoutBtn,
  handleLogout,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (item) {
    return item.sidebarProps && item.path ? (
      <ListItemButton
        component={Link}
        to={item.path}
        sx={{
          "&:hover": { color: colors.orange[500] },
          "&.MuiListItemButton-root": {
            position: isLogoutBtn ? "absolute" : "relative",
            bottom: isLogoutBtn ? 10 : 0,
            // Add any other styles you want to apply to the root of ListItemButton
          },
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
  }
  return isLogoutBtn ? (
    <ListItemButton
      onClick={handleLogout}
      sx={{
        width: "100%",
        "&:hover": { color: colors.orange[500] },
        "&.MuiListItemButton-root": {
          position: "absolute",
          bottom: 10,
        },

        paddingY: "12px",
        paddingX: " 24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: "violet",
        }}
      >
        <LogoutIcon
          sx={{
            color: "#ff5331",
          }}
        />
      </ListItemIcon>
      Logout
    </ListItemButton>
  ) : (
    <></>
  );
};

export default SidebarItem;
