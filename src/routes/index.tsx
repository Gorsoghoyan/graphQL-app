import { RouteObject, createBrowserRouter } from "react-router-dom";
import { lazyLoadRoutes } from "../utils/lazyLoadRoutes";
import { ROUTES } from "../utils/constants";

import Root from "./Root";

const Characters = lazyLoadRoutes("Characters");
const Character = lazyLoadRoutes("Character");
const Todos = lazyLoadRoutes("Todos");

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        element: <Root />,
        children: [
          {
            index: true,
            path: ROUTES.CHARACTERS,
            element: <Characters />
          },
          {
            path: ROUTES.TODOS,
            element: <Todos />
          }
        ]
      },
      {
        path: `${ROUTES.CHARACTER}/:characterId`,
        element: <Character />
      }
    ]
  },
];

export const router = createBrowserRouter(routes);