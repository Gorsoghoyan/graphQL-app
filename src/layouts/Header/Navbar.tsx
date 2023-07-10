import { ListView } from "../../components";
import { NavbarProps } from "../../types";
import { navbarItems } from "../../configs";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import styles from "../../assets/styles/layouts/header.module.scss";
import classnames from "classnames";

export default function Navbar({
  isNavExpanded,
  handleMenuClose
}: NavbarProps) {
  return (
    <nav
      className={classnames(styles.navbar, {
        [styles.expanded]: isNavExpanded
      })}
      onClick={handleMenuClose}
    >
      <div 
        className={styles.navmenu} 
        onClick={(e) => e.stopPropagation()}
      >
        <MenuHeader onClick={handleMenuClose} />
        <ListView
          variant="navbar"
          items={navbarItems}
          render={(item) => (
            <MenuItem 
              path={item.path}
              title={item.title}
              Icon={item.Icon}
              onClick={handleMenuClose}
            />
          )}
        />
      </div>
    </nav>
  );
}