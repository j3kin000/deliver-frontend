import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { drawerWidth } from "../../utils/utils";
import { Box } from "@mui/material";
import { tokens } from "../../utils/theme";
import { ColorModeContext } from "../../contexts/ColorModeContext/ColorModeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  ismediumscreen?: number;
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
  ismediumscreen: number;
};
const Topbar: React.FC<TopbarProps> = ({
  open,
  ismediumscreen,
  handleDrawer,
}) => {
  const theme = useTheme();
  const { colorMode } = useContext(ColorModeContext);
  return (
    <AppBar
      position="fixed"
      open={open}
      color="inherit"
      ismediumscreen={ismediumscreen}
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid rgba(0,0,0,.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box display={"flex"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={colorMode?.toggleColorMode}
            edge="start"
            sx={{ mr: 2 }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
