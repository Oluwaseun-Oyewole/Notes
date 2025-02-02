import { lazy } from "react";

export const lazyLoadRoutes = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const Home = lazyLoadRoutes("blogs");
export const Details = lazyLoadRoutes("blogDetails");
export const SubDetails = lazyLoadRoutes("blogSubDetails");
