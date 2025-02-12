import { createBrowserRouter } from "react-router-dom";
import JavascriptIndex from "../components";
import Layout from "../layout";
import ErrorPage from "../pages/error";
import { Routes } from "./routes";
import { topicRoutes } from "./topics.routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [...topicRoutes()],
  },
  { path: "/js", element: <JavascriptIndex /> },
]);

export default routes;
