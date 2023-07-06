import { ListView } from "../";
import { NavLink } from "react-router-dom";
import { navbarItems } from "../../configs";
import { NavbarProps } from "../../types/components";
import styles from "../../assets/styles/components/header.module.scss";
import sassVariables from "../../assets/styles/abstracts/variables.scss";
import classnames from "classnames";

export default function Navbar({ 
  isNavExpanded,
  handleMenuToggle
}: NavbarProps) {
  return (
    <nav className={classnames(styles.navbar, {
      [styles.expanded]: isNavExpanded
    })}>
      <div className={styles.navmenu}>
        <ListView
          variant="navbar"
          items={navbarItems}
          render={(item) => (
            <NavLink
              to={item.path}
              className={styles.listItem}
              style={({ isActive }) => ({
                color: isActive
                  ? sassVariables.appColor1
                  : "white"
              })}
              onClick={handleMenuToggle}
            >
              <item.Icon />
              {item.title}
            </NavLink>
          )}
        />
      </div>
    </nav>
  );
}