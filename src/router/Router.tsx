import { Navigate, Route, Routes } from "react-router-dom";
import { MainRoutes } from "./routes";
import AuthLayout from "../components/layout/AuthLayout";

const Router = () => {
  return <Routes>{MainRoutes}</Routes>;
};

export default Router;
