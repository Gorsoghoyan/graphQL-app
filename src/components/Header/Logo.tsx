import { Text } from "../";
import { memo } from "react"
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { BiLogoGraphql } from "react-icons/bi";
import styles from "../../assets/styles/components/header.module.scss"; 

function Logo() {
  return (
    <Link to={ROUTES.CHARACTERS} className={styles.logo}>
      <BiLogoGraphql />
      <Text as="span">GraphQL</Text>
    </Link>
  );  
}

export default memo(Logo);