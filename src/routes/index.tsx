import { createBrowserRouter } from "react-router-dom";
import JavascriptIndex from "../components";
import Layout from "../layout";
import ErrorPage from "../pages/error";
import { appRoutes } from "./app.routes";
import { Routes } from "./routes";

const routes = createBrowserRouter([
  {
    path: Routes.base,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [...appRoutes()],
  },
  { path: "/js", element: <JavascriptIndex /> },
]);

export default routes;
