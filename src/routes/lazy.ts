import { lazy } from "react";

export const lazyLoadRoutes = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const Home = lazyLoadRoutes("topics");
export const Details = lazyLoadRoutes("subTopics");
export const SubDetails = lazyLoadRoutes("topicsDetails");
