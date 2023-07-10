import { Text } from "../../components";
import { OnClick } from "../../types";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../assets/styles/layouts/header.module.scss";

export default function MenuHeader({ onClick }: OnClick) {
  return (
    <div className={styles.navmenuHeader}>
      <div className={styles.flex}>
        <AiOutlineClose
          onClick={onClick}
        />
        <Text as="h2">Menu</Text>
      </div>
      <hr />
    </div>
  );
}