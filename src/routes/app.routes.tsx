import { Navigate, RouteObject } from "react-router-dom";
import { SubTopics, Topics, TopicsDetails } from "./lazy";
import { Routes } from "./routes";

export const appRoutes = () => {
  return [
    {
      path: Routes.base,
      element: <Topics />,
    },
    {
      path: Routes.topicsDetails,
      element: <TopicsDetails />,
    },

    {
      path: Routes.subTopics,
      element: <SubTopics />,
    },
    { path: Routes.base, element: <Navigate to={Routes.base} replace /> },
  ] as RouteObject[];
};
