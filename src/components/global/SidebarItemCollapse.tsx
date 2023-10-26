import { FC, useState } from "react";
import { RouteType } from "../../router/config";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { appRoutes } from "../../router/appRoutes";
import SidebarItem from "./SidebarItem";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);
  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": { backgroundColor: "green" },
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
        <ListItemText
          disableTypography
          primary={<Typography> {item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout={"auto"}>
        <List>
          {item?.children?.map((route, index) =>
            route.sidebarProps ? (
              route.children ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
