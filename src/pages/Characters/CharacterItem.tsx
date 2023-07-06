import { Link } from "react-router-dom";
import { ImageDiv } from "../../components";
import { CharacterItemProps } from "../../types";
import styles from "../../assets/styles/pages/characters.module.scss";

export default function CharacterItem({
  id,
  name,
  image
}: CharacterItemProps) {
  return (
    <Link 
      to={`/character/${id}`} 
      className={styles.characterItem}
    >
      <ImageDiv imgURL={image} height={300} />
      <p>{name}</p>
    </Link>
  );
}