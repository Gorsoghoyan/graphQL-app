import { Text } from "../../components";
import { useCharacters } from "../../hooks";
import { CharacterType } from "../../types";
import CharacterItem from "./CharacterItem";
import styles from "../../assets/styles/pages/characters.module.scss";

export default function Characters() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>;

  return (
    <main className={styles.container}>
      <Text as="h1" color="appColor2" size="lg">
        Characters
      </Text>
      <section className={styles.characters}>
        {data.characters.results.map(
          (character: CharacterType) => (
            <CharacterItem
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          )
        )}
      </section>
    </main>
  );
}