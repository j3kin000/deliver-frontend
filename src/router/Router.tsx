import { Navigate, Route, Routes } from "react-router-dom";
import { MainRoutes } from "./routes";
import AuthLayout from "../components/layout/AuthLayout";
import { Login } from "./appRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="" element={<Navigate to="login" />} />
      </Route>
      {MainRoutes}
    </Routes>
  );
};

export default Router;
