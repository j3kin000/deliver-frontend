import { Route, Routes } from "react-router-dom";
import { MainRoutes } from "./routes";
import { Login } from "./appRoutes";
import AuthLayout from "../components/layout/AuthLayout";
import MainLayout from "../components/layout/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="" element={<Login />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        {MainRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
