import { ImageDiv, Text } from "../";
import { CardTypes } from "../../types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import styles from "../../assets/styles/components/cardList.module.scss";

export default function CharacterCard({
  id,
  name,
  image,
  status,
  location,
  linkWork = true
}: CardTypes) {
  return (
    <Link 
      to={!linkWork ? "" : `${ROUTES.CHARACTER}/${id}`} 
      className={styles.card}
    >
      <div className={styles.imgWrapper}>
        <ImageDiv
          className={styles.img} 
          imgURL={image} 
          height={300}
        />
      </div>
      <div className={styles.details}>
        <Text as="h2">{name}</Text>
        <Text as="p">Last location</Text>
        <Text as="h3">{location.name}</Text>
        <Text as="span" background={status}>
          {status}
        </Text>
      </div>
    </Link>
  )
}