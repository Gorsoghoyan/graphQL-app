import DetailsItem from "./DetailsItem";
import { useCharacter } from "../../hooks";
import { characterDetails } from "../../configs";
import { ErrorMessage, ImageDiv, Spinner, Text } from "../../components";
import styles from "../../assets/styles/pages/character.module.scss";

export default function Character() {
  const { error, loading, data } = useCharacter();

  return (
    <main className={styles.container}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <div className={styles.character}>
          <ImageDiv
            className={styles.img}
            imgURL={data.character.image}
            width={500}
            height={500}
          />
          <div className={styles.details}>
            <Text as="h2">{data.character.name}</Text>
            {characterDetails.map((detail) => (
              <DetailsItem
                key={detail.id}
                title={detail.title}
                value={
                  detail.key === "name"
                    ? data.character.location.name
                    : data.character[detail.key]
                }
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}