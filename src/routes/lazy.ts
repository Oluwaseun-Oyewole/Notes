import { lazy } from "react";

export const lazyLoadRoutes = (page: string) =>
  lazy(() => import(`../pages/${page}/index.tsx`));

export const Topics = lazyLoadRoutes("topics");
export const TopicsDetails = lazyLoadRoutes("topicsDetails");
export const SubTopics = lazyLoadRoutes("subTopics");
