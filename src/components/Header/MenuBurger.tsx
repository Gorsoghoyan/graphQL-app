import { memo } from "react";
import { Button } from "../";
import { MenuBurgerProps } from "../../types";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; 
import styles from "../../assets/styles/components/header.module.scss";

function MenuBurger({ handleMenuToggle }: MenuBurgerProps) {
  return (
    <Button variant="menuBurger" onClick={handleMenuToggle}>
      <HiOutlineMenuAlt3 className={styles.menuIcon} />
    </Button>
  );
}

export default memo(MenuBurger);