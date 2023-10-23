import { Box } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export type AuthLayoutProps = {
  children?: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        pl: { xs: 2, sm: 10 },
        pt: 1,
        pr: { xs: 2, sm: 10 },
      }}
    >
      {children} <Outlet />
    </Box>
  );
};

export default AuthLayout;
