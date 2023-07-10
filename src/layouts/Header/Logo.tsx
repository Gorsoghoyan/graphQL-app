import { Text } from "../../components";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { BiLogoGraphql } from "react-icons/bi";
import styles from "../../assets/styles/layouts/header.module.scss";

export default function Logo() {
  return (
    <Link to={ROUTES.CHARACTERS} className={styles.logo}>
      <BiLogoGraphql />
      <Text as="span">Rick & Morty</Text>
    </Link>
  );  
}