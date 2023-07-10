import Logo from "./Logo";
import Navbar from "./Navbar";
import { useHeader } from "../../hooks";
import { Button } from "../../components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import styles from "../../assets/styles/layouts/header.module.scss";

export default function Header() {
  const { isNavExpanded, handleMenuToggle } = useHeader();

  return (
    <header className={styles.header}>
      <Logo />
      <Navbar
        isNavExpanded={isNavExpanded}
        handleMenuClose={() => handleMenuToggle(false)}
      />
      <Button
        variant="circle"
        onClick={() => handleMenuToggle(true)}
      >
        <HiOutlineMenuAlt3 />
      </Button>
    </header>
  );
}