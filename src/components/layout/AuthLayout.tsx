import { Box } from "@mui/material";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext.tsx/AppContext";
import useAuthentication from "../../utils/hooks/IsAuthenticated";

export type AuthLayoutProps = {
  children?: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthentication();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <Box
      sx={{
        backgroundColor: " #f0f0fa",
        flex: 1,
        height: "100vh",
        pl: { xs: 2, sm: 5, md: 2 },
        pt: 1,
        pr: { xs: 2, sm: 5, md: 2 },
      }}
    >
      {children} <Outlet />
    </Box>
  );
};

export default AuthLayout;
