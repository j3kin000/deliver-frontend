import { Box } from "@mui/material";
import React, { FC, ReactNode, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AooContext.tsx/AppContext";

export type AuthLayoutProps = {
  children?: ReactNode;
};
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { access_token } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (access_token) {
      navigate("/dashboard");
    }
  }, [access_token]);

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
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
