import { Suspense } from "react";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { LazyLoading } from "./components";
import "./assets/styles/app.scss";

export default function App() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}