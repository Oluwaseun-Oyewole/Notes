import { Navigate, RouteObject } from "react-router-dom";
import Testing from "../pages/testing";
import { Details, Home, SubDetails } from "./lazy";
import { Routes } from "./routes";

export const appRoutes = () => {
  return [
    {
      path: Routes.base,
      element: <Home />,
    },
    {
      path: Routes.details,
      element: <Details />,
    },

    {
      path: Routes.subDetails,
      element: <SubDetails />,
    },
    {
      path: Routes.testing,
      element: <Testing />,
    },
    { path: Routes.base, element: <Navigate to={Routes.base} replace /> },
  ] as RouteObject[];
};
