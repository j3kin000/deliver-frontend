import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainRoutes } from "./routes";
import { Login } from "./appRoutes";
import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";
import useAuthentication from "../utils/hooks/IsAuthenticated";
import { useEffect } from "react";

const Router = () => {
  const isAuthenticated = useAuthentication();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route
          path=""
          element={<Navigate to={isAuthenticated ? "login" : "/dashboard"} />}
        />
      </Route>

      <Route path="/" element={<MainLayout />}>
        {MainRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
