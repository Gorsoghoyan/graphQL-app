import { NavLink } from "react-router-dom";
import { MenuItemProps } from "../../types";
import styles from "../../assets/styles/layouts/header.module.scss";
import classnames from "classnames";

export default function MenuItem({ 
  path, 
  title, 
  Icon, 
  onClick 
}: MenuItemProps) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) => {
        return isActive
          ? classnames(
            styles.listItem,
            styles.active
          )
          : styles.listItem
      }}
    >
      <Icon />
      {title}
    </NavLink>
  );
}