import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { drawerWidth } from "../../utils/utils";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  ismediumscreen?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, ismediumscreen }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: ismediumscreen ? `100%` : `calc(100% - ${drawerWidth}px)`,
    marginLeft: ismediumscreen ? "0px" : `-${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type TopbarProps = {
  open: boolean;
  handleDrawer: () => void;
  ismediumscreen: boolean;
};
const Topbar: React.FC<TopbarProps> = ({
  open,
  ismediumscreen,
  handleDrawer,
}) => {
  return (
    <AppBar position="fixed" open={open} ismediumscreen={ismediumscreen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
