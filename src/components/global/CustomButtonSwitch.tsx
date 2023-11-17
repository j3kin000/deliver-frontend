import { Box, Switch, SwitchProps, Typography, styled } from "@mui/material";
import React, { FC } from "react";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(26px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#ff5331",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export type CustomButtonSwitchProps = {
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  value: boolean;
  error: string | undefined;
};
const CustomButtonSwitch: FC<CustomButtonSwitchProps> = ({
  onClickHandler,
  text,
  name,
  value,
  error,
}) => {
  console.log("VALUESS", value);
  return (
    <Box display={"flex"} justifyContent={"space-between"} mt={4}>
      <Typography>{text}</Typography>
      <Typography>{error}</Typography>

      <IOSSwitch
        value={value}
        checked={value}
        sx={{ m: 1 }}
        // defaultChecked
        onClick={onClickHandler}
        name={name}
      />
    </Box>
  );
};

export default CustomButtonSwitch;
