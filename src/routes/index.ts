import { RouteObject, createBrowserRouter } from "react-router-dom";

import {
} from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
  }
];

export const router = createBrowserRouter(routes);