import { lazyLoadRoutes } from "../utils/lazyLoadRoutes";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../utils/constants";

import Layout from "./Layout";

const Characters = lazyLoadRoutes("Characters");
const Character = lazyLoadRoutes("Character");
const Episodes = lazyLoadRoutes("Episodes");
const Locations = lazyLoadRoutes("Locations");

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            path: ROUTES.CHARACTERS,
            element: <Characters />
          },
          {
            path: ROUTES.EPISODES,
            element: <Episodes />
          },
          {
            path: ROUTES.LOCATIONS,
            element: <Locations />
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