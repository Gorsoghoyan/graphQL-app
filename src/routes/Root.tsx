import { Fragment } from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}