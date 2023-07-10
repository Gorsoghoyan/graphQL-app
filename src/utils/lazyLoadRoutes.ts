import { lazy } from "react";

export const lazyLoadRoutes = (routeName: string) => {
  return lazy(() => import("../pages").then((module: any) => (
    { default: module[routeName] }
  )));
};