import Logo from "./Logo";
import Navbar from "./Navbar";
import MenuBurger from "./MenuBurger";
import { useHeader } from "../../hooks";
import styles from "../../assets/styles/components/header.module.scss";

export default function Header() {
  const { isNavExpanded, handleMenuToggle } = useHeader();

  return (
    <header className={styles.header}>
      <Logo />
      <Navbar 
        isNavExpanded={isNavExpanded} 
        handleMenuToggle={handleMenuToggle} 
      />
      <MenuBurger handleMenuToggle={handleMenuToggle} />
    </header>
  );
}