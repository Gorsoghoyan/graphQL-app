import { Suspense } from "react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/abstracts/reset.scss";

export default function App() {
  return (
    <Suspense fallback={<div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...............</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}