import { lazy } from "react";

export const lazyLoadRoutes = (componentName: string)=> {
  return lazy(() => import("../pages").then((module: any) => (
    { default: module[componentName] }
  )));
};