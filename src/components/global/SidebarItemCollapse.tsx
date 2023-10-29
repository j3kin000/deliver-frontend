import { FC, useState } from "react";
import { RouteType } from "../../router/config";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarItem from "./SidebarItem";
import { tokens } from "../../utils/theme";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": { color: color.orange[500] },
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
          {item?.children?.map((route, index) => {
            return route.sidebarProps ? (
              route.children ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null;
          })}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
