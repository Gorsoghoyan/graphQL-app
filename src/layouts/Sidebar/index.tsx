import { SidebarProps } from "../../types";
import styles from "../../assets/styles/layouts/sidebar.module.scss";

export default function Sidebar({
  children
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {children}
    </aside>
  );
}