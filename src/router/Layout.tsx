import { Fragment } from "react";
import { Header } from "../layouts";
import { Outlet } from "react-router-dom";
import styles from "../assets/styles/layouts/layout.module.scss";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </Fragment>
  );
}